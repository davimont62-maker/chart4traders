import { defineArrayMember, defineField, defineType } from "sanity";

export const guideType = defineType({
  name: "guide",
  title: "Guide / Article",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required()
    }),
    defineField({ name: "language", title: "Language", type: "string", initialValue: "en" }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "readTime", title: "Read time", type: "string" }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 2 }),
    defineField({ name: "description", title: "SEO description", type: "text", rows: 2 }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({ name: "body", title: "Body", type: "text", rows: 5 })
          ]
        })
      ]
    }),
    defineField({
      name: "relatedProductSlugs",
      title: "Related product slugs",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category"
    }
  }
});
