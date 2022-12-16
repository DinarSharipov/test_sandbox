export function extractStyles(styles?: string) {
  return styles
    ?.split('\n')
    .map((s) => s.trim())
    .filter((style) => !['null', 'undefined', 'true', 'false', 'NaN', ''].includes(style))
    .join(' ') || '';
}
