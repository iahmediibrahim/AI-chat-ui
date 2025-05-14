import { TableSkeleton } from '../TableSkeleton'
export interface TableRow {
	label: string
	value: string
	change?: string
}

export const TableContent = ({
	content,
	loading,
}: {
	content: TableRow[]
	loading: boolean
}) => (
	<div className="overflow-x-auto">
		{loading ? (
			<TableSkeleton />
		) : (
			<table className="min-w-full">
				<thead>
					<tr className="border-b border-gray-200">
						<th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">
							Metric
						</th>
						<th className="py-3 px-4 text-right text-sm font-semibold text-gray-900">
							Value
						</th>
						<th className="py-3 px-4 text-right text-sm font-semibold text-gray-900">
							Change
						</th>
					</tr>
				</thead>
				<tbody>
					{content.map((row, index) => (
						<tr key={index} className="border-b border-gray-200">
							<td className="py-4 px-4 text-sm text-gray-500">{row.label}</td>
							<td className="py-4 px-4 text-right text-sm text-gray-900">
								{row.value}
							</td>
							<td className="py-4 px-4 text-right text-sm text-gray-500">
								{row.change}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		)}
	</div>
)
