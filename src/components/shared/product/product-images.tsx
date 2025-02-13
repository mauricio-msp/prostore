'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function ProductImages({ images }: { images: string[] }) {
	const [current, setCurrent] = useState(0)

	return (
		<div className="space-y-4">
			<Image
				src={images[current]}
				alt="product image"
				width={1_000}
				height={1_000}
				className="min-h-[300px] object-cover object-center"
			/>
			<div className="flex">
				{images.map((image, index) => (
					<div
						key={image}
						onClick={() => setCurrent(index)}
						className={cn(
							'border mr-2 cursor-pointer hover:border-yellow-600 rounded-sm',
							current === index && 'border-yellow-600'
						)}
					>
						<Image src={image} alt="image" width={100} height={100} />
					</div>
				))}
			</div>
		</div>
	)
}
