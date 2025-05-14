'use client'

import { AIChat, Header, Sidebar } from '@/shared'
import { useState } from 'react'

export const Renderer = ({ children }: { children: React.ReactNode }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	return (
		<div className="flex h-screen">
			<Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
			<div
				className={`flex-1 flex flex-col transition-all duration-300 ease-in-out `}
			>
				<Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
				<main className="flex-1 overflow-auto px-4  sm:px-6  py-20 bg-white">
					{children}
					<AIChat />
				</main>
			</div>
		</div>
	)
}
