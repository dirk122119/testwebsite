import { typeCoaches, typePosts,typeVideoDir } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config"

export async function getProjects(): Promise<typeCoaches[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type=="project"]{
            _id,
            _createAt,
            name,
            "slug":slug.current,
            "image":image.asset->url,
            url,content
        }`
    )
}

export async function getCoaches(filter: string = ""): Promise<typeCoaches[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type=="coach" && name!="${filter}"]{
            _id,
            _createAt,
            name,
            "slug":slug.current,
            "image":image.asset->url,
            skill,content,
        }`
    )
}

export async function getPosts(filter: string = ""): Promise<typePosts[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type=="post" && name!="${filter}"]{ ..., writer-> }{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "image":image.asset->url,
            class,
            "writer":writer.name,
            tags
        }`
    )
}

export async function getCoach(slug: string) {
    return createClient(clientConfig).fetch(
        groq`*[_type=="coach" && name=="${slug}"][0]{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "image":image.asset->url,
            skill,
            experience,
            license,
            content,
            prizes,
            igUrl,
            fbUrl,
            coach
        }`
    )
}

export async function getPost(slug: string) {
    return createClient(clientConfig).fetch(
        groq`*[_type=="post" && name=="${slug}"][0]{ ..., writer-> }{
            _id,
            _createdAt,
            name,
            class,
            "writer":writer.name,
            "image":image.asset->url,
            content,
            tags,

        }`
    )
}

export async function getCoachPost(slug: string) {
    return createClient(clientConfig).fetch(
        groq`*[_type=="post" && writer._ref=="${slug}"]{
            _id,
            _createdAt,
            name,
            class,
            "writer_ref":writer._ref,
            "image":image.asset->url,
            content,
            tags,
        }`
    )
}

export async function getVideoDir():Promise<typeVideoDir[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type=="videoDir"]{
            _id,
            _createdAt,
            name,
            class,
            "image":image.asset->url,
            content,
            tags,
            video,
        }`
    )
}

export async function getDirVideos(slug: string) {
    return createClient(clientConfig).fetch(
        groq`*[_type=="videoDir" && "${slug}" in video[]->class][0]{ ..., video[]-> }{
            video,
            "imageURL":video[].image.asset->url
        }`
    )
}
