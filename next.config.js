const path = require('path')

//@ts-check
/** @type {import("next").NextConfig} */
module.exports = {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
      prependData: `@import "~@styles/variables.scss";`,
    },
    webpack: (config, {isServer}) => {
       if (isServer) {
            config.externals.push('_http_common');        
       }
       return config;
    },
    target: 'serverless',
}
