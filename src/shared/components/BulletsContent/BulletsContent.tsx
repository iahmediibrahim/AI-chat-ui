import { TextSkeleton } from '../TextSkeleton'

export const BulletsContent = ({
	content,
	loading,
}: {
	content: string[]
	loading: boolean
}) => (
	<ul className="list-disc pl-6 space-y-3">
		{loading ? (
			<TextSkeleton />
		) : (
			content.map((item, index) => (
				<li
					key={`${index}-${item.substring(0, 10)}`}
					className="text-gray-700 text-lg animate-fade-in"
				>
					{item}
				</li>
			))
		)}
	</ul>
)
