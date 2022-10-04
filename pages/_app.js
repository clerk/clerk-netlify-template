import '/styles/globals.css'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs'
import { useRouter } from 'next/router'
import Head from 'next/head'
import SignUpPage from './sign-up/[[...index]]'
import SignInPage from './sign-in/[[...index]]'

const publicPages = ['/', '/sign-in/[[...index]]', '/sign-up/[[...index]]']

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()

  /**
   * If the current route is listed as public, render it directly.
   * Otherwise, use Clerk to require authentication.
   */
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>Clerk + Netlify Starter</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {publicPages.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            {router.pathname.match('/sign-up') ? (
              <SignUpPage />
            ) : (
              <SignInPage />
            )}
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  )
}

export default MyApp
