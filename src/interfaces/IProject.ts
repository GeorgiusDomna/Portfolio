import { StaticImageData } from "next/image";

export interface IProjectImage {
  img: StaticImageData;
  disc: string;
}

export interface IProject {
  titel: string;
  stackFront: string;
  stackBack?: string;
  imgPreview: StaticImageData;
  imgBig: IProjectImage[];
  gitHubLink: string;
  vercelLink?: string;
}