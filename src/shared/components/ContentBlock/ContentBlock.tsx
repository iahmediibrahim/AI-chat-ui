'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AppButton } from '../AppButton'
import { BulletsContent } from '../BulletsContent'
import { Dropdown, DropdownItem } from '../Dropdown'
import { ParagraphContent } from '../ParagraphContent'
import { TableContent, TableRow } from '../TableContent'

interface ContentBlockProps {
	heading: string
	summary: string
	content: string[] | TableRow[]
	type: 'paragraph' | 'bullets' | 'table'
	actions?: DropdownItem[]
	dropdownActions?: DropdownItem[]
	loading?: boolean
}

export const ContentBlock = ({
	heading,
	summary,
	content,
	type,
	actions = [],
	dropdownActions,
}: ContentBlockProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [localContent, setLocalContent] = useState(content)
	const [loading, setLoading] = useState(false)

	const regenerateContent = () => {
		setLoading(true)
		setTimeout(() => {
			setLocalContent((prevContent) => {
				if (Array.isArray(prevContent)) {
					return [...prevContent].sort(
						() => Math.random() - 0.5,
					) as typeof content
				}
				return prevContent
			})
			setLoading(false)
		}, 500)
	}

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (!(e.target as Element).closest('.menu-container')) {
				setIsMenuOpen(false)
			}
		}
		document.addEventListener('click', handleClickOutside)
		return () => document.removeEventListener('click', handleClickOutside)
	}, [])

	const renderContent = () => {
		switch (type) {
			case 'paragraph':
				return (
					<ParagraphContent
						content={localContent as string[]}
						loading={loading}
					/>
				)
			case 'bullets':
				return (
					<BulletsContent
						content={localContent as string[]}
						loading={loading}
					/>
				)
			case 'table':
				return (
					<TableContent
						content={localContent as TableRow[]}
						loading={loading}
					/>
				)
			default:
				return null
		}
	}

	return (
		<div className="rounded-2xl bg-white shadow-sm hover:shadow-md transition-all border border-gray-200 relative font-figtree overflow-hidden">
			<div className="p-8">
				{/* Header */}
				<div className="flex justify-between items-start mb-6">
					<div>
						<h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
						<p className="text-base text-gray-600 mt-2">{summary}</p>
					</div>
					<div className="menu-container relative">
						<AppButton
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							icon="more_vert"
							aria-label="Menu"
							isLarge={false}
						/>
						{isMenuOpen && dropdownActions && (
							<Dropdown width="w-72" items={dropdownActions} />
						)}
					</div>
				</div>

				{/* Content Area */}
				<div className="space-y-4 mb-8">{renderContent()}</div>

				{/* Actions */}
				{actions.length > 0 && (
					<div className="flex flex-wrap gap-4 items-center border-t border-gray-200 pt-6">
						{actions.map((action, index) => (
							<AppButton
								key={index}
								onClick={action?.onClick}
								label={action?.label}
								icon={action?.icon}
							/>
						))}
					</div>
				)}
			</div>

			{/* Footer */}
			<div className="bg-gray-100 p-6 flex justify-between items-center">
				<AppButton
					onClick={regenerateContent}
					icon="magic_button"
					label="Regenerate"
					primary
				/>
				<div className="flex items-center gap-3">
					<AppButton
						onClick={() => {
							console.log('Ask Maistro clicked')
						}}
						icon="forum"
						label="Ask Maistro"
					/>
				</div>
			</div>
			<div>
				<div className="flex items-center justify-between px-6 py-3 bg-gray-50">
					<p className="text-xs text-gray-500">Logic and reasoning</p>
					<Link
						href="#"
						className="text-xs text-gray-600 hover:text-gray-800 underline"
					>
						View details
					</Link>
				</div>
			</div>
		</div>
	)
}
