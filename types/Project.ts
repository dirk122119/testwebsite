import { PortableTextBlock } from "sanity";

export type typeCoaches = {
  _id: string,
  _createdAt: string,
  name: string,
  slug: string,
  image: string,
  url: string,
  content: PortableTextBlock[],
  _rev:string,
}

export type typePosts = {
  _id: string,
  _createdAt: string,
  name: string,
  slug: string,
  image: string,
  class:string,
  writer:string,
  tags:string[]
}

export type typeVideoDir={
  _id: string,
  _createdAt: string,
  name: string,
  slug: string,
  image: string,
  class:string,
  content: PortableTextBlock[],
  tags:string[],
  video:string[]
}