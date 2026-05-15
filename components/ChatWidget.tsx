"use client";

import { useMemo, useState } from "react";
import type { SiteSettings } from "@/data/siteSettings";

export function ChatWidget({ settings }: { settings: SiteSettings }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Website chat message from ${name || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name || "-"}\nEmail: ${email || "-"}\n\nMessage:\n${message || ""}`
    );

    return `mailto:${settings.supportEmail}?subject=${subject}&body=${body}`;
  }, [email, message, name, settings.supportEmail]);

  if (settings.chatMode === "hidden") {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[min(300px,calc(100vw-1.5rem))]">
      {isOpen ? (
        <div className="border border-line bg-graphite/95 p-3.5 text-white shadow-soft backdrop-blur">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">
                {settings.chatMode === "online" ? "Online now" : "Leave a message"}
              </p>
              <h2 className="mt-1 text-[13px] font-semibold text-white">{settings.chatTitle}</h2>
            </div>
            <button
              className="text-[11px] text-steel transition hover:text-white"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              Close
            </button>
          </div>

          {settings.chatMode === "online" ? (
            <div className="mt-4">
              <p className="text-[11px] leading-5 text-steel">{settings.onlineMessage}</p>
              {settings.onlineUrl ? (
                <a
                  className="mt-4 inline-flex min-h-8 items-center justify-center rounded-full bg-teal px-4 py-1.5 text-[11px] font-semibold text-ink transition hover:bg-volt"
                  href={settings.onlineUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Open Live Chat
                </a>
              ) : (
                <p className="mt-4 text-[11px] leading-4 text-steel">
                  Add your live chat room URL in Sanity to activate the room link.
                </p>
              )}
            </div>
          ) : (
            <form className="mt-4 grid gap-3">
              <input
                className="min-h-8 border border-line bg-ink px-3 text-[11px] text-white outline-none placeholder:text-steel"
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                type="text"
                value={name}
              />
              <input
                className="min-h-8 border border-line bg-ink px-3 text-[11px] text-white outline-none placeholder:text-steel"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email"
                type="email"
                value={email}
              />
              <textarea
                className="min-h-20 border border-line bg-ink px-3 py-2 text-[11px] leading-5 text-white outline-none placeholder:text-steel"
                onChange={(event) => setMessage(event.target.value)}
                placeholder={settings.offlineMessage}
                value={message}
              />
              <a
                className="inline-flex min-h-8 items-center justify-center rounded-full bg-teal px-4 py-1.5 text-[11px] font-semibold text-ink transition hover:bg-volt"
                href={mailtoHref}
              >
                Send Message
              </a>
            </form>
          )}
        </div>
      ) : null}

      <div className="mt-3 flex justify-end">
        <button
          className="inline-flex min-h-9 items-center gap-2 rounded-full border border-line bg-graphite/95 px-3 py-1.5 text-[11px] font-semibold text-white shadow-soft backdrop-blur transition hover:border-teal hover:text-teal"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          <span className={`h-2 w-2 rounded-full ${settings.chatMode === "online" ? "bg-teal" : "bg-amber"}`} />
          {settings.chatMode === "online" ? "Chat active" : "Message"}
        </button>
      </div>
    </div>
  );
}
