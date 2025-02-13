import { cn } from '@/lib/utils'

export function ProductPrice({ price, className }: { price: number; className?: string }) {
	const priceToString = price.toFixed(2)

	const [integerValue, floatValue] = priceToString.split('.')

	return (
		<p className={cn('text-2xl', className)}>
			<span className="text-xs align-super">$</span>
			{integerValue}
			<span className="text-xs align-super">.{floatValue}</span>
		</p>
	)
}
