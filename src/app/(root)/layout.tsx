import type { Metadata } from 'next'

import { Header } from '@/components/shared/header'
import { Footer } from '@/components/shared/footer'

export const metadata: Metadata = {
	title: 'Home',
	description: 'A modern ecommerce platform built with Next.JS'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex h-screen flex-col">
			<Header />
			<main className="flex-1 wrapper">{children}</main>
			<Footer />
		</div>
	)
}
