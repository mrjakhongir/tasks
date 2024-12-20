import Container from '../components/container/Container'
import SignIn from '../components/signIn'

const Login = () => {
	return (
		<div className='bg-slate-200 h-screen grid place-items-center'>
			<Container>
				<SignIn />
			</Container>
		</div>
	)
}

export default Login
