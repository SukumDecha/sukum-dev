import type { StructureResolver } from "sanity/structure";

// Structure for the Sanity Studio
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Blog Section
      S.listItem()
        .title("Blog")
        .child(
          S.list()
            .title("Posts")
            .items([
              S.documentListItem()
                .schemaType("post")
                .title("All Posts")
                .child(S.documentTypeList("post").title("All Posts")),
              S.documentListItem()
                .schemaType("category")
                .title("Categories")
                .child(S.documentTypeList("category").title("Categories")),
              S.documentListItem()
                .schemaType("author")
                .title("Authors")
                .child(S.documentTypeList("author").title("Authors")),
            ])
        ),

      // Projects Section
      S.listItem()
        .title("Projects")
        .child(
          S.list()
            .title("Projects")
            .items([
              S.documentListItem()
                .schemaType("project")
                .title("All Projects")
                .child(S.documentTypeList("project").title("All Projects")),
              S.documentListItem()
                .schemaType("projectCategory")
                .title("Categories")
                .child(
                  S.documentTypeList("projectCategory").title("Categories")
                ),
            ])
        ),
    ]);
