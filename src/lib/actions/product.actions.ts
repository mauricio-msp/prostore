'use server'

import { convertToPlainObject } from '@/lib/utils'
import { prisma } from '@/lib/prisma'

export async function getProducts() {
	const products = await prisma.product.findMany({ orderBy: { createdAt: 'desc' } })

	return convertToPlainObject(products)
}

export async function getProductBySlug(slug: string) {
	return await prisma.product.findFirst({
		where: { slug: slug }
	})
}
