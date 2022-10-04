import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => (
  <div className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center"><SignUp path="/sign-up" routing="path" signInUrl="/sign-in" /></div>
)

export default SignUpPage
