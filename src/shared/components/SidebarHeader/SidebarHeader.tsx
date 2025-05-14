import Link from 'next/link'
import { AppButton } from '../AppButton'

interface SidebarHeaderProps {
	isOpen: boolean
	toggleSidebar: () => void
}

export const SidebarHeader = ({
	isOpen,
	toggleSidebar,
}: SidebarHeaderProps) => {
	return (
		<div
			className={`flex items-center mb-4 ${
				isOpen ? 'justify-between' : 'justify-center'
			}`}
		>
			<Link href="/" className="text-purple-700">
				<span className="material-symbols-outlined !text-4xl">
					magic_button
				</span>
			</Link>
			{isOpen && (
				<AppButton
					icon="menu_open"
					onClick={toggleSidebar}
					aria-label={'Collapse sidebar'}
					isLarge={false}
				/>
			)}
		</div>
	)
}
