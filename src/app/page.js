// "use client"

import Header from "./components/Header"

// import getTokens from "../libs/getTokens"

export default  async function Home() {
  const response = await fetch('https://api.basescan.org/api?module=stats&action=tokensupply&contractaddress=0xddcb3ffd12750b45d32e084887fdf1aabab34239&apikey="UTX63PDD9BIRPBIQN9TF53FUFQ79GNW9QH')
  const data = await response.json();

return (
  <>
    <main className="min-h-screen">
      <Header />
    </main>


    <div className='min-10' />

    {/**Trending */}
    
    <div className='min-20' />
    {/**Basemarketcap */}
    <div className='min-10' />
    </>
)}
