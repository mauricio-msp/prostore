import Link from 'next/link'
import { MenuIcon, ShoppingCart, UserIcon } from 'lucide-react'

import { ModeToggle } from '@/components/theme/mode-toggle'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

export function Menu() {
	return (
		<div className="flex justify-end gap-3">
			<nav className="hidden md:flex w-full max-w-xs gap-1">
				<ModeToggle />
				<Button asChild variant="outline">
					<Link href="/cart">
						<ShoppingCart /> Cart
					</Link>
				</Button>
				<Button asChild>
					<Link href="/sign-in">
						<UserIcon /> Sign In
					</Link>
				</Button>
			</nav>
			<nav className="md:hidden">
				<Sheet>
					<SheetTrigger className="align-middle">
						<MenuIcon />
					</SheetTrigger>
					<SheetContent className="flex flex-col items-start">
						<SheetTitle>Menu</SheetTitle>

						<ModeToggle />
						<Button asChild variant="ghost">
							<Link href="/cart">
								<ShoppingCart /> Cart
							</Link>
						</Button>
						<Button asChild>
							<Link href="/sign-in">
								<UserIcon /> Sign In
							</Link>
						</Button>
					</SheetContent>
				</Sheet>
			</nav>
		</div>
	)
}
