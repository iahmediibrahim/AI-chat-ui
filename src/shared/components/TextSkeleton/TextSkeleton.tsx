export const TextSkeleton = () => {
	return (
		<div className="animate-pulse">
			{[1, 2, 3].map((i) => (
				<div key={i} className="mt-3 py-3 bg-gray-200 rounded-md"></div>
			))}
		</div>
	)
}
