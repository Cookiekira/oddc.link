"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
	const router = useRouter();
	return (
		<div className="flex min-h-screen flex-col justify-center">
			<main className="flex flex-col items-center">
				<section className="h-54 relative mb-6 mt-6 w-96 font-bold">
					{/* Logo by @SAWARATSUKI */}
					<Image src="/404 NotFound.png" alt="404" />
				</section>

				<section className="flex gap-4">
					<button type="button">
						<span
							className="icon-[mdi--arrow-left] text-3xl
            font-bold opacity-60 hover:opacity-100"
							onClick={router.back}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									router.back();
								}
							}}
						/>
					</button>

					<Link href="/">
						<span
							className="icon-[mdi--home] text-3xl
            font-bold opacity-60 hover:opacity-100"
						/>
					</Link>
				</section>
			</main>
		</div>
	);
}
