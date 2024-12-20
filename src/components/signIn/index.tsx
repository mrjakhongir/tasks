import SignInForm from './SignInForm'
import SignUpBanner from './SignUpBanner'

const SignIn = () => {
	return (
		<div className='flex flex-col md:flex-row justify-center max-w-[800px]'>
			<SignInForm />
			<SignUpBanner />
		</div>
	)
}

export default SignIn
