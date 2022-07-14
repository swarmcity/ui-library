import { h } from 'preact'
import cn from 'classnames'
import card from './card.module.css'
import { CardBody } from '../card-body/card-body'
import { CardFooter } from '../card-footer/card-footer'
import { IconButton } from '../icon-button/icon-button'
import { Input } from '../input/input'

export type CardProps = h.JSX.HTMLAttributes<HTMLDivElement> & {}

export const Card = ({ class: className, ...props }: CardProps) => (
	<div class={cn(card.card, className)} {...props}>
		{/* <IconButton
			variant="close"
			style="
				position: absolute; 
				right: 0; 
				top: 0;     
				z-index: 10;"
		/> */}
		<CardBody style="border-bottom: 1px solid #DFDFDF">
			<div>Here's a title</div>
			<div>Here's some more info</div>
			<div>Here's a title</div>
			<div>Here's some more info</div>
			{/* <Input id="request" />
			<Input id="amount" />
			<div
				style="				
					font-weight: 300;
					font-size: 12px;
					line-height: 15px;
					color: #ACACAC;
				"
			>
				+ 0.5 DAI fee
			</div> */}
		</CardBody>
		{/* <CardFooter style="text-align: right;"></CardFooter>
		<IconButton
			variant="requestNext"
			style="
				position: absolute;
				right: 48px;
				bottom: -10px;
				"
		/> */}
	</div>
)
