import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'
import { useClerk } from '@clerk/nextjs'
export default function Home() {
  const { isLoaded, isSignedIn } = useUser()
  const clerk = useClerk()
  if (!isLoaded) {
    return null
  }

  return (
    <div>
      <Head>
        <title>Clerk with Next.js Starter</title>
        <meta name="description" content="A basic starter to show off Clerk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
        <div className="relative sm:pb-16 sm:pt-8">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0 ">
                <Image
                  className="h-full w-full object-cover"
                  layout="fill"
                  src="/Clerk.png"
                  alt="Clerk Logo"
                />
              </div>
              <div className="lg:pb-32 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  <br />
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto py-2 px-4 sm:px-6 lg:px-8">
            <p className="mx-auto mt-12 mb-12 text-center text-xl text-black sm:max-w-3xl">
              Check the README.md file for how to deploy your own version and
              see how the code works.
            </p>
            <div>
              {isSignedIn ? (
                <div className="mx-auto flex justify-center">
                  <button
                    onClick={() => clerk.signOut()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-4"
                  >
                    Sign Out
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    <Link href="/user-profile">View your user profile</Link>
                  </button>
                </div>
              ) : (
                <div className="mx-auto flex justify-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-4">
                    <Link
                      href="/sign-up"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm hover:bg-violet-50 sm:px-8"
                    >
                      Sign up
                    </Link>
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    <Link
                      href="/sign-in"
                      className="flex items-center justify-center rounded-md bg-violet-500 px-4 py-3 font-medium text-white hover:bg-violet-600  "
                    >
                      Sign In
                    </Link>
                  </button>
                </div>
              )}
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-8">
              {[
                {
                  src: '/netlify.svg',
                  alt: 'Netlify',
                  href: 'https://netlify.com'
                },
                {
                  src: '/tailwindcss.svg',
                  alt: 'Tailwind',
                  href: 'https://tailwindcss.com'
                }
              ].map(img => (
                <a
                  key={img.href}
                  href={img.href}
                  className="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
                >
                  <Image alt={img.alt} src={img.src} layout="fill" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
