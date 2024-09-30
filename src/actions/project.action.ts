"use server";

import { client } from "@/lib/sanity/sanity.client";

import {
  FIND_ALL_PROJECT,
  FIND_PROJECT_BY_SLUG,
} from "@/sanity/queries/project.query";
import {
  FIND_ALL_PROJECTResult,
  FIND_PROJECT_BY_SLUGResult,
} from "../../sanity.types";

export async function getAllProject() {
  const posts = await client.fetch(FIND_ALL_PROJECT);
  return posts as FIND_ALL_PROJECTResult;
}

export async function getProjectBySlug(slug: string) {
  const post = await client.fetch(FIND_PROJECT_BY_SLUG, { slug });
  return post as FIND_PROJECT_BY_SLUGResult;
}
