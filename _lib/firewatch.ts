import { IColorSet } from 'vscode-theme-generator';

import * as color from './colors';

export const colors: IColorSet = {
	type: 'dark',
	base: {
		background: color.BLACK,
		foreground: color.WHITE,
		color1: color.DESATURATEDORANGE,
		color2: color.LIGHTRED,
		color3: color.DESATURATEDBROWN,
		color4: color.DESATURATEDPURPLE
	},
	syntax: {
		boolean: color.LIGHTRED,
		function: color.LIGHTRED,
		functionCall: color.LIGHTORANGE,
		identifier: color.WHITE,
		keyword: color.LIGHTORANGE,
		number: color.RED,
		storage: color.LIGHTBROWN,
		string: color.RED,
		stringEscape: color.DESATURATEDPURPLE,
		class: color.LIGHTORANGE,
		classMember: color.DESATURATEDORANGE,
		type: color.LIGHTGREY,
		modifier: color.LIGHTGREY,
		cssClass: color.LIGHTRED,
		cssId: color.LIGHTPURPLE,
		cssTag: color.LIGHTORANGE,
		markdownQuote: color.LIGHTGREY
	}
};
