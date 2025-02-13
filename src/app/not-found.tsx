'use client'

import Image from 'next/image'

import { ArrowLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { DotPattern } from '@/components/ui/dot-pattern'

import { APP_NAME } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function NotFound() {
	function handleNavigateToHome() {
		window.location.href = '/'
	}

	return (
		<div className="w-full min-h-screen relative grid place-items-center p-4">
			<div className="z-10 flex flex-col justify-center items-center w-full space-y-4">
				<Image priority src="/images/logo.svg" alt={`${APP_NAME} logo`} width={48} height={48} />
				<div className="w-full sm:w-2/3 md:w-1/4 p-6 rounded-lg shadow-md text-center bg-white/[1%] backdrop-filter backdrop-blur-sm border border-muted">
					<h1 className="text-3xl font-bold mb-4 drop-shadow-[3px_3px_0px_#ffaa40]">
						404 Not found
					</h1>
					<p className="text-destructive">Couldn't find requested page</p>
					<Button variant="outline" className="mt-4 ml-2" onClick={handleNavigateToHome}>
						<ArrowLeft className="size-5" />
						Back to home
					</Button>
				</div>
			</div>
			<DotPattern
				width={32}
				height={32}
				className={cn('[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]')}
			/>
		</div>
	)
}
