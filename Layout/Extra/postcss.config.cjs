const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const postcssNested = require('postcss-nested');
const postcssImport = require('postcss-import');
const simpleVars = require('postcss-simple-vars');
const postcssMixins = require('postcss-mixins');
const postcssCustomMedia = require('postcss-custom-media');


module.exports = {
  plugins:[
    postcssImport(),
    postcssCustomMedia({ preserve: false }),
    postcssPresetEnv({
      stage: 2,
      features: {
        'custom-media-queries': false,
      }
    }),
    postcssNested(),
    simpleVars(),
    postcssMixins(),
    cssnano({
        preset: [
            'default', {
                calc:false,
            }
        ]
    })
  ] 
  
}

