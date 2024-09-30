import { defineQuery } from "next-sanity";

export const FIND_ALL_CATEGORY = defineQuery(
  `*[_type == "category"] {
        title
      }`
);
