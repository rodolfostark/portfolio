import { createClient, type ClientConfig } from "next-sanity";

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-09-16",
  useCdn: false,
};

const client = createClient(config);

export default client;
