// base copied over from resideo/blueprint

const theme = {
	breakpoints: [36, 48, 62, 75].map(n => n + 'rem'),
	fonts: {
		body: '"Roboto", sans-serif',
		heading: '"URW_Din_CondBold", "Roboto", sans-serif',
		monospace: 'Menlo, monospace',
	},
	fontSizes: [0.625, 0.75, 0.875, 1, 1.25, 1.5, 2, 2.5].map(n => n + 'rem'),
	fontWeights: {
		body: 400,
		heading: 400,
		medium: 500,
		bold: 700,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.25,
	},
	space: [0, 0.25, 0.5, 1, 2, 4, 8, 16].map(n => n + 'rem'),
	colors: {
		dingdong: '#F74D7B',
		dongding: '#E9F6FD'
	}
};

const breakpointAliases = ['small', 'medium', 'large', 'xLarge'];
theme.breakpoints.forEach((value, index) => {
	theme.breakpoints[breakpointAliases[index]] = theme.breakpoints[index];
});

const sizeAliases = [
	'xxSmall',
	'xSmall',
	'small',
	'medium',
	'large',
	'xLarge',
	'xxLarge',
	'xxxLarge',
];

theme.fontSizes.forEach((_, index) => {
	theme.fontSizes[sizeAliases[index]] = theme.fontSizes[index];
});

theme.space.forEach((_, index) => {
	theme.space[sizeAliases[index]] = theme.space[index];
});

export default theme;
