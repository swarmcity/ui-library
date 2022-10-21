import cn from 'classnames'
import classes from './typography.module.css'

import type { DetailedHTMLProps, HTMLAttributes } from 'react'

export const VARIANTS = {
	'header-56': classes.header56,
	'header-44': classes.header44,
	'header-35': classes.header35,
	'header-30': classes.header30,
	'header-28': classes.header28,
	'header-26': classes.header26,
	'header-24': classes.header24,
	'header-22': classes.header22,
	'body-extra-light-20': classes.bodyextralight20,
	'body-extra-light-18': classes.bodyextralight18,
	'body-bold-16': classes.bodybold16,
	'body-light-16': classes.bodylight16,
	'small-bold-12': classes.smallbold12,
	'small-light-12': classes.smalllight12,
	'small-bold-10': classes.smallbold10,
	'small-light-10': classes.smalllight10,
}

export const COLORS = {
	blue: classes.blue,
	green: classes.green,
	'green-text': classes.greentext,
	grey1: classes.grey1,
	grey2: classes.grey2,
	'grey2-lines': classes.greylines,
	'grey2-light-text': classes.greylighttext,
	grey3: classes.grey3,
	grey4: classes.grey4,
	grey5: classes.grey5,
	red: classes.red,
	'red-text': classes.redtext,
	white: classes.white,
	yellow: classes.yellow,
}

type detailed<T> = DetailedHTMLProps<HTMLAttributes<T>, T>

type span = detailed<HTMLSpanElement> & { component?: 'span' }
type p = detailed<HTMLParagraphElement> & { component: 'p' }
type header = detailed<HTMLHeadingElement> & {
	component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
type label = detailed<HTMLLabelElement> & { component: 'label' }

export type TypographyProps = (span | p | header | label) & {
	color?: keyof typeof COLORS
	variant?: keyof typeof VARIANTS
}

export const Typography = ({
	color,
	variant,
	className,
	component,
	...props
}: TypographyProps) => {
	const cls = cn(
		classes.typography,
		color && COLORS[color],
		variant && VARIANTS[variant],
		className
	)

	switch (component) {
		case 'h1':
			return <h1 className={cls} {...(props as detailed<HTMLHeadingElement>)} />
		case 'h2':
			return <h2 className={cls} {...(props as detailed<HTMLHeadingElement>)} />
		case 'h3':
			return <h3 className={cls} {...(props as detailed<HTMLHeadingElement>)} />
		case 'h4':
			return <h4 className={cls} {...(props as detailed<HTMLHeadingElement>)} />
		case 'h5':
			return <h5 className={cls} {...(props as detailed<HTMLHeadingElement>)} />
		case 'h6':
			return <h6 className={cls} {...(props as detailed<HTMLHeadingElement>)} />
		case 'p':
			return <p className={cls} {...(props as detailed<HTMLHeadingElement>)} />
		case 'label':
			return (
				<label className={cls} {...(props as detailed<HTMLLabelElement>)} />
			)
	}
	return <span className={cls} {...props} />
}
