export const TableSkeleton = () => {
	return (
		<div className="animate-pulse">
			{[1, 2, 3].map((i) => (
				<div key={i} className="flex gap-4 mt-2">
					<div className="w-1/3 py-3 bg-gray-200 rounded-md"></div>
					<div className="w-1/3 py-3 bg-gray-200 rounded-md"></div>
					<div className="w-1/3 py-3 bg-gray-200 rounded-md"></div>
				</div>
			))}
		</div>
	)
}
