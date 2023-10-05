import { z } from "zod";
import {
  detailTypeScheme,
  idSchema,
  productSchema,
  signInSchema,
} from "./validation";

export type IsignInSchema = z.infer<typeof signInSchema>;
export type Tproduct = z.infer<typeof productSchema>;
export type TdetailParam = z.infer<typeof detailTypeScheme>;
export type Tid = z.infer<typeof idSchema>;

export interface Iuser {
  email: string;
  password: string;
  isAdmin?: boolean;
}
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
