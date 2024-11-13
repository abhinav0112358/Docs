import { SignIn, SignUp } from '@clerk/nextjs'

const page = () => {
  return (
    <main className='auth-page'>
        <SignUp />
    </main>
  )
}

export default page