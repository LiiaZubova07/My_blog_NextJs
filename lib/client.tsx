import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const clientConfig = {
  projectId: "8olcpl0y",
  dataset: "production",
};

export const client = SanityClient({
  projectId: "your-project-id",
  dataset: "your-dataset-name",
  useCdn: true,
  apiVersion: "2023-05-22",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
