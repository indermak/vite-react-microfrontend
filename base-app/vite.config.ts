import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	server: { origin: 'http://localhost:5173', fs: { allow: ['.', '../shared'] } },
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
