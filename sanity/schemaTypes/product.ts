import { defineArrayMember, defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      initialValue: "en",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Italian", value: "it" },
          { title: "Spanish", value: "es" },
          { title: "Portuguese", value: "pt" }
        ]
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "featured",
      title: "Show on homepage",
      type: "boolean",
      initialValue: false
    }),
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "productType",
      title: "Product type",
      type: "string",
      options: {
        list: ["Template", "Chartbook", "Bundle", "PDF Guide", "Free Resource"]
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "pageType",
      title: "Product page type",
      type: "string",
      initialValue: "standard",
      description: "Controls how much detail the public product page shows.",
      options: {
        list: [
          { title: "Compact", value: "compact" },
          { title: "Standard", value: "standard" },
          { title: "Long-form", value: "long-form" }
        ],
        layout: "radio"
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "templateCategory",
      title: "Template category",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      description: "Example: USD 49.00",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "payhipUrl",
      title: "Payhip product URL",
      type: "url",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "shortDescription",
      title: "Short description",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "fullDescription",
      title: "Full description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "detailedDescription",
      title: "Detailed description",
      type: "text",
      rows: 10,
      description: "Optional multi-paragraph copy. Use blank lines to separate paragraphs."
    }),
    defineField({
      name: "mainImage",
      title: "Main product image",
      type: "image",
      options: { hotspot: true }
    }),
    defineField({
      name: "gallery",
      title: "Gallery images",
      type: "array",
      of: [defineArrayMember({ type: "image", options: { hotspot: true } })]
    }),
    defineField({
      name: "productVideo",
      title: "Product video",
      type: "file",
      description: "Optional active chart video for the product page.",
      options: {
        accept: "video/mp4,video/webm,video/quicktime"
      }
    }),
    defineField({
      name: "productVideoPoster",
      title: "Video poster image",
      type: "image",
      description: "Optional cover image shown before the video is played.",
      options: { hotspot: true }
    }),
    defineField({
      name: "optimizedFor",
      title: "Optimized for",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "barTypes",
      title: "Bar / workflow types",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "includedFiles",
      title: "Included files",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "includedItems",
      title: "What is included",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "targetUser",
      title: "Who it is for",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "compatibility",
      title: "Compatibility",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "string" }),
            defineField({ name: "answer", title: "Answer", type: "text", rows: 3 })
          ]
        })
      ]
    }),
    defineField({
      name: "modules",
      title: "Course modules",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "outcomeSummary",
      title: "Long-form outcome summary",
      type: "text",
      rows: 3,
      description: "Optional. Used mainly for long-form product pages."
    }),
    defineField({
      name: "problem",
      title: "Long-form problem section",
      type: "text",
      rows: 4
    }),
    defineField({
      name: "solution",
      title: "Long-form solution section",
      type: "text",
      rows: 4
    }),
    defineField({
      name: "featureSections",
      title: "Long-form feature sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "body", title: "Body", type: "text", rows: 3 })
          ]
        })
      ]
    }),
    defineField({
      name: "walkthroughSections",
      title: "Long-form image walkthrough",
      description: "Optional image plus explanation rows for long-form product pages.",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true }
            }),
            defineField({
              name: "bullets",
              title: "Bullets",
              type: "array",
              of: [defineArrayMember({ type: "string" })]
            })
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
              media: "image"
            }
          }
        })
      ]
    }),
    defineField({
      name: "notFor",
      title: "Who it is not for",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "limitations",
      title: "Limitations / expectations",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "price",
      media: "mainImage"
    }
  }
});
