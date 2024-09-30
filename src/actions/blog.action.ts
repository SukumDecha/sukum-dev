"use server";

import { client } from "@/lib/sanity/sanity.client";

import { FIND_ALL_BLOG, FIND_BLOG_BY_SLUG } from "@/sanity/queries/blog.query";
import {
  FIND_ALL_BLOGResult,
  FIND_BLOG_BY_SLUGResult,
} from "../../sanity.types";

export async function getAllPost() {
  const posts = await client.fetch(FIND_ALL_BLOG);
  return posts as FIND_ALL_BLOGResult;
}

export async function getPostBySlug(slug: string) {
  const post = await client.fetch(FIND_BLOG_BY_SLUG, { slug });
  return post as FIND_BLOG_BY_SLUGResult;
}
