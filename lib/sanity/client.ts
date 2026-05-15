import { createClient } from "next-sanity";
import { apiVersion, dataset, hasSanityConfig, projectId } from "@/sanity/env";

export const sanityClient = createClient({
  projectId: projectId || "replace-with-project-id",
  dataset,
  apiVersion,
  useCdn: true
});

export { hasSanityConfig };
