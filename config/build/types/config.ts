export type TBuildMode = 'production' | 'development';

export interface IBuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface IBuildOptions {
  mode: TBuildMode;
  paths: IBuildPaths;
  isDev: boolean;
  port: number;
  analize: boolean;
}

export interface IBuildEnv {
  mode: TBuildMode;
  port: number;
  analize: boolean;
}
