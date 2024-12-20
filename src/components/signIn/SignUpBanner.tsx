const SignUpBanner = () => {
	return (
		<div className='flex-1 bg-gradient-to-b from-[#47A99290] to-[#219C90] py-24 px-8 flex flex-col items-center justify-center gap-3 text-white text-center'>
			<h2 className='text-2xl font-semibold'>Welcome back!</h2>
			<p>
				Welcome back! We are so happy to have you here. It's great to see you
				again. We hope you had a safe and enjoyable time away.
			</p>
			<button className='bg-[rgba(255,255,255,0.1)] py-3 px-8 rounded-full shadow-sm transition-all hover:shadow-md'>
				No account yet? Signup.
			</button>
		</div>
	)
}

export default SignUpBanner
