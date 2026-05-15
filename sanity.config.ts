import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "chart4traders",
  title: "Chart4Traders CMS",
  basePath: "/studio",
  projectId: projectId || "replace-with-project-id",
  dataset,
  schema: {
    types: schemaTypes
  },
  plugins: [structureTool()]
});
