import Link from "next/link";

export default function Home() {
	return (
		<div>
			<h1>ようこそ</h1>
			<Link href="memos">go to memos page</Link>
		</div>
	);
}
