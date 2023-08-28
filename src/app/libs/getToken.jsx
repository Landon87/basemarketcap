export default async function getToken(id) {
    const response =await fetch(`https://api.basescan.org/api?module=stats&action=tokensupply&contractaddress=0xddcb3ffd12750b45d32e084887fdf1aabab34239&apikey="UTX63PDD9BIRPBIQN9TF53FUFQ79GNW9QH"`)

    if(!response.ok) {
        throw new Error('Failed to fetch token')
    }

    return response.json()
}