import { IColorSet } from 'vscode-theme-generator';

import * as color from '../colors';

export const colors: IColorSet = {
	type: 'dark',
	base: {
		background: color.BLACK,
		foreground: color.DARKGREY,
		color1: color.ORANGE,
		color2: color.RED,
		color3: color.DARKBROWN,
		color4: color.LIGHTGREY
	}
	// syntax: {
	// 	boolean: string,
	// 	function: string,
	// 	functionCall: string,
	// 	identifier: string,
	// 	keyword: string,
	// 	number: string,
	// 	storage: string,
	// 	string: string,
	// 	stringEscape: string,
	// 	comment: string,
	// 	class: string,
	// 	classMember: string,
	// 	type: string,
	// 	modifier: string,
	// 	cssClass: string,
	// 	cssId: string,
	// 	cssTag: string,
	// 	markdownQuote: string
	// },
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
