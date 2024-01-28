export interface IProjectImage {
  img: string;
  disc: string;
}

export interface IProject {
  titel: string;
  stackFront: string;
  stackBack?: string;
  imgPreview: string;
  imgBig: IProjectImage[];
  gitHubLink: string;
  vercelLink?: string;
}