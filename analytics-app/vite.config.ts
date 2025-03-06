import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { federation } from '@module-federation/vite';

export default defineConfig({
	plugins: [
		react(),
		federation({
			name: 'analyticsApp',
			filename: 'remoteEntry.js',
			exposes: {
				'./remote-app': './src/App.tsx',
			},
			shared: ['react', 'react-dom', 'react-router-dom'],
		}),
	],
	server: {
		origin: 'http://localhost:5175',
	},
	// Do you need to support build targets lower than chrome89?
	// You can use 'vite-plugin-top-level-await' plugin for that.
	build: {
		target: 'chrome89',
	},
});
