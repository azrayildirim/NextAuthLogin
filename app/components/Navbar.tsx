import Link from "next/link";

export default function Navbar()
{
return(
    <nav className="bg-blue-800 p-4">
        <ul className="flex justify-evenly text-m text-zinc-100">
            <li className=""><Link href='./'>Anasayfa</Link></li>
            <li className=""><Link href='api/auth/signin'>Giriş Yap</Link></li>
            <li className=""><Link href='api/auth/signout'>Çıkış Yap</Link></li>
        </ul>
    </nav>
)

}