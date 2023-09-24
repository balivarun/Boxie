/** @type {import('next').NextConfig} */



module.exports = {
    webpack: (
      config,
      { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
      // Important: return the modified config
      config.externals.push({ sharp: 'commonjs sharp', canvas: 'commonjs canvas' })
      return config
    },
  }