import { SignedIn, UserButton } from '@clerk/nextjs'

const Header = () => (
  <header className="flex justify-between p-1 bg-transparent">
    <div className="flex self-center"></div>
    <div className="flex self-center">
      <SignedIn>
        <UserButton
          userProfileMode="navigation"
          userProfileUrl="/user-profile"
          afterSignOutUrl="/"
        />
      </SignedIn>
    </div>
  </header>
)

export default Header
