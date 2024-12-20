import cn from 'classnames'

type SocialItemProps = {
	children: React.ReactNode
	className?: string
}

const SocialItem: React.FC<SocialItemProps> = ({ className, children }) => {
	return (
		<button
			className={cn(
				'w-7 h-7 rounded-full flex items-center justify-center',
				className
			)}
		>
			{children}
		</button>
	)
}

export default SocialItem
