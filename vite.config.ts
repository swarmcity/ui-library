import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
	plugins: [
		react(),
		dts({
			insertTypesEntry: true,
		}),
	],
	css: {
		modules: {
			localsConvention: 'camelCaseOnly',
		},
	},
	build: {
		sourcemap: true,
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'Swarm City UI Library',
			formats: ['es', 'umd'],
			fileName: (format) => `ui-library.${format}.js`,
		},
		rollupOptions: {
			external: ['react'],
			output: {
				globals: {
					react: 'react',
				},
			},
		},
	},
})
