"use client"
import * as React from 'react';
import { getPost, getPostTest } from "@/sanity/sanity-utils"
import { Padding } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { PortableText, PortableTextComponents } from "@portabletext/react"
import Image from 'next/image';


type Props = {
    params: { post: string };
}

const myPortableTextComponents: PortableTextComponents = {
    marks: {
        // Ex. 1: custom renderer for the em / italics decorator
        em: ({ children }) => <em className="text-gray-600 font-semibold">{children}</em>,

        // Ex. 2: rendering a custom `link` annotation
        link: ({ value, children }) => {
            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
            return (
                <a href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'}>
                    {children}
                </a>
            )
        },
    },
    block: {
        // Ex. 1: customizing common block types
        h1: ({ children }) => <h1 className="text-6xl leading-relaxed">{children}</h1>,
        h2: ({ children }) => <h2 className="text-5xl leading-relaxed">{children}</h2>,
        h3: ({ children }) => <h3 className="text-4xl leading-relaxed">{children}</h3>,
        h4: ({ children }) => <h4 className="text-3xl leading-relaxed">{children}</h4>,
        h5: ({ children }) => <h5 className="text-2xl leading-relaxed">{children}</h5>,
        h6: ({ children }) => <h6 className="text-xl leading-relaxed">{children}</h6>,
        normal: ({ children }) => <div className="text-lg leading-relaxed pl-5">{children}</div>,
        blockquote: ({ children }) => <blockquote className="border-l-purple-500">{children}</blockquote>,

        // Ex. 2: rendering custom styles
        customHeading: ({ children }) => (
            <h2 className="text-lg text-primary text-purple-700">{children}</h2>
        ),
    },
    list: {
        // Ex. 1: customizing common list types
        bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
        number: ({ children }) => <ol className="mt-lg">{children}</ol>,

        // Ex. 2: rendering custom lists
        checkmarks: ({ children }) => <ol className="m-auto text-lg">{children}</ol>,
    },
    listItem: {
        // Ex. 1: customizing common list types
        bullet: ({ children }) => <li style={{ listStyleType: 'disclosure-closed' }}>{children}</li>,
        number: ({ children }) => <div style={{ paddingLeft: "50px" }}><li style={{ listStyleType: 'numeric' }}>{children}</li></div>,
        // Ex. 2: rendering custom list items
        checkmarks: ({ children }) => <li>✅ {children}</li>,
    },
    types: {
        image: ({ value }) => <img src={value.imageUrl} />,
        callToAction: ({ value, isInline }) =>
            isInline ? (
                <a href={value.url}>{value.text}</a>
            ) : (
                <div className="callToAction">{value.text}</div>
            ),
    },
}

export default async function Post({ params }: Props) {
    const slug = params.post

    const post = await getPost(decodeURI(slug))


    return (
        <div style={{ backgroundColor: "white" }}>
            <Container maxWidth="xl">
                <Box sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
                    {post &&
                        <Stack spacing={2} >
                            <div>
                                <Typography variant="h4" component="div" sx={{ color: "#000000", maxWidth: "100%" }}>{post.name}</Typography>
                                <Typography variant="h6" component="div" sx={{ color: "#000000", maxWidth: "100%" }}>{post.writer}教練</Typography>

                                <Typography variant="body1" component="div" sx={{ color: "#000000" }}>
                                    {post.tags.map((tag) => (
                                        <span style={{ marginRight: '10px' }}>#{tag}</span>
                                    ))}
                                </Typography>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Image
                                    src={post.image}
                                    alt="Picture of coach"
                                    height={450}
                                    width={450}
                                />
                            </div>
                            <div style={{ color: "black" }}>
                                <PortableText value={post.content} components={myPortableTextComponents} />
                            </div>
                        </Stack>
                    }
                </Box>
            </Container>
        </div>
    )
}