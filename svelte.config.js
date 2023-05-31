import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		csp: {
			mode: 'hash',
			directives: {
				'script-src': ['self'],
				'frame-ancestors': ['self'],
				'connect-src': ["'self'", 'ws://localhost:*'],
				'img-src': ["'self'", 'data:'],
				'font-src': ["'self'", 'data:'],
				'form-action': ["'self'"],
				'frame-ancestors': ["'self'"],
				'frame-src': ["'self'"],
				'manifest-src': ["'self'"],
				'media-src': ["'self'", 'data:'],
				'object-src': ["'none'"],
				'style-src': ["'self'", "'unsafe-inline'"]
			}
		}
	},

	preprocess: vitePreprocess()
};

export default config;
