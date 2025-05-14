import { TextSkeleton } from '../TextSkeleton'

export const ParagraphContent = ({
	content,
	loading,
}: {
	content: string[]
	loading: boolean
}) => (
	<div className="grid gap-2">
		{loading ? (
			<TextSkeleton />
		) : (
			content.map((text, index) => (
				<p
					key={`${index}-${text.substring(0, 10)}`}
					className="text-gray-700 leading-relaxed text-lg animate-fade-in"
				>
					{text}
				</p>
			))
		)}
	</div>
)
