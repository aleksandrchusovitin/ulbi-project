export type BuildMode = 'production' | 'development';

export interface IBuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface IBuildOptions {
  mode: BuildMode;
  paths: IBuildPaths;
  isDev: boolean;
  port: number;
  analize: boolean;
}

export interface IBuildEnv {
  mode: BuildMode;
  port: number;
  analize: boolean;
}
