import Link from "next/link";
import type { ReactNode } from "react";
import { metadata } from "./about/page";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ja">
			<body>
				<header>{metadata.title}</header>
				{children}
				<footer>
					<Link href="/">ホームへ</Link>
				</footer>
			</body>
		</html>
	);
}
