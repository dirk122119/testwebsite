const project = {
    name:'project',
    title: "Projects",
    type:"document",
    fields:[
        {
            name:"name",
            title:"名稱",
            type:"string",
        },
        {
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{source:"name"}
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{type: 'string'}],
            options: {
              layout: 'tags'
            }
          },
        {
            name:"image",
            title:"Image",
            type:"image",
            options:{hotspot:true},
            field:[{
                name:"alt",
                title:"Alt",
                type:"string"
            }]
        },
        {
            name:"url",
            title:"URL",
            type:"url"
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }]
          }
    ]
}

export default project