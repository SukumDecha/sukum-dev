"use server";

import { client } from "@/lib/sanity/client";

export async function getAllCategories() {
  const categories = await client.fetch(`*[_type == "category"] {
        title
      }`);
  return categories.map((category: { title: string }) => category.title);
}
