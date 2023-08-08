import { ReactNode, DetailedProps, HTMLAttributes } from 'react';

export interface TagProps extends DetailedProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
	p: "s" | "m";
	children: ReactNode;
	color: "ghost" | "red" | 'grey' | 'green' | 'primary';
	href?: string
}