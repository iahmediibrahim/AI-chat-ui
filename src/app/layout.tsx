import { Metadata } from 'next'
import './globals.css'
import { Renderer } from './Renderer'

export const metadata: Metadata = {
	title: 'Client Copywriter App',
	description: 'AI-powered content generation',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`antialiased font-figtree bg-gray-50`}>
				<Renderer>{children}</Renderer>
			</body>
		</html>
	)
}
