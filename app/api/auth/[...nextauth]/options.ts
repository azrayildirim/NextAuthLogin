import type { NextAuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
export const options:NextAuthOptions={
    providers:[
        CredentialsProvider({

            name:"Credentials",
            credentials:{
                username:{
                    label:"Kullanıcı Adı :",
                    type:"text",
                    placeholder:"Kullanıcı adı giriniz"
                },
                password:{
                    label:"Şifre :",
                    type:"password",
                    placeholder:"Şifrenizi giriniz"
                }
            },
            async authorize(credentials, req) {
               const user={id:"1",name:"azra",password:"123"}
               if(credentials?.username===user.name&& credentials?.password===user.password)
               {
                return user
               } 
               else
               {
                return null
               }
            },
        }),
    
    ]
}