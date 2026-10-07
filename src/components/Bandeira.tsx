const PATHS: Record<string, string> = {
  ru: '<rect width="30" height="20" fill="#fff"/><rect y="6.67" width="30" height="6.67" fill="#0039a6"/><rect y="13.33" width="30" height="6.67" fill="#d52b1e"/>',
  de: '<rect width="30" height="20" fill="#000"/><rect y="6.67" width="30" height="6.67" fill="#dd0000"/><rect y="13.33" width="30" height="6.67" fill="#ffce00"/>',
  es: '<rect width="30" height="20" fill="#aa151b"/><rect y="5" width="30" height="10" fill="#f1bf00"/>',
  fr: '<rect width="30" height="20" fill="#fff"/><rect width="10" height="20" fill="#002395"/><rect x="20" width="10" height="20" fill="#ed2939"/>',
  br: '<rect width="30" height="20" fill="#009c3b"/><path d="M15 2 28 10 15 18 2 10Z" fill="#ffdf00"/><circle cx="15" cy="10" r="4" fill="#002776"/>',
  en: '<rect width="30" height="20" fill="#fff"/><rect y="0.00" width="30" height="1.54" fill="#b22234"/><rect y="3.08" width="30" height="1.54" fill="#b22234"/><rect y="6.15" width="30" height="1.54" fill="#b22234"/><rect y="9.23" width="30" height="1.54" fill="#b22234"/><rect y="12.31" width="30" height="1.54" fill="#b22234"/><rect y="15.38" width="30" height="1.54" fill="#b22234"/><rect y="18.46" width="30" height="1.54" fill="#b22234"/><rect width="13" height="10.77" fill="#3c3b6e"/><circle cx="1.6" cy="1.4" r=".45" fill="#fff"/><circle cx="4.0" cy="1.4" r=".45" fill="#fff"/><circle cx="6.4" cy="1.4" r=".45" fill="#fff"/><circle cx="8.8" cy="1.4" r=".45" fill="#fff"/><circle cx="11.2" cy="1.4" r=".45" fill="#fff"/><circle cx="1.6" cy="3.6" r=".45" fill="#fff"/><circle cx="4.0" cy="3.6" r=".45" fill="#fff"/><circle cx="6.4" cy="3.6" r=".45" fill="#fff"/><circle cx="8.8" cy="3.6" r=".45" fill="#fff"/><circle cx="11.2" cy="3.6" r=".45" fill="#fff"/><circle cx="1.6" cy="5.8" r=".45" fill="#fff"/><circle cx="4.0" cy="5.8" r=".45" fill="#fff"/><circle cx="6.4" cy="5.8" r=".45" fill="#fff"/><circle cx="8.8" cy="5.8" r=".45" fill="#fff"/><circle cx="11.2" cy="5.8" r=".45" fill="#fff"/><circle cx="1.6" cy="8.0" r=".45" fill="#fff"/><circle cx="4.0" cy="8.0" r=".45" fill="#fff"/><circle cx="6.4" cy="8.0" r=".45" fill="#fff"/><circle cx="8.8" cy="8.0" r=".45" fill="#fff"/><circle cx="11.2" cy="8.0" r=".45" fill="#fff"/>',
};

export function Bandeira({ id, size = 24 }: { id: string; size?: number }) {
  if (!PATHS[id]) return null;
  return <svg width={size} height={Math.round(size * 0.667)} viewBox="0 0 30 20" aria-hidden="true" dangerouslySetInnerHTML={{ __html: PATHS[id] }} />;
}
