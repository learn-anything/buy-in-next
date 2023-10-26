import { useState } from "react"
import Pricing from "./Pricing"
import Bought from "./Bought"
import Card from "./Card"
import Info from "./Info"

export default function Store() {
  const [showInfoCard, setShowInfoCard] = useState("")
  return (
    <>
      <style>
        {`
      #InfoCard {
        animation: 0.2s InfoCardSlide forwards ease-out
      }
      @keyframes InfoCardSlide {
        0% {
          transform: translateX(850px)
        }
      }
      `}
      </style>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
        <Card
          setShowInfoCard={setShowInfoCard}
          imgSrc="./solana-book.png"
          name={"Solana in a nutshell"}
          price="5"
        />
        <Card
          setShowInfoCard={setShowInfoCard}
          imgSrc="./solana-book-2.png"
          name={"Solana: speed and scale"}
          price="3"
        />

        {showInfoCard && (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-end">
            <div
              className="w-screen h-screen fixed top-0 left-0 bg-[#f4f1f0] bg-opacity-20 backdrop-blur-sm"
              onClick={() => {
                setShowInfoCard("")
              }}
            ></div>
            <div
              id="InfoCard"
              className=" relative w-[850px] z-20 h-full p-2 gap-2 flex bg-[#e5e5e5]"
              style={{ borderRadius: "6px 0 0 6px" }}
            >
              {showInfoCard === "Pricing" && (
                <Pricing setShowInfoCard={setShowInfoCard}></Pricing>
              )}
              {showInfoCard === "Info" && (
                <Info setShowInfoCard={setShowInfoCard}></Info>
              )}
              {showInfoCard === "Bought" && (
                <Bought setShowInfoCard={setShowInfoCard}></Bought>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
