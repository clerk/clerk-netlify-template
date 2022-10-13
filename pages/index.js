import { SignIn } from '@clerk/nextjs'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Clerk with Next.js Starter</title>
        <meta name="description" content="A basic starter to show off Clerk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative min-h-screen sm:flex sm:items-center sm:justify-center">
        <div className="relative sm:pb-16 sm:pt-8">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-wrap lg:-mx-px xl:-mx-3">
              <div className="w-full lg:my-px lg:px-px lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2">
                <Image
                  alt="Clerk Logo"
                  width="200px"
                  height="100px"
                  src="/clerk-logo-dark.svg"
                />
                <div>
                  <h2 className="my-4 mt-4 mb-2 text-3xl font-bold leading-tight text-white md:text-5xl">
                    Beautiful sign up, sign in and user profiles.
                    <br />
                  </h2>
                  <h2 className="mt-4 mb-2 text-lg font-medium leading-tight text-white md:text-3xl">
                    Sign in to see your user profile
                  </h2>
                </div>
              </div>

              <div className="w-full lg:my-px lg:px-px lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2">
                <SignIn signUpUrl="/sign-up" redirectUrl="/user-profile" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
