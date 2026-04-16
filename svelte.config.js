	import adapter from '@sveltejs/adapter-static';
	import { relative, sep } from 'node:path';

	/** @type {import('@sveltejs/kit').Config} */
	const config = {
		compilerOptions: {
			// defaults to rune mode for the project, execept for `node_modules`. Can be removed in svelte 6.
			runes: ({ filename }) => {
				const relativePath = relative(import.meta.dirname, filename);
				const pathSegments = relativePath.toLowerCase().split(sep);
				const isExternalLibrary = pathSegments.includes('node_modules');

				return isExternalLibrary ? undefined : true;
			}
		},
		kit: {
			adapter: adapter({
			// Output directory for built files
			pages: 'build',
			assets: 'build',
			
			// Fallback page for client-side routing
			fallback: '404.html',
			
			// Don't precompress files (GitHub Pages handles this)
			precompress: false,
			
			// Fail build if routes aren't prerendered
			strict: true
		}),

		// Important for GitHub Project Pages
		paths: {
			base: process.env.BASE_PATH || ''
		}
	}
};

export default config;
