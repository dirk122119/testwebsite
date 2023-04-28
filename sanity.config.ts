import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk"
import project from "./sanity/schemas/project-schema";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: '7svfhm2j',
    dataset: 'production',
    title: 'weightliftingcollege_sanity',
    apiVersion:"2023-03-04",
    basePath:"/admin",
    plugins:[deskTool()],
    schema:{types:schemas}
})

export default config