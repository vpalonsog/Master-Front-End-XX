const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const postcssNested = require('postcss-nested');
const postcssImport = require('postcss-import');
const simpleVars = require('postcss-simple-vars');
const postcssMixins = require('postcss-mixins');


module.exports = {
  plugins:[
    postcssImport(),
    postcssPresetEnv({
        stage: 2
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

