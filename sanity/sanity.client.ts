import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: 'as58ww5t',
    dataset: 'production',
    apiVersion: '2023-09-16',
    useCdn: true,
};

const client = createClient(config);

export default client;