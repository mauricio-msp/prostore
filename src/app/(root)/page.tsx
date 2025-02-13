import { ProductList } from '@/components/shared/product/product-list'
import { getProducts } from '@/lib/actions/product.actions'

export default async function HomePage() {
	const products = await getProducts()

	return <ProductList products={products} title="Newest Arrivals" />
}
