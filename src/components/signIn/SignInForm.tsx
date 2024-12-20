import SignInSocials from './socialAuth/SocialAuth'

const SignInForm = () => {
	return (
		<div className='flex-1 flex flex-col gap-3 bg-white py-24 px-8'>
			<h1 className='text-4xl font-semibold text-center mb-5'>Signin</h1>
			<form className='flex flex-col gap-4'>
				<input
					type='text'
					placeholder='ByteWebster'
					aria-label='username'
					className='w-full bg-slate-100 py-3 px-4 rounded-md'
				/>
				<input
					type='password'
					aria-label='password'
					placeholder='qwerty1234'
					className='w-full bg-slate-100 py-3 px-4 rounded-md'
				/>
				<button className='bg-[#47A992] text-white text-sm p-5 rounded-md transition-all hover:bg-opacity-90'>
					Signin
				</button>
			</form>
			<p className='text-center text-slate-700'>or signin with</p>
			<SignInSocials />
		</div>
	)
}

export default SignInForm
