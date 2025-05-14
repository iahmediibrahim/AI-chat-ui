export interface DropdownItem {
	label: string
	onClick: () => void
	disabled?: boolean
	icon?: string
}

interface DropdownProps {
	items: DropdownItem[]
	className?: string
	position?: 'right' | 'left'
	width?: string
}

export const Dropdown = ({
	items,
	className = '',
	position = 'right',
	width = 'w-40',
}: DropdownProps) => {
	return (
		<div
			className={`
        absolute ${position}-0 mt-2 ${width} bg-white rounded-lg shadow-lg py-1 z-10 animate-fade-in
        ${className}
      `}
		>
			{items.map((item) => (
				<button
					key={item.label}
					onClick={item.onClick}
					disabled={item.disabled}
					className={`
            flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left transition-colors
            ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
				>
					{item.icon && (
						<span className="material-symbols-outlined text-base mr-2">
							{item.icon}
						</span>
					)}
					{item.label}
				</button>
			))}
		</div>
	)
}
