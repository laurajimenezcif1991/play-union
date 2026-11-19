/** Prefix public assets and internal routes for GitHub Pages (`base`). */
export function asset(path: string): string {
  if (!path) return import.meta.env.BASE_URL || '/';
  if (/^(https?:|mailto:|tel:|#)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL || '/';
  const clean = path.replace(/^\//, '');
  return `${base}${clean}`;
}

/** Normalize a pathname for nav active-state checks (strip `base`). */
export function normalizePath(pathname: string): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  if (base && (pathname === base || pathname.startsWith(`${base}/`))) {
    const rest = pathname.slice(base.length);
    if (!rest || rest === '/') return '/';
    return rest.startsWith('/') ? rest : `/${rest}`;
  }
  return pathname || '/';
}
