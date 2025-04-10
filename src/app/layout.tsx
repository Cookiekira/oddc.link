import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "OddC",
	description: "Welcome to OddC's personal page",
	metadataBase: new URL("https://oddc.link"),
	openGraph: {
		title: "OddC",
		description: "Welcome to OddC's personal page",
		type: "website",
		url: "https://oddc.link",
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
