const video = {
    name: 'video',
    title: "Youtube影片",
    type: "document",
    fields: [
        {
            name: "name",
            title: "影片標題",
            type: "string"
        },
        {
            name: "slug",
            title: "摘要",
            type: "slug",
            options: { source: "name" }
        },
        {

            name: 'class',
            title: '分類',
            type: 'string',
        },
        {
            name: 'tags',
            title: 'Tag',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        },
        {
            name: 'videoUrl',
            title: '影片網址',
            type: 'url',
        },
        {
            name: "image",
            title: "封面照片",
            type: "image",
            options: { hotspot: true },
            field: [{
                name: "alt",
                title: "Alt",
                type: "string"
            }]
        },
        {
            name: "content",
            title: "內容",
            type: "array",
            of: [{
                type: "block",
            }, {
                type: 'image'
            },]
        },
    ]
}
export default video 