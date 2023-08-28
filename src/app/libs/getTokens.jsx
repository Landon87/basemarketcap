
export default async function getTokens() {
  const response =await fetch('https://api.basescan.org/api?module=stats&action=tokensupply&contractaddress=0xddcb3ffd12750b45d32e084887fdf1aabab34239&apikey="UTX63PDD9BIRPBIQN9TF53FUFQ79GNW9QH"',
  {
    cache: 'no-cache',
  })
if(!response.ok) {
  throw new Error("Failed to fetch Tokens")
}

  const data = await response.json()
  return data
}

