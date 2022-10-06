import { SignIn } from '@clerk/nextjs'

const SignInPage = () => (
  <div className="relative min-h-screen sm:flex sm:items-center sm:justify-center">
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </div>
)

export default SignInPage
