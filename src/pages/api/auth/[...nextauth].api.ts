import { PrismaAdapter } from "@/lib/auth/prisma-adapter"
import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider, { GithubProfile } from "next-auth/providers/github"
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      profile(profile: GithubProfile) {
         
        return {
          id: profile.id.toString(),
          name: profile.name!,
          avatar_url: profile.avatar_url
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      profile(profile: GoogleProfile) {
        return {
          id: profile.sub,
          name: profile.name,
          avatar_url: profile.picture
        }
      }
    })

  ],

  callbacks: {
    async signIn() {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return '/'
      } else {
        return '/login?error=permissions'
      }
    }
  }
}

export default NextAuth(authOptions)