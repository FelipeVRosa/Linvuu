const PATHS: Record<string, string> = {
  ru: '<rect width="30" height="20" fill="#fff"/><rect y="6.67" width="30" height="6.67" fill="#0039a6"/><rect y="13.33" width="30" height="6.67" fill="#d52b1e"/>',
  de: '<rect width="30" height="20" fill="#000"/><rect y="6.67" width="30" height="6.67" fill="#dd0000"/><rect y="13.33" width="30" height="6.67" fill="#ffce00"/>',
  es: '<rect width="30" height="20" fill="#aa151b"/><rect y="5" width="30" height="10" fill="#f1bf00"/>',
  fr: '<rect width="30" height="20" fill="#fff"/><rect width="10" height="20" fill="#002395"/><rect x="20" width="10" height="20" fill="#ed2939"/>',
  br: '<rect width="30" height="20" fill="#009c3b"/><path d="M15 2 28 10 15 18 2 10Z" fill="#ffdf00"/><circle cx="15" cy="10" r="4" fill="#002776"/>',
  gb: '<rect width="30" height="20" fill="#012169"/><path d="M0 0 30 20M30 0 0 20" stroke="#fff" stroke-width="4"/><path d="M0 0 30 20M30 0 0 20" stroke="#C8102E" stroke-width="2"/><path d="M15 0V20M0 10H30" stroke="#fff" stroke-width="6.5"/><path d="M15 0V20M0 10H30" stroke="#C8102E" stroke-width="4"/>',
};

export function Bandeira({ id, size = 24 }: { id: string; size?: number }) {
  if (!PATHS[id]) return null;
  return <svg width={size} height={Math.round(size * 0.667)} viewBox="0 0 30 20" aria-hidden="true" dangerouslySetInnerHTML={{ __html: PATHS[id] }} />;
}
