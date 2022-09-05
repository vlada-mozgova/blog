/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
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
