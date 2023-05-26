import { PortableTextBlock } from "sanity";

export type typeCoaches = {
  _id: string,
  createdAt: Date,
  name: string,
  slug: string,
  image: string,
  url: string,
  content: PortableTextBlock[],
  _rev:string,
}

export type typePosts = {
  _id: string,
  createdAt: Date,
  name: string,
  slug: string,
  image: string,
  class:string
}