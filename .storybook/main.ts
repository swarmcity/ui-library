import { dset } from 'dset'

// Types
import type { StorybookViteConfig } from '@storybook/builder-vite'

const config: StorybookViteConfig = {
	framework: '@storybook/preact',
	stories: ['../src/**/*.stories.@(ts|tsx)'],
	addons: [
		'@storybook/addon-a11y',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
	],
	core: {
		builder: '@storybook/builder-vite',
	},
	features: {
		storyStoreV7: true,
	},
	async viteFinal(config) {
		dset(config, 'css.modules.localsConvention', 'camelCaseOnly')
		dset(config, 'config.output.publicPath', process.env.PUBLIC_PATH ?? '')
		return config
	},
}

export default config
