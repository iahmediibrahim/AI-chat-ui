import Link from 'next/link'
interface NavItem {
	icon: string
	label: string
	link?: string
	to?: string
}
interface NavLinkProps {
	item: NavItem
	isOpen: boolean
}

export const NavLink = ({ item, isOpen }: NavLinkProps) => {
	const href = item.link || item.to || '/'

	return (
		<li className={item.link ? 'mb-2' : ''}>
			<Link
				href={href}
				className={`flex items-center p-2 rounded-md hover:bg-purple-100 hover:text-purple-700 text-gray-600 transition-colors ${
					isOpen ? '' : 'justify-center'
				}`}
				title={item.label}
			>
				<span className="material-symbols-outlined">{item.icon}</span>
				{isOpen && (
					<span className="ml-3 text-sm font-medium">{item.label}</span>
				)}
			</Link>
		</li>
	)
}
