"use client";

import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect } from "react";

type TypewriterProps = {
	snippets: string[];
};

export function Typewriter({ snippets }: TypewriterProps) {
	const textIndex = useMotionValue(0);
	const baseText = useTransform(textIndex, (latest) => snippets[latest] || "");
	const count = useMotionValue(0);
	const rounded = useTransform(count, (latest) => Math.round(latest));
	const displayText = useTransform(rounded, (latest) => baseText.get().slice(0, latest));
	const updatedThisRound = useMotionValue(true);

	useEffect(() => {
		// Set to 60 to keep the same speed for all texts
		const control = animate(count, 60, {
			type: "tween",
			duration: 2,
			ease: "easeIn",
			repeat: Number.POSITIVE_INFINITY,
			repeatType: "reverse",
			repeatDelay: 1.5,
			onUpdate(latest) {
				// Change to the next text when the reverse animation ends
				if (updatedThisRound.get() === true && latest > 0) {
					updatedThisRound.set(false);
				} else if (updatedThisRound.get() === false && latest === 0) {
					textIndex.set((textIndex.get() + 1) % snippets.length);
					updatedThisRound.set(true);
				}
			},
		});

		return control.stop;
	}, [count, textIndex, updatedThisRound, snippets.length]);

	return (
		<>
			<motion.span className="text-sm  md:text-xl">{displayText}</motion.span>
			<motion.span
				className="text-sm font-bold text-fuchsia-500 md:text-xl"
				animate={{
					opacity: [0, 1, 0],
					transition: {
						duration: 1,
						repeat: Number.POSITIVE_INFINITY,
					},
				}}
			>
				|
			</motion.span>
		</>
	);
}
