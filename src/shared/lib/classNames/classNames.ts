type TMods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  mods: TMods = {},
  additional: Array<string> = []
): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    Object.keys(mods).filter((className) => mods[className]),
  ].join(' ');
};
