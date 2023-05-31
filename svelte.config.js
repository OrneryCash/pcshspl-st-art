import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	csp: {
		mode: "hash",
		directives: {
			'script-src': ["'self'"],
			'frame-ancestors': ["'self'"]
		},
	},
	preprocess: vitePreprocess()
};

export default config;
