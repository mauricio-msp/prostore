import Image from 'next/image'
import Link from 'next/link'

import { Menu } from '@/components/shared/menu'
import { APP_NAME } from '@/lib/constants'

export function Header() {
	return (
		<header className="w-full border-b border-muted">
			<div className="wrapper flex-between">
				<div className="flex-start">
					<Link href="/" className="flex-start">
						<Image
							src="/images/logo.svg"
							alt={`${APP_NAME} logo`}
							width={48}
							height={48}
							priority
						/>
						<span className="hidden font-bold text-2xl ml-3 lg:block">{APP_NAME}</span>
					</Link>
				</div>
				<Menu />
			</div>
		</header>
	)
}
