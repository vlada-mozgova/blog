/** @type {import('next').NextConfig} */

import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER)
    return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
        mongodbUserName: "vlada",
        mongodbPassword: "H2gAC5Lk",
        mongodbClusterName: "cluster0",
        mongodbDatabase: "blog-dev",
      },
    };

  return {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      mongodbUserName: "vlada",
      mongodbPassword: "H2gAC5Lk",
      mongodbClusterName: "cluster0",
      mongodbDatabase: "blog",
    },
  };
};
