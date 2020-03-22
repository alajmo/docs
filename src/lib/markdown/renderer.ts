/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */
import { Align, MarkedOptions } from './interfaces.ts';
export declare class Renderer {
    protected options: MarkedOptions;
    constructor(options?: MarkedOptions);
    code(code: string, lang?: string, escaped?: boolean): string;
    blockquote(quote: string): string;
    html(html: string): string;
    heading(text: string, level: number, raw: string): string;
    hr(): string;
    list(body: string, ordered?: boolean): string;
    listitem(text: string): string;
    paragraph(text: string): string;
    table(header: string, body: string): string;
    tablerow(content: string): string;
    tablecell(content: string, flags: {
        header?: boolean;
        align?: Align;
    }): string;
    strong(text: string): string;
    em(text: string): string;
    codespan(text: string): string;
    br(): string;
    del(text: string): string;
    link(href: string, title: string, text: string): string;
    image(href: string, title: string, text: string): string;
    text(text: string): string;
}