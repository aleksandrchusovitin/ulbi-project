type TMods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: TMods = {}, additional: Array<string> = []): string =>
  [cls, ...additional.filter(Boolean), ...Object.keys(mods).filter((className) => mods[className])].join(' ').trim();
