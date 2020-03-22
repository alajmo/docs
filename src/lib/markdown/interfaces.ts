/**
 * @license
 *
 * Copyright (c) 2018, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */
import { Renderer } from './renderer.ts';
export interface Obj {
    [key: string]: any;
}
export interface RulesBlockBase {
    newline: RegExp;
    code: RegExp;
    hr: RegExp;
    heading: RegExp;
    lheading: RegExp;
    blockquote: RegExp;
    list: RegExp;
    html: RegExp;
    def: RegExp;
    paragraph: RegExp;
    text: RegExp;
    bullet: RegExp;
    /**
     * List item (<li>).
     */
    item: RegExp;
}
export interface RulesBlockGfm extends RulesBlockBase {
    fences: RegExp;
}
export interface RulesBlockTables extends RulesBlockGfm {
    nptable: RegExp;
    table: RegExp;
}
export interface Link {
    href: string;
    title: string;
}
export interface Links {
    [key: string]: Link;
}
export declare enum TokenType {
    space = 1,
    text = 2,
    paragraph = 3,
    heading = 4,
    listStart = 5,
    listEnd = 6,
    looseItemStart = 7,
    looseItemEnd = 8,
    listItemStart = 9,
    listItemEnd = 10,
    blockquoteStart = 11,
    blockquoteEnd = 12,
    code = 13,
    table = 14,
    html = 15,
    hr = 16
}
export declare type Align = 'center' | 'left' | 'right';
export interface Token {
    type: number | string;
    text?: string;
    lang?: string;
    depth?: number;
    header?: string[];
    align?: Align[];
    cells?: string[][];
    ordered?: boolean;
    pre?: boolean;
    escaped?: boolean;
    execArr?: RegExpExecArray;
    /**
     * Used for debugging. Identifies the line number in the resulting HTML file.
     */
    line?: number;
}
export interface RulesInlineBase {
    escape: RegExp;
    autolink: RegExp;
    tag: RegExp;
    link: RegExp;
    reflink: RegExp;
    nolink: RegExp;
    strong: RegExp;
    em: RegExp;
    code: RegExp;
    br: RegExp;
    text: RegExp;
    _inside: RegExp;
    _href: RegExp;
}
export interface RulesInlinePedantic extends RulesInlineBase {
}
/**
 * GFM Inline Grammar
 */
export interface RulesInlineGfm extends RulesInlineBase {
    url: RegExp;
    del: RegExp;
}
export interface RulesInlineBreaks extends RulesInlineGfm {
}
export declare class MarkedOptions {
    gfm?: boolean;
    tables?: boolean;
    breaks?: boolean;
    pedantic?: boolean;
    sanitize?: boolean;
    sanitizer?: (text: string) => string;
    mangle?: boolean;
    smartLists?: boolean;
    silent?: boolean;
    /**
     * @param code The section of code to pass to the highlighter.
     * @param lang The programming language specified in the code block.
     */
    highlight?: (code: string, lang?: string) => string;
    langPrefix?: string;
    smartypants?: boolean;
    headerPrefix?: string;
    /**
     * An object containing functions to render tokens to HTML. Default: `new Renderer()`
     */
    renderer?: Renderer;
    /**
     * Self-close the tags for void elements (&lt;br/&gt;, &lt;img/&gt;, etc.)
     * with a "/" as required by XHTML.
     */
    xhtml?: boolean;
    /**
     * The function that will be using to escape HTML entities.
     * By default using inner helper.
     */
    escape?: (html: string, encode?: boolean) => string;
    /**
     * The function that will be using to unescape HTML entities.
     * By default using inner helper.
     */
    unescape?: (html: string) => string;
    /**
     * If set to `true`, an inline text will not be taken in paragraph.
     *
     * ```ts
     * // isNoP == false
     * Marked.parse('some text'); // returns '<p>some text</p>'
     *
     * Marked.setOptions({isNoP: true});
     *
     * Marked.parse('some text'); // returns 'some text'
     * ```
     */
    isNoP?: boolean;
}
export interface LexerReturns {
    tokens: Token[];
    links: Links;
}
export interface DebugReturns extends LexerReturns {
    result: string;
}
export interface Replacements {
    [key: string]: string;
}
export interface RulesInlineCallback {
    regexp?: RegExp;
    condition(): RegExp;
    tokenize(execArr: RegExpExecArray): void;
}
export declare type SimpleRenderer = (execArr?: RegExpExecArray) => string;