/** Dados estruturados (schema.org) para os buscadores. */
export function JsonLd({ dados }: { dados: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }} />;
}
