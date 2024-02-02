import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User"
import connect from "@/utils/db"
import bcrypt from 'bcryptjs';


const handler =  NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials){

        await connect()

        try {

          const user = await User.findOne({ email: credentials.email })

          if(user){
            //check password
            const isValid = await bcrypt.compare(credentials.password, user.password)

            if(isValid){
              return user
            } else {
              throw new Error("Password is incorrect")
            
            }

          } else {
            throw new Error("No user found")
          }
          
        } catch (err) {
          throw new Error(err)
        }
      }
    })
  ],
  pages: {
    error: "/dashboard/login"
  }
})

export { handler as GET, handler as POST}