import Image from 'next/image'
import Link from 'next/link'

import type { Product } from '@/types'

import { Card, CardContent, CardHeader } from '@/components/ui/card'

import { ProductPrice } from '@/components/shared/product/product-price'
import { ProductRating } from '@/components/shared/product/product-rating'

export function ProductCard({ product }: { product: Product }) {
	const haveStockOfProduct = product.stock > 0

	return (
		<Card className="w-full max-w-sm overflow-hidden flex flex-col border-muted">
			<CardHeader className="p-0 items-center">
				<Link href={`/product/${product.slug}`}>
					<Image priority src={product.images[0]} alt={product.name} width={300} height={300} />
				</Link>
			</CardHeader>
			<CardContent className="p-4 flex flex-col gap-4 flex-1">
				<div className="text-xs">{product.brand}</div>
				<Link href={`/product/${product.slug}`} className="flex-1">
					<h2 className="text-sm font-medium">{product.name}</h2>
				</Link>
				<div className="flex-between gap-4 flex-1">
					<ProductRating rating={Number(product.rating)} />
					{haveStockOfProduct ? (
						<ProductPrice price={Number(product.price)} />
					) : (
						<p className="text-destructive">Out of stock</p>
					)}
				</div>
			</CardContent>
		</Card>
	)
}
