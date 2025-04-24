/**
 *
 * @param children - 子要素
 * @returns 管理者ページに共通するレイアウト
 */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<div style={{ backgroundColor: "#fdf6e3", padding: "2rem" }}>
			<h2>🔐 管理画面</h2>
			{children}
		</div>
	);
}
