"use server";

import { client } from "@/lib/sanity/sanity.client";
import { FIND_ALL_CATEGORY } from "@/sanity/queries/category.query";
import { FIND_ALL_CATEGORYResult } from "../../sanity.types";

export async function getAllCategories() {
  const categories = (await client.fetch(
    FIND_ALL_CATEGORY
  )) as FIND_ALL_CATEGORYResult;
  return categories.map((category: { title: string }) => category.title);
}
