import { Copyright } from 'lucide-react'

import { APP_NAME } from '@/lib/constants'

export function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="border-t border-muted">
			<div className="p-5 flex-center">
				<Copyright size={16} className="mr-2 text-muted-foreground" /> {currentYear} {APP_NAME}. All
				Rights Reserved
			</div>
		</footer>
	)
}
