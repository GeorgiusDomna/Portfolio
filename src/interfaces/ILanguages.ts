interface Language {
  nativeName: string;
}

export interface Languages {
  [key: string]: Language;
}