import Star from "./Star"

import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import {
  createTransferCheckedInstruction,
  getAssociatedTokenAddressSync,
  getMint
} from "@solana/spl-token"
import { PublicKey, Transaction } from "@solana/web3.js"
import { useEffect, useState } from "react"

export default function Pricing(props: any) {
  const { connection } = useConnection()
  const { sendTransaction, publicKey } = useWallet()

  const [paidWithWallet, setPaidWithWallet] = useState(false)

  const [balance, setBalance] = useState(0)

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const body = {
        user_id: 12
      }

      const data = await fetch("http://localhost:8080/balance", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        }
      })

      const json = await data.json()

      setBalance(json.balance_usd)

      console.log(json.balance_usd, "balance")
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error)
  }, [])

  useEffect(() => {
    if (paidWithWallet) {
      setTimeout(() => {
        props.setShowInfoCard("Bought")
      }, 4000)
    }
  }, [paidWithWallet])

  return (
    <div className="w-full flex">
      {/* <div
        onClick={() => {
          setShowInfoCard(false)
        }}
        class="absolute top-3 right-3 hover:bg-neutral-400 hover:bg-opacity-40 transition-all h-[50px] w-[50px] rounded-[6px] bg-gray-200"
      ></div> */}
      <div className="w-[50%] h-full flex flex-col gap-6 items-center py-14 px-6">
        <div className="text-[30px] font-semibold self-start">
          Solana in a nutshell
        </div>
        <div className="flex flex-col">
          <div className="w-full text-[14px] font-light opacity-90 flex justify-between items-center">
            <div>Book</div>
            <div className="flex gap-1">
              <Star></Star>
              <Star></Star>
              <Star></Star>
              <Star></Star>
              <Star></Star>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {/* <div className="text-[30px] font-mono">Description</div> */}
            <div className="font-light text-[16px] mt-4">
              Definitive guide to enter the world of decentralized finance,
              Lending, Yield Farming, Dapps and master it completely
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div>From 5$</div>
          <div>Sebastien Andres</div>
        </div>
      </div>
      <div className="w-[50%] justify-between gap-8 h-full bg-white rounded-[6px] flex flex-col px-10 py-5">
        <div className="py-8 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <div className="font-light text-[26px]">
              Current balance: <span className="font-semibold">${balance}</span>
            </div>
            <div className="flex font-light flex-col gap-2">
              <div className="text-[16px]">
                SOL address: 2tiV37wtNfdzdD2SmAS7yYiFGoCVjX7jC7qtUWQ3XQk8
              </div>
              {/* <div className="text-[16px]">
                Please top up your account with{" "}
                <span className="font-semibold">$170</span> to continue
              </div> */}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div className="font-light text-[18px]">Price</div>
              <input
                type="text"
                className="w-3/5 text-opacity-70 text-black outline-none px-1 p-1 rounded-[4px] border border-slate-400 border-opacity-50"
              />
            </div>
            <div className="text-[12px] opacity-70">Write price from $5</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div
            onClick={async () => {
              const url = "http://localhost:8080/can-i-buy"
              /* DK FIXME - TO BE CHANGED TO IDs of local DB! */
              const data = {
                user_id: 12,
                product_id: 7
              }

              const response = await fetch(url, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(data)
              })
              console.log(response, "response")
              const jsonResponse = await response.json()
              console.log(jsonResponse)

              if (jsonResponse.can_pay) {
                console.log("Can pay:", jsonResponse)
                /* DK FIXME - add further logic here */
                const url = "http://localhost:8080/pay"
                const data = {
                  source_user_id: 12,
                  target_user_id: 11,
                  product_id: 7
                }

                const response = await fetch(url, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(data)
                })

                if (response.ok) {
                  const jsonResponse = await response.json()
                  console.log("Payment successful:", jsonResponse)
                } else {
                  console.log(
                    "Payment failed:",
                    response.status,
                    response.statusText
                  )
                }
                props.setShowInfoCard("Bought")
              } else {
                console.log("Cannot pay", response.status, response.statusText)
              }
            }}
            className="w-full p-3 rounded-[6px] flex items-center justify-center font-light text-white text-[18px] bg-black cursor-pointer"
          >
            Pay
          </div>
          <div
            onClick={async () => {
              // const endpoint = clusterApiUrl(network);
              // const connection = new Connection(endpoint);

              const publicAddressOfBuyer = publicKey
              const publicAddressOfSeller = new PublicKey(
                "3GDCH1RDYFn96ZjPn3QL4BE52t53CmhfqEWUEd3wSTco"
              )

              const { blockhash, lastValidBlockHeight } =
                await connection.getLatestBlockhash()

              const transaction = new Transaction({
                feePayer: publicAddressOfBuyer, // buyer is fee payer
                blockhash,
                lastValidBlockHeight
              })

              const usdcMintAddress = new PublicKey(
                "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"
              ) // usdc devnet
              const sellerUsdcAddress = getAssociatedTokenAddressSync(
                usdcMintAddress,
                publicAddressOfSeller
              )
              const buyerUsdcAddress = getAssociatedTokenAddressSync(
                usdcMintAddress,
                publicAddressOfBuyer
              )

              const { decimals } = await getMint(connection, usdcMintAddress)

              const usdcAmount = 5

              const transferInstruction = createTransferCheckedInstruction(
                buyerUsdcAddress, // source
                usdcMintAddress, // mint
                sellerUsdcAddress, // destination
                publicAddressOfBuyer, // owner of source address
                usdcAmount * 10 ** decimals, // amount
                decimals
              )

              transaction.add(transferInstruction)

              const sig = await sendTransaction(transaction, connection)
              console.log({ sig })
              setPaidWithWallet(true)
            }}
            className="w-full p-3 rounded-[6px] flex items-center justify-center font-light text-white text-[18px] bg-black cursor-pointer"
          >
            Pay with wallet
          </div>
        </div>
      </div>
    </div>
  )
}
