export const SITE_URL = (process.env.SITE_URL || "https://www.barnhardtperformance.com").replace(/\/+$/, "");

export function absoluteUrl(pathname: string) {
  if (!pathname.startsWith("/")) return new URL(pathname, SITE_URL).toString();
  return `${SITE_URL}${pathname}`;
}

