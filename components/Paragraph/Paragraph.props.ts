import { ReactNode, DetailedProps } from 'react';

export interface PProps extends DetailedProps<HTMLElement<HTMLParagraphElement>,HTMLParagraphElement> {
	p: "s" | "m" | "l",
	children: ReactNode
}