export class ExpressError extends Error {
	status : number | undefined;
}

export interface ExampleRow {
	id: string;
	example_name: string;
	example_body: string;
}

export interface ExampleRequest {
	exampleName: string;
	exampleBody: string;
}

// types related to the Slate Editor
interface CustomText {
	text : string,
	bold? : boolean,
	italic? : boolean,
	underline? : boolean,
	strikethrough? : boolean
}

interface ParagraphElement {
	type : 'paragraph',
	children : CustomText[]
}

interface CodeElement {
	type : 'code',
	children : CustomText[]
}

type CustomElement = ParagraphElement | CodeElement;

export type Descendant = CustomElement | CustomText;
