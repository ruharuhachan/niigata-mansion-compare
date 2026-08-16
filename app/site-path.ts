const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function sitePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;

  const match = path.match(/^([^?#]*)(.*)$/);
  const pathname = match?.[1] ?? path;
  const suffix = match?.[2] ?? "";
  const lastSegment = pathname.split("/").at(-1) ?? "";
  const needsTrailingSlash =
    pathname !== "/" &&
    !pathname.endsWith("/") &&
    !lastSegment.includes(".");

  return `${basePath}${needsTrailingSlash ? `${pathname}/` : pathname}${suffix}`;
}
