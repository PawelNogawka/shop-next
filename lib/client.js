//import myConfiguredSanityClient from './sanityClient'
import imageUrlBuilder from "@sanity/image-url";

import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "l6tzw7nt",
  dataset: "production",
  apiVersion: "2023-01-06", // use current UTC date - see "specifying API version"!
  token:process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);


