import type { Product } from '@/types'
import { ProductCard } from '@/components/shared/product/product-card'

export function ProductList({ products, title }: { products: Product[]; title?: string }) {
	const haveProductsToShowing = !!products.length

	return (
		<div className="my-10">
			<h2 className="h2-bold mb-4">{title}</h2>

			{haveProductsToShowing ? (
				<div className="grid grid-cols-[repeat(auto-fit,_minmax(260px,_1fr))] gap-2">
					{products.map((product) => (
						<ProductCard key={product.slug} product={product} />
					))}
				</div>
			) : (
				<p>No products found</p>
			)}
		</div>
	)
}
