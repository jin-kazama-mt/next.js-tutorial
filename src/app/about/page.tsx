export const metadata = {
	title: "説明ページ",
	description: "このページは記事の内容を紹介しています。",
	openGraph: {
		title: "OGPタイトル",
		description: "SNS用の説明文",
		url: "https://example.com/about",
		siteName: "サンプルサイト",
		images: [
			{
				url: "https://example.com/og-image.jpg",
				width: 1200,
				height: 630,
			},
		],
		type: "website",
	},
};

export default function AboutPage() {
	return (
		<main>
			<h1>このサイトについて</h1>
			<p>これは Next.js の学習用ページです。</p>
		</main>
	);
}
