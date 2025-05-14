import { bottomNavItems, navItems, SidebarHeader } from '@/shared'
import { NavLink } from '../NavLink'

interface SidebarProps {
	isOpen: boolean
	toggleSidebar: () => void
}

export const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
	return (
		<aside
			className={`fixed top-0 left-0 h-full bg-white shadow-lg z-30 
			flex flex-col justify-between pt-4 pb-4 border-r border-gray-200
			transition-[transform,width] duration-200 ease-linear
			${isOpen ? 'w-60' : 'w-20'}
			${isOpen ? 'translate-x-0' : '-translate-x-full'}
			md:w-${isOpen ? '60' : '20'}
			md:translate-x-0
			`}
			style={{
				willChange: 'transform, width',
			}}
		>
			<div className="h-full w-full px-4">
				<SidebarHeader isOpen={isOpen} toggleSidebar={toggleSidebar} />
				<nav>
					<ul>
						{navItems.map((item) => (
							<NavLink key={item.label} item={item} isOpen={isOpen} />
						))}
					</ul>
				</nav>
			</div>
			<nav className="px-4">
				<ul>
					{bottomNavItems.map((item) => (
						<NavLink key={item.label} item={item} isOpen={isOpen} />
					))}
				</ul>
			</nav>
		</aside>
	)
}
