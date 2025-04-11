'use client'

import { LazyMotion } from 'motion/react'
import type { ReactNode } from 'react'

export function MotionProvider({
	children,
}: {
	children: ReactNode
}) {
	const loadMotionFeatures = () => import('@/lib/motionFeatures').then((res) => res.default)

	return (
		<LazyMotion strict features={loadMotionFeatures}>
			{children}
		</LazyMotion>
	)
}
