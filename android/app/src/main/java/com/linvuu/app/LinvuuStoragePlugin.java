package com.linvuu.app;

import android.content.Context;
import android.content.SharedPreferences;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import java.util.Map;

/** Dados de estudo e preferências, nunca credenciais Firebase ou arquivos de áudio. */
@CapacitorPlugin(name = "LinvuuStorage")
public class LinvuuStoragePlugin extends Plugin {
    private SharedPreferences dados() { return getContext().getSharedPreferences("linvuu_estudo_v1", Context.MODE_PRIVATE); }
    private boolean permitido(String key) {
        return key != null && key.length() <= 512 && (key.equals("linvuu:armazenamento:v2") || key.matches("^linvuu:(progresso:v1|progresso-pendente:v1|dias-concluidos:v1|pratica-apk:v1)(:.*)?$|^linvuu:(tema-app|leitura-app|sons|locale)$"));
    }
    @PluginMethod public void snapshot(PluginCall call) {
        JSObject values = new JSObject();
        for (Map.Entry<String, ?> e : dados().getAll().entrySet()) if (permitido(e.getKey()) && e.getValue() instanceof String) values.put(e.getKey(), e.getValue());
        JSObject result = new JSObject(); result.put("values", values); call.resolve(result);
    }
    @PluginMethod public void set(PluginCall call) {
        String key = call.getString("key"), value = call.getString("value");
        if (!permitido(key) || value == null || value.length() > 1048576) { call.reject("Dados inválidos"); return; }
        if (dados().edit().putString(key, value).commit()) call.resolve(); else call.reject("Falha ao salvar");
    }
    @PluginMethod public void remove(PluginCall call) {
        String key = call.getString("key"); if (!permitido(key)) { call.reject("Chave inválida"); return; }
        if (dados().edit().remove(key).commit()) call.resolve(); else call.reject("Falha ao remover");
    }
}
