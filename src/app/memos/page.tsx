import Link from "next/link";
export default function Home() {
	return (
		<div>
			<h1>ようこそ</h1>
			<Link href="/memos/id1">go to id1 page</Link>
		</div>
	);
}
