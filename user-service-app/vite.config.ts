import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { federation } from '@module-federation/vite';

export default defineConfig({
	plugins: [
		react(),
		federation({
			name: 'userServiceApp',
			filename: 'remoteEntry.js',
			exposes: {
				'./remote-app': './src/App.tsx',
			},
			shared: ['react', 'react-dom', 'react-router-dom'],
		}),
	],
	server: { origin: 'http://localhost:5174', fs: { allow: ['.', '../shared'] } },
	build: {
		target: 'chrome89',
	},
});
