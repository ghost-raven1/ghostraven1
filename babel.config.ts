import { ConfigFunction } from '@babel/core';

const babelConfig: ConfigFunction = (api) => { api.cache(true);

    const presets = [ "@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript" ];
    const plugins = [ "babel-plugin-styled-components" ];

    return { presets, plugins }; };

export default babelConfig; 