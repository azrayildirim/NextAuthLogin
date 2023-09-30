
import { get } from "http"
import UserCard from "./components/UserCard"
import {getServerSession} from 'next-auth/next'
import { options } from "./api/auth/[...nextauth]/options"

export default async function Home() {
  const session=await getServerSession(options)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   {
    session?
    (<UserCard user={session?.user} pagetype="Anasayfa"></UserCard>):
    (<div>Şifreli giriş yapılamadı</div>)
   }
    </main>
  )
}
