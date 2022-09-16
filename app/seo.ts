import { initSeo } from "remix-seo";

import config from '~/docs.config';
export const { getSeo, getSeoMeta, getSeoLinks } = initSeo({
	// Pass any SEO defaults for your site here.
	// If individual routes do not provide their own meta and link tags,
	// the tags generated by the defaults will be used.
	title: config.title,
	titleTemplate: `%s | ${config.title}`,
	description: config.description,
});