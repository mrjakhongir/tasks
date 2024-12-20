import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa'
import SocialItem from './SocialItem'

const socialItems = [
	{ icon: <FaFacebookF color='white' size={16} />, bgColor: '#3b5998' },
	{ icon: <FaGooglePlusG color='white' size={16} />, bgColor: '#dd4b39' },
	{ icon: <FaLinkedinIn color='white' size={16} />, bgColor: '#0077b5' },
]

const SocialAuth = () => {
	return (
		<div className='flex items-center justify-center gap-4'>
			{socialItems.map(item => (
				<SocialItem
					key={item.bgColor}
					className={`bg-[${item.bgColor}] cursor-pointer transition-all hover:opacity-90 hover:shadow-md`}
				>
					{item.icon}
				</SocialItem>
			))}
		</div>
	)
}

export default SocialAuth
