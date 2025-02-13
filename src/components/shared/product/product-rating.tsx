import { Star, StarHalf } from 'lucide-react'

export function ProductRating({ rating }: { rating: number }) {
	const fullStars = Math.floor(rating)
	const hasHalfStar = rating % 1 > 0
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

	return (
		<div className="flex items-center gap-0.5">
			{[...Array(fullStars)].map((_, index) => (
				<Star key={`star-full-${index}`} className="size-5 fill-yellow-400 stroke-yellow-600" />
			))}

			{hasHalfStar && (
				<div className="flex relative size-5">
					{hasHalfStar && (
						<StarHalf className="absolute size-5 fill-yellow-400 stroke-yellow-600" />
					)}
					{hasHalfStar && <StarHalf className="absolute size-5 stroke-yellow-600 scale-x-[-1]" />}
				</div>
			)}

			{[...Array(emptyStars)].map((_, index) => (
				<Star key={`star-empty-${index}`} className="size-5 stroke-yellow-600" />
			))}
		</div>
	)
}
