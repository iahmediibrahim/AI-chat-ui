interface AppButtonProps {
	icon?: string
	label?: string
	onClick: () => void
	primary?: boolean
	disabled?: boolean
	isLarge?: boolean
	rounded?: string
}
export const AppButton = ({
	icon,
	label,
	onClick,
	primary = false,
	disabled = false,
	isLarge = true,
	rounded = 'rounded-lg',
	...props
}: AppButtonProps) => {
	return (
		<button
			{...props}
			onClick={onClick}
			disabled={disabled}
			className={`flex items-center gap-2 ${rounded} text-sm font-medium transition-colors animate-fade-in ${
				primary
					? 'bg-purple-600 text-white hover:bg-purple-700'
					: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
			} ${
				disabled ? 'opacity-50 cursor-not-allowed hover:bg-purple-600' : ''
			} ${
				rounded === 'rounded-full' ? 'p-3' : isLarge ? 'px-4 py-2' : 'px-2 py-1'
			}`}
		>
			{icon && (
				<span className="material-symbols-outlined text-base">{icon}</span>
			)}
			{label && <span>{label}</span>}
		</button>
	)
}
