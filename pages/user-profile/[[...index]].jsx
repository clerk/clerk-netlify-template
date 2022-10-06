import { UserProfile } from '@clerk/nextjs'

const UserProfilePage = () => (
  <div className="relative h-full p-1 mb-2 sm:flex sm:items-center sm:justify-center md:pb-4 lg:p-0">
    <UserProfile />
  </div>
)

export default UserProfilePage
