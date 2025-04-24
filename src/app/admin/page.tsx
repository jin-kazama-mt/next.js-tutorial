import Link from "next/link";

export const metadata = {
	title: "管理者用",
};
/**
 * ページに表示させる文言を<h1>タグで囲んで返す関数
 * @returns ページに表示させる文言を<h1>タグで囲んで返す
 */
export default function manager() {
	return (
		<div>
			<h1>管理者用のページ</h1>
			<Link href="/admin/setting">管理者の設定</Link>
		</div>
	);
}
