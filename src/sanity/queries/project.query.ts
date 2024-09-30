import { defineQuery } from "next-sanity";

export const FIND_ALL_PROJECT = defineQuery(
  `*[_type == "project"] | order(publishedAt desc) {
      title,
      slug,
      excerpt,
      mainImage,
      startAt,
      endAt,
      categories[]->{title}
    }`
);

export const FIND_PROJECT_BY_SLUG = defineQuery(
  `*[_type == "project" && slug.current == $slug][0]{
      title,
      mainImage,
      projectUrl,
      slug,
      excerpt,
      startAt,
      endAt,
      categories[]->{title},
      body
    }`
);
