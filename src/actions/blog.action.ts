"use server";

import { client } from "@/lib/sanity/client";
import { Post } from "../../sanity.types";

export async function getAllPost() {
  const posts =
    await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      author->{name},
      categories[]->{title}
    }`);
  return posts as Post[];
}

export async function getPostBySlug(slug: string) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      mainImage,
      publishedAt,
      author->{name, image, bio},
      categories[]->{title},
      body
    }`,
    { slug }
  );
  return post as Post;
}
