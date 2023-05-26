const coach = {
    name: "coach",
    title: "教練資料",
    type: "document",
    fields: [
        {
            name: "name",
            title: "教練姓名",
            type: "string"
        },
        {
            name: "coach",
            title: "教練職稱",
            type: "string"
        },
        {
            name: 'skill',
            title: '專長',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        },
        {
            name: 'experience',
            title: '教練經歷',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        },
        {
            name: 'license',
            title: '教練證照',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        },
        {
            name: 'prizes',
            title: '獲得獎項',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        },
        {
            name: "image",
            title: "教練照片",
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
            title: "簡介",
            type: "array",
            of: [{
                type: "block",
            }, {
                type: 'image'
            },]
        },
        {
            name: "igUrl",
            title: "IG",
            type: "url"
        },
        {
            name: "fbUrl",
            title: "FB",
            type: "url"
        },

    ]
}
export default coach