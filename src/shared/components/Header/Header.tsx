import Link from 'next/link'
import { AppButton } from '../AppButton'

export const Header = ({
	isSidebarOpen,
	toggleSidebar,
}: {
	isSidebarOpen: boolean
	toggleSidebar: () => void
}) => {
	return (
		<header className="bg-white shadow-sm p-4 fixed top-0 left-0 md:left-20 right-0 z-20 h-16">
			<div className="flex items-center justify-between w-full">
				<div className="flex items-center">
					<div className="md:block hidden">
						<AppButton
							icon="menu"
							onClick={toggleSidebar}
							aria-label={isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
							isLarge={false}
							rounded="rounded-sm"
						/>
					</div>
					<Link href="/" className="md:hidden text-purple-700">
						<span className="material-symbols-outlined !text-4xl">
							magic_button
						</span>
					</Link>
					<h1 className="text-xl font-semibold ml-2 text-gray-800">
						Client Copywriter
					</h1>
				</div>
				<div className="md:hidden">
					<AppButton
						icon="menu"
						onClick={toggleSidebar}
						aria-label={isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
						isLarge={false}
						rounded="rounded-sm"
					/>
				</div>
			</div>
		</header>
	)
}
