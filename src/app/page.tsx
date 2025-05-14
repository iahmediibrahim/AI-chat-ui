'use client'
import { ContentBlock } from '@/shared'

export default function Home() {
	return (
		<div className="p-4 sm:p-8 max-w-4xl mx-auto space-y-6 min-h-screen">
			<ContentBlock
				heading="Auto Generated Block Heading"
				summary="Summary about this block and content generated below."
				content={[
					'This is the first paragraph of the auto-generated content. It can be a bit longer to demonstrate text wrapping and spacing.',
					'Here is another paragraph. AI models can generate diverse content structures, including multiple text segments like this one.',
					'And a third one for good measure, showcasing how paragraphs are stacked.',
				]}
				type="paragraph"
				dropdownActions={[
					{
						label: 'Edit',
						icon: 'edit',
						onClick: () => console.log('Edit'),
					},
					{
						label: 'Duplicate',
						icon: 'dynamic_feed',
						onClick: () => console.log('Duplicate'),
					},
					{
						label: 'Delete',
						icon: 'delete',
						onClick: () => console.log('Delete'),
					},
				]}
				actions={[
					{
						label: 'Create additional content',
						icon: 'auto_awesome',
						onClick: () => console.log('Create additional content'),
					},
				]}
			/>

			<ContentBlock
				heading="Key Recommendations (Bullets)"
				summary="Strategic priorities presented as a bulleted list."
				content={[
					'Expand mobile payment options to cater to a wider audience.',
					'Optimize the checkout flow to reduce cart abandonment rates.',
					'Enhance personalization algorithms for better user engagement.',
					'Invest in content marketing to improve organic reach.',
				]}
				type="bullets"
				dropdownActions={[
					{
						label: 'Edit',
						icon: 'edit',
						onClick: () => console.log('Edit'),
					},
					{
						label: 'Duplicate',
						icon: 'dynamic_feed',
						onClick: () => console.log('Duplicate'),
					},
					{
						label: 'Delete',
						icon: 'delete',
						onClick: () => console.log('Delete'),
					},
				]}
				actions={[
					{
						label: 'Create additional content',
						icon: 'auto_awesome',
						onClick: () => console.log('Create additional content'),
					},
					{
						label: 'Download PDF',
						icon: 'download',
						onClick: () => console.log('Download PDF'),
					},
					{
						label: 'Share Report',
						icon: 'share',
						onClick: () => console.log('Share Report'),
					},
				]}
			/>
			<ContentBlock
				heading="Key Metrics (Table)"
				summary="Key performance indicators displayed in a table format."
				content={[
					{
						label: 'Total Revenue',
						value: '$12,345',
						change: '+25%',
					},
					{
						label: 'Conversion Rate',
						value: '30%',
						change: '-10%',
					},
					{
						label: 'Average Order Value',
						value: '$50',
						change: '+15%',
					},
				]}
				type="table"
				dropdownActions={[
					{
						label: 'Edit',
						icon: 'edit',
						onClick: () => console.log('Edit'),
					},
					{
						label: 'Duplicate',
						icon: 'dynamic_feed',
						onClick: () => console.log('Duplicate'),
					},
					{
						label: 'Delete',
						icon: 'delete',
						onClick: () => console.log('Delete'),
					},
				]}
				actions={[
					{
						label: 'Create additional content',
						icon: 'auto_awesome',
						onClick: () => console.log('Create additional content'),
					},
					{
						label: 'Download PDF',
						icon: 'download',
						onClick: () => console.log('Download PDF'),
					},
				]}
			/>
		</div>
	)
}
