import cn from 'classnames'
type ContainerProps = {
	className?: string
	children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
	return (
		<div
			className={cn(
				'max-w-[1440px] mx-auto px-3 md:px-5 lg:px-10 xl:px-20',
				className
			)}
		>
			{children}
		</div>
	)
}

export default Container
