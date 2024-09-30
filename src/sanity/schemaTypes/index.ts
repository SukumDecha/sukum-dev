import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./blogs/categoryType";
import { postType } from "./blogs/postType";
import { authorType } from "./blogs/authorType";
import { projectType } from "./projects/projectType";
import { projectCategoryType } from "./projects/projectCategoryType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    projectType,
    projectCategoryType,
  ],
};
