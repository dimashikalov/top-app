import { ReactNode, DetailedProps, HTMLAttributes } from 'react';

export interface PProps extends DetailedProps<HTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement> {
	p: "s" | "m" | "l",
	children: ReactNode
}