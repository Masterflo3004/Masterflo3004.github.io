import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
  site: 'https://masterflo3004.github.io',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Florian Stüttgen',
      openGraph: {
        home: {
          title: 'Florian Stüttgen',
          description: 'Just a guy interestred in Programming.'
        },
        blog: {
          title: 'Blog',
          description: 'Just news about my projects.'
        },
        projects: {
          title: 'Projects'
        }
      },
      giscus: {
        repository: 'Masterflo3004/Masterflo3004.github.io',
        repositoryId: 'R_kgDOJvSO7w',
        category: 'General',
        categoryId: 'DIC_kwDOJvSO784CjsKT',
        mapping: 'pathname',
        strict: true,
        reactionsEnabled: true,
        emitMetadata: false,
        lang: 'en',
      }
    })
  ]
});
