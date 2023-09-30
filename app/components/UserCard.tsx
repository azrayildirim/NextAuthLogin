
type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
} | undefined 
type Props={
    user:User,
    pagetype:string,
}
export default function UserCard({user,pagetype}:Props)
{
    const girisYap=user?.name?(
        <div>Merhaba {user?.name}</div> 
    ):null
    return(
        <section className="">
            {girisYap}
            <p>{pagetype} !</p>
        </section>
    )
}