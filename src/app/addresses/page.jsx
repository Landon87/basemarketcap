import getTokens from "../libs/getTokens"
import Link from "next/link"

export default async function TokensPage() {
    const tokens = await getTokens()
  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold">Token Adresses</h1>
      {tokens.map(user => {
        return (
            <>
            <p key={tokens.id}>
                <Link href={`./tokens/${tokens.id}`}>

                </Link>
                {tokens.address}
            </p>
            </>
        )
})
        }
    </div>
  )
}
