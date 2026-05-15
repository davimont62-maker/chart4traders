import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Main settings",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "supportEmail",
      title: "Support email",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "chatMode",
      title: "Chat status",
      type: "string",
      initialValue: "offline",
      description: "Choose online when you are at the desk, offline to show a leave-message form, or hidden to remove the widget.",
      options: {
        list: [
          { title: "Online", value: "online" },
          { title: "Offline", value: "offline" },
          { title: "Hidden", value: "hidden" }
        ],
        layout: "radio"
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "chatTitle",
      title: "Chat widget title",
      type: "string",
      initialValue: "Live Chat"
    }),
    defineField({
      name: "onlineMessage",
      title: "Online message",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "onlineUrl",
      title: "Live chat room URL",
      type: "url",
      description: "Add your live room or chat-service URL here."
    }),
    defineField({
      name: "offlineMessage",
      title: "Offline message",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "setupSupportPrice",
      title: "Setup support price",
      type: "string",
      initialValue: "USD 99.00"
    }),
    defineField({
      name: "setupSupportPayhipUrl",
      title: "Setup support Payhip URL",
      type: "url",
      description: "External checkout link for the setup service."
    }),
    defineField({
      name: "setupSupportBookingUrl",
      title: "Setup support booking calendar URL",
      type: "url",
      description: "Calendly, Cal.com, or similar scheduling link."
    }),
    defineField({
      name: "setupSupportTeaserTitle",
      title: "Homepage setup teaser title",
      type: "string",
      initialValue: "Need Sierra Chart configured properly from the start?"
    }),
    defineField({
      name: "setupSupportTeaserBody",
      title: "Homepage setup teaser text",
      type: "text",
      rows: 3
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "chatMode"
    }
  }
});
