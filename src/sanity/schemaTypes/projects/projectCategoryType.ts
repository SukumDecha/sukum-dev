import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const projectCategoryType = defineType({
  name: "projectCategory",
  title: "Project Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
