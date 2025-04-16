import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
	title: "サンプルサイト",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ja">
			<body>
				<header style={{ padding: "1rem", background: "#eee" }}>
					<h1>サンプルサイト</h1>
					<Link href="/">ホーム</Link>
					<span> </span>
					<Link href="/memos">メモ一覧</Link>
					<span> </span>
					<Link href="/admin">管理者</Link>
					<span> </span>
					<Link href="/about">説明ページ</Link>
				</header>
				<main>{children}</main>
				<footer style={{ padding: "1rem", background: "#eee" }}>
					<p>© 2025 My Memo App</p>
				</footer>
			</body>
		</html>
	);
}
