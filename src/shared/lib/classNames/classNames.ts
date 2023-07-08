type Mods = Record<string, boolean | string | undefined>;

export const classNames = (cls: string, mods: Mods = {}, additional: Array<string> = []): string =>
  [cls, ...additional.filter(Boolean), ...Object.keys(mods).filter((className) => mods[className])].join(' ').trim();
