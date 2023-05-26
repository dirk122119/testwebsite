const post = {
    name: 'post',
    title: "部落格文章",
    type: "document",
    fields: [
        {
            name: "name",
            title: "文章標題",
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
            options: {
                list: [
                    { title: '訓練', value: '訓練' },
                    { title: '飲食', value: '飲食' },
                    { title: '睡眠', value: '睡眠' },
                    { title: '心理', value: '心理' },
                    { title: '健康', value: '健康' },
                ], // <-- predefined values
                layout: 'radio' // <-- defaults to 'dropdown'
            }
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
            title: '教練',
            name: 'writer',
            type: 'reference',
            to: [{type: 'coach'}]
          },
          {
            name: "image",
            title: "文章照片",
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
export default post 