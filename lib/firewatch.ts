import { IColorSet } from 'vscode-theme-generator';

import * as color from '../colors';

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
	// ui: {
	// 	cursor: string,
	// 	/** Visible whitespace (editor.renderWhitespace) */
	// 	invisibles: GRAY,
	// 	/** Indent guide */
	// 	guide: GRAY,
	// 	/** Line highlight, this will remove the line borders in favor of a solid highlight */
	// 	lineHighlight: string,

	// 	findMatchHighlight: string,
	// 	currentFindMatchHighlight: string,
	// 	findRangeHighlight: string,
	// 	/** Highlights the line(s) of the current find match, this also applies to things like find symbol */
	// 	rangeHighlight: string,
	// 	/** Highlights strings that match the current selection, excluding the selection itself */
	// 	selectionHighlight: string,

	// 	selection: string,
	// 	wordHighlight: string,
	// 	wordHighlightStrong: string,
	// 	activeLinkForeground: string
	// },
	// terminal: {
	// 	black: string,
	// 	red: string,
	// 	green: string,
	// 	yellow: string,
	// 	blue: string,
	// 	magenta: string,
	// 	cyan: string,
	// 	white: string,
	// 	brightBlack: string,
	// 	brightRed: string,
	// 	brightGreen: string,
	// 	brightYellow: string,
	// 	brightBlue: string,
	// 	brightMagenta: string,
	// 	brightCyan: string,
	// 	brightWhite: string
	// }
};
