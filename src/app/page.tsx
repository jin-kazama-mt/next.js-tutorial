import Link from "next/link";

export const metadata = {
	title: "ホーム",
};

export default function HomePage() {
	return (
		<div>
			<h1>ようこそ</h1>
			<h1>ホームページ</h1>
			<Link href="/memos">go to memos page</Link>
		</div>
	);
}
