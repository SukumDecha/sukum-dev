import { defineQuery } from "next-sanity";

export const FIND_ALL_BLOG = defineQuery(
  `*[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      author->{name},
      categories[]->{title}
    }`
);

export const FIND_BLOG_BY_SLUG = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]{
      title,
      mainImage,
      publishedAt,
      excerpt,
      author->{name, image, bio},
      categories[]->{title},
      body
    }`
);
