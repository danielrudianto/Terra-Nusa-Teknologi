import { ScullyConfig } from '@scullyio/scully';
const { registerPlugin } = require('@scullyio/scully');
import fetch from 'node-fetch';

registerPlugin('router', 'blogsPlugin', async () => {
  const response = await (
    await fetch('https://terranusa.tech/api/routes')
  ).json();

  return response;
});

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'terra-nusa-teknologi',
  distFolder: './dist/terra-nusa-teknologi', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {
    '/Blog/:id/:title': {
      type: 'blogsPlugin',
    },
  },
};
