const videoDir = {
    name: 'videoDir',
    title: "影片資料夾",
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
            title: '相關影片',
            name: 'video',
            type: 'array',
            of:[{
                type:'reference',
                to: [{type: 'video'}]
            }]
           
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
export default videoDir 