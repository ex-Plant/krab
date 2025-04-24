import type { NextConfig } from 'next'
import type { Configuration as WebpackConfiguration } from 'webpack';
import webpack from 'webpack';

import { withPayload } from "@payloadcms/next/withPayload";
// import "./src/env.js";

/** @type {import("next").NextConfig} */
const config: NextConfig = {
  webpack: (config: WebpackConfiguration) => {
    config.plugins = config.plugins ?? [];
    config.plugins.push(new webpack.IgnorePlugin({
      resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
    }));

    return config;
  },
};


export default withPayload(config);
