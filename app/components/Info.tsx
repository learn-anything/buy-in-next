import Star from "./Star"

export default function Info(props: any) {
  return (
    <div className="w-full flex">
      {/* <div
        onClick={() => {
          setShowInfoCard(false)
        }}
        className="absolute top-3 right-3 hover:bg-neutral-400 hover:bg-opacity-40 transition-all h-[50px] w-[50px] rounded-[6px] bg-gray-200"
      ></div> */}
      <div className="w-[50%] h-full flex flex-col gap-6 items-center py-14 px-6">
        <div className="text-[30px] font-semibold self-start">
          Solana in a nutshell
        </div>
        <div className="w-full gap-2 flex flex-col">
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
          <div className="w-full h-[300px] rounded-[6px] border border-slate-400 border-opacity-50">
            <img src="./solana-book.png" alt="" />
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div>From 5$</div>
          <div>Sebastien Andres</div>
        </div>
      </div>
      <div className="w-[50%] justify-between gap-8 h-full bg-white rounded-[6px] flex flex-col px-10 py-5">
        <div className="flex flex-col gap-2 py-8">
          <div className="text-[30px] font-mono">Description</div>
          <div className="font-light text-[16px] ">
            Definitive guide to enter the world of decentralized finance,
            Lending, Yield Farming, Dapps and master it completely
          </div>
        </div>
        <div
          onClick={() => {
            props.setShowInfoCard("Pricing")
          }}
          className="w-full p-3 rounded-[6px] flex items-center justify-center font-light text-white text-[18px] bg-black cursor-pointer"
        >
          Pay
        </div>
      </div>
    </div>
  )
}
