import type { ButtonHTMLAttributes } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import estilos from './Button.module.css';

export type VarianteBotao = 'primary' | 'ghost';

const classes = (variante: VarianteBotao, extra?: string) =>
  [estilos.btn, variante === 'primary' ? estilos.primary : estilos.ghost, extra].filter(Boolean).join(' ');

type PropsBotao = ButtonHTMLAttributes<HTMLButtonElement> & { variante?: VarianteBotao };

/** Botão de ação. `variante` escolhe primário (verde) ou fantasma (contorno). */
export function Botao({ variante = 'primary', className, type = 'button', ...resto }: PropsBotao) {
  return <button type={type} className={classes(variante, className)} {...resto} />;
}

type PropsBotaoLink = Omit<LinkProps, 'className'> & { variante?: VarianteBotao; className?: string };

/** Mesmo visual de Botao, para navegação (link). */
export function BotaoLink({ variante = 'primary', className, ...resto }: PropsBotaoLink) {
  return <Link className={classes(variante, className)} {...resto} />;
}
