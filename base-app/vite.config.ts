import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

export default defineConfig({
	server: { port: 5173, strictPort: true, origin: 'http://localhost:5173', fs: { allow: ['.', '../shared'] } },
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.ts',
		exclude: [...configDefaults.exclude, 'e2e/**'],
	},
	plugins: [
		[react()],
		federation({
			name: 'host',
			remotes: {
				userServiceApp: {
					type: 'module',
					name: 'userServiceApp',
					entry: 'http://localhost:5174/remoteEntry.js',
					entryGlobalName: 'userServiceApp',
					shareScope: 'default',
				},
				analyticsApp: {
					type: 'module',
					name: 'analyticsApp',
					entry: 'http://localhost:5175/remoteEntry.js',
					entryGlobalName: 'analyticsApp',
					shareScope: 'default',
				},
			},
			filename: 'remoteEntry.js',
			shared: ['react', 'react-dom', 'react-router-dom'],
		}),
	],
	build: {
		target: 'chrome89',
	},
});
