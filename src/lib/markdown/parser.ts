/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */
import { InlineLexer } from './inline-lexer.ts';
import { Links, MarkedOptions, SimpleRenderer, Token } from './interfaces.ts';
import { Renderer } from './renderer.ts';
/**
 * Parsing & Compiling.
 */
export declare class Parser {
  simpleRenderers: SimpleRenderer[];
  protected tokens: Token[];
  protected token: Token;
  protected inlineLexer: InlineLexer;
  protected options: MarkedOptions;
  protected renderer: Renderer;
  protected line: number;
  constructor(options?: MarkedOptions);
  static parse(tokens: Token[], links: Links, options?: MarkedOptions): string;
  parse(links: Links, tokens: Token[]): string;
  debug(links: Links, tokens: Token[]): string;
  protected next(): Token;
  protected getNextElement(): Token;
  protected parseText(): string;
  protected tok(): any;
}