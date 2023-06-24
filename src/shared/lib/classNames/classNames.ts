type TMods = Record<string, boolean | string>;

export const clsx = (
  cls: string,
  mods: TMods,
  additional: Array<string>
): string => {
  return [
    cls,
    ...additional,
    Object.keys(mods).filter((className) => mods[className]),
  ].join(' ');
};
