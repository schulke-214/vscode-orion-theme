import { generateTheme, IColorSet } from 'vscode-theme-generator';

const capitalize = (str: string) => str[0].toUpperCase() + str.substr(1, str.length);
const themes = ['firewatch'];

themes.map(async name => {
	const { colors } = await import(`./lib/${name}`);
	generateTheme(capitalize(name), colors, `${process.cwd()}/themes/${name}.json`);
});

// const colorSet: IColorSet = {
// 	base: {
// 		background: '#12171F',
// 		foreground: '#EFEFEF',
// 		color1: '#399EF4',
// 		color2: '#DA6771',
// 		color3: '#4EB071',
// 		color4: '#FFF099'
// 	}
// };

// generateTheme('My Theme', colorSet, path.join(__dirname, 'theme.json'));
