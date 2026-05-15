"use client";

import { useState } from "react";

const topics = [
  "Product question",
  "Delivery issue",
  "Refund or billing",
  "Custom service enquiry",
  "Other"
];

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const topic = String(form.get("topic") || "");
    const product = String(form.get("product") || "");
    const order = String(form.get("order") || "");
    const message = String(form.get("message") || "");

    const subject = encodeURIComponent(`C4T support request - ${topic || "Contact"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Topic: ${topic}`,
        `Product: ${product || "Not specified"}`,
        `Order number: ${order || "Not specified"}`,
        "",
        "Message:",
        message
      ].join("\n")
    );

    setStatus("Opening your email app with the completed message.");
    window.location.href = `mailto:support@chart4traders.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="mt-7 border-y border-line" onSubmit={handleSubmit}>
      <p className="py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">
        Contact form
      </p>

      <div className="grid gap-3 border-t border-line py-4 sm:grid-cols-2">
        <label className="grid gap-1 text-[11px] text-steel">
          Name
          <input
            className="min-h-9 border border-line bg-ink px-3 text-xs text-white outline-none transition placeholder:text-steel/50 focus:border-teal"
            name="name"
            placeholder="Your name"
            required
            type="text"
          />
        </label>
        <label className="grid gap-1 text-[11px] text-steel">
          Email
          <input
            className="min-h-9 border border-line bg-ink px-3 text-xs text-white outline-none transition placeholder:text-steel/50 focus:border-teal"
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </label>
      </div>

      <div className="grid gap-3 border-t border-line py-4 sm:grid-cols-3">
        <label className="grid gap-1 text-[11px] text-steel">
          Topic
          <select
            className="min-h-9 border border-line bg-ink px-3 text-xs text-white outline-none transition focus:border-teal"
            name="topic"
            required
          >
            {topics.map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-[11px] text-steel">
          Product
          <input
            className="min-h-9 border border-line bg-ink px-3 text-xs text-white outline-none transition placeholder:text-steel/50 focus:border-teal"
            name="product"
            placeholder="Optional"
            type="text"
          />
        </label>
        <label className="grid gap-1 text-[11px] text-steel">
          Order number
          <input
            className="min-h-9 border border-line bg-ink px-3 text-xs text-white outline-none transition placeholder:text-steel/50 focus:border-teal"
            name="order"
            placeholder="Optional"
            type="text"
          />
        </label>
      </div>

      <label className="grid gap-1 border-t border-line py-4 text-[11px] text-steel">
        Message
        <textarea
          className="min-h-32 resize-y border border-line bg-ink px-3 py-2 text-xs leading-5 text-white outline-none transition placeholder:text-steel/50 focus:border-teal"
          name="message"
          placeholder="Describe the question or issue. For order questions, include the Payhip order number if available."
          required
        />
      </label>

      <div className="flex flex-col gap-2 border-t border-line py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] leading-4 text-steel/80">
          This opens your email app. No message is stored on this website.
        </p>
        <button
          className="focus-ring inline-flex min-h-8 items-center justify-center rounded-full bg-teal px-4 py-1.5 text-[11px] font-semibold lowercase text-ink transition hover:bg-volt"
          type="submit"
        >
          Send message
        </button>
      </div>

      {status && <p className="pb-3 text-[11px] text-teal">{status}</p>}
    </form>
  );
}
