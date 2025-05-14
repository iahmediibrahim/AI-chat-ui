'use client'

import { useState } from 'react'
import { AppButton } from '../AppButton'

export const AIChat = () => {
	const [isInputOpen, setIsInputOpen] = useState(true)
	const [inputValue, setInputValue] = useState('')

	const handleToggleInput = () => {
		setIsInputOpen(!isInputOpen)
		setInputValue('')
	}

	return (
		<div
			className={`fixed bottom-4 left-4 right-4 md:bottom-6 md:right-6 md:left-auto px-2 md:px-4 py-2 animate-fade-in flex items-center gap-2 md:gap-3 ${
				isInputOpen
					? 'bg-white/95 backdrop-blur-sm shadow-xl border border-gray-100 rounded-2xl md:rounded-3xl'
					: ''
			}`}
		>
			<div
				className={`w-full md:w-auto transition-all duration-300 ease-in-out transform ${
					isInputOpen
						? 'scale-100 opacity-100'
						: 'scale-95 opacity-0 pointer-events-none'
				}`}
			>
				<div className="flex gap-2 w-full">
					<AppButton
						primary
						icon="magic_button"
						onClick={() => setInputValue('')}
						rounded="rounded-xl"
					/>
					<input
						type="text"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						placeholder="Ask me anything..."
						className="flex-1 bg-gray-50 border border-gray-200 rounded-lg md:rounded-xl px-4 md:px-6 py-2 md:py-3 shadow-inner 
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                        md:w-96 text-sm md:text-base text-gray-700 placeholder-gray-400"
					/>
				</div>
			</div>
			<AppButton
				primary
				icon={isInputOpen ? 'close' : 'chat'}
				aria-label="Open AI Chat"
				onClick={handleToggleInput}
				rounded="rounded-full"
			/>
		</div>
	)
}
