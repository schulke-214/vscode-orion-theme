import { lighten, darken, desaturate } from 'polished';

// BASE
export const BLACK = '#191f26';
export const GREY = '#4c4d4e';
export const WHITE = '#f8f8f0';
export const PURPLE = '#9f66d1';
export const RED = '#ff3d3d';
export const YELLOW = '#ffc252';
export const ORANGE = '#ff8f00';
export const BROWN = '#d19a66';

// VARIANTS - LIGHT
export const LIGHTBLACK = lighten(0.2, BLACK);
export const LIGHTGREY = lighten(0.2, GREY);
export const LIGHTWHITE = lighten(0.2, WHITE);
export const LIGHTPURPLE = lighten(0.2, PURPLE);
export const LIGHTRED = lighten(0.2, RED);
export const LIGHTYELLOW = lighten(0.2, YELLOW);
export const LIGHTORANGE = lighten(0.2, ORANGE);
export const LIGHTBROWN = lighten(0.2, BROWN);

// VARIANTS - DARK
export const DARKBLACK = darken(0.2, BLACK);
export const DARKGREY = darken(0.2, GREY);
export const DARKPURPLE = darken(0.2, PURPLE);
export const DARKRED = darken(0.2, RED);
export const DARKYELLOW = darken(0.2, YELLOW);
export const DARKWHITE = darken(0.2, WHITE);
export const DARKORANGE = darken(0.2, ORANGE);
export const DARKBROWN = darken(0.2, BROWN);

// VARIANTS - DARK
export const DESATURATEDBLACK = desaturate(0.2, BLACK);
export const DESATURATEDGREY = desaturate(0.2, GREY);
export const DESATURATEDWHITE = desaturate(0.2, WHITE);
export const DESATURATEDPURPLE = desaturate(0.2, PURPLE);
export const DESATURATEDRED = desaturate(0.2, RED);
export const DESATURATEDYELLOW = desaturate(0.2, YELLOW);
export const DESATURATEDORANGE = desaturate(0.2, ORANGE);
export const DESATURATEDBROWN = desaturate(0.2, BROWN);

// SYNTAX
export const BOOLEAN = BLACK;
export const FUNCTION = BLACK;
export const FUNCTION_CALL = BLACK;
export const IDENTIFIER = BLACK;
export const KEYWORD = BLACK;
export const NUMBER = BLACK;
export const STORAGE = BLACK;
export const STRING = BLACK;
export const STRINGESCAPE = BLACK;
export const COMMENT = BLACK;
export const CLASS = BLACK;
export const CLASSMEMBER = BLACK;
export const TYPE = BLACK;
export const MODIFIER = BLACK;
