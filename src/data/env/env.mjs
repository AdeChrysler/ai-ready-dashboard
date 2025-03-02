import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

/**
 * Transform an empty string to undefined
 */
const emptyStringToUndefined = z.literal('').transform(() => undefined)

/**
 * An optional string type that is at least one character long, or transformed
 * to undefined
 */
const optionalString = z
  .string()
  .trim()
  .min(1)
  .optional()
  .or(emptyStringToUndefined)

export const env = createEnv({
  /**
   * Environment variables available on the client (and server).

   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   *
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url().optional(),
    NEXT_PUBLIC_AUTH0_DOMAIN: z.string().min(1),
    NEXT_PUBLIC_GOOGLE_ANALYTICS: optionalString,
  },

  /**
   * Server-side Environment variables, not available on the client. Will throw
   * if you access these variables on the client.
   *
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    AUTH0_SECRET: z.string().min(32),
    AUTH0_BASE_URL: z.string().url(),
    AUTH0_CLIENT_ID: z.string().min(1),
    AUTH0_CLIENT_SECRET: z.string().min(1),
    /**
     * Add your server env here.
     * For example:
     *
     * JWT_SECRET=V3RYS3CR3T
     * DATABASE_URL=mysql://root:root@localhost:3306/example_db
     */
  },

  /**
   * Shared between server and client
   */
  shared: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),
  },

  /**
   * Due to how Next.js (>= 13.4.4) bundles environment variables on the Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * Means you can't destruct `process.env` as a regular object during the Next.js edge
   * runtime (e.g. with middleware) or client-side, so we need to destruct it manually.
   *
   * 💡 You'll get type errors if not all variables from `client` are included here.
   */
  runtimeEnv: {
    /** Client */
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_AUTH0_DOMAIN: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,

    /** Server */
    AUTH0_SECRET: process.env.AUTH0_SECRET,
    AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    /**
     * Add your server env here.
     * For example:
     *
     * JWT_SECRET=V3RYS3CR3T
     * DATABASE_URL=mysql://root:root@localhost:3306/example_db
     */
  },

  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
})
