export interface SlideData {
  id: number;
  url: string;
  title: string;
  desc?: string;
  status?: string;
  link: string;
}

export interface TrailerType {
  id: number;
  name: string;
  idVideo: string;
  urlImage: string;
  title: string;
}
