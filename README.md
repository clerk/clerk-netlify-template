# Clerk template

![Clerk site Image](https://res.cloudinary.com/dub20ptvt/image/upload/v1665094543/hcmgdw4wyixrorybwuff.png)

Deployed Site: [kpop-stack.netlify.app](https://kpop-stack.netlify.app)

Learn more about [Clerk](https://clerk.dev).

```
npx create-remix --template netlify-templates/kpop-stack
```

Click this button to create a new Github repo, new Netlify project and deploy this stack to a [CDN](https://jamstack.org/glossary/cdn/).

[![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/kpop-stack)

## What's in the stack

- [Netlify](https://netlify.com/) deployment + deploy previews and CI/CD
- [Tailwind](https://tailwindcss.com/) for styling

---

## Development

- Install all dependencies & the [Netlify CLI](https://docs.netlify.com/cli/get-started/):

  ```sh
  npm install
  npm install netlify-cli -g
  ```

- Create or connect to your Netlify project by running through the Netlify `init` script:

  ```sh
  netlify init
  ```

- Add your [Clerk environment variables](https://dashboard.clerk.dev/) to a `.env` file like [`.env.local.sample`](./.env.local.sample) file or through the Netlify project dashboard at [https://app.netlify.com/](https://app.netlify.com/) Site settings/Build & deploy/Environment:

  ```
  NEXT_PUBLIC_CLERK_FRONTEND_API=""
  CLERK_API_KEY=""
  CLERK_JWT_KEY=""
  ```

- Start dev server:

  ```sh
  npm run dev
  ```

This starts your app in development mode, rebuilding assets on file changes.
