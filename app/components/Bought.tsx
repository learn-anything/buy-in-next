import Star from "./Star"

export default function Bought(props: any) {
  return (
    <div className="w-full flex">
      {/* <div
        onClick={() => {
          prosetShowInfoCard(false)
        }}
        class="absolute top-3 right-3 hover:bg-neutral-400 hover:bg-opacity-40 transition-all h-[50px] w-[50px] rounded-[6px] bg-gray-200"
      ></div> */}
      <div className="w-[50%] h-full flex flex-col gap-6 items-center py-14 px-6">
        <div className="text-[30px] font-semibold self-start">
          Solana in a nutshell
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-2">
            <div className="text-[30px] font-mono">Description</div>
            <div className="font-light text-[16px] ">
              Definitive guide to enter the world of decentralized finance,
              Lending, Yield Farming, Dapps and master it completely
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div>From 5$</div>
          <div>Sebastien Andres</div>
        </div>
        <div className="w-full font-light flex justify-between items-center">
          <div>do you like the product?</div>
          <div className="flex gap-1">
            <Star></Star>
            <Star></Star>
            <Star></Star>
            <Star></Star>
            <Star></Star>
          </div>
        </div>
      </div>
      <div className="w-[50%] gap-8 h-full bg-white rounded-[6px]  flex flex-col px-10 py-12">
        <div className="text-[30px] font-light font-mono">
          Payment Completed
        </div>
        <div className="border border-slate-400 overflow-auto border-opacity-50 rounded-[6px] h-full">
          <div className="border-b flex items-center justify-between w-full text-[14px] border-slate-400 border-opacity-50 p-5">
            <div>
              <div>Solana-in-a-nutshell.pdf</div>
              <div className="text-[10px]">PDF 2.6 MB</div>
            </div>
            <div className="bg-black text-white rounded-[6px] px-4 p-2">
              Download
            </div>
          </div>
          {/* <div className="border-b flex items-center justify-between w-full text-[14px] border-slate-400 border-opacity-50 p-5">
            <div>
              <div>File_2111</div>
              <div className="text-[10px]">PDF 2.6 MB</div>
            </div>
            <div className="bg-black text-white rounded-[6px] px-4 p-2">
              Download
            </div>
          </div>
          <div className="border-b flex items-center justify-between w-full text-[14px] border-slate-400 border-opacity-50 p-5">
            <div>
              <div>File_2111</div>
              <div className="text-[10px]">PDF 2.6 MB</div>
            </div>
            <div className="bg-black text-white rounded-[6px] px-4 p-2">
              Download
            </div>
          </div>
          <div className="border-b flex items-center justify-between w-full text-[14px] border-slate-400 border-opacity-50 p-5">
            <div>
              <div>File_2111</div>
              <div className="text-[10px]">PDF 2.6 MB</div>
            </div>
            <div className="bg-black text-white rounded-[6px] px-4 p-2">
              Download
            </div>
          </div>
          <div className="border-b flex items-center justify-between w-full text-[14px] border-slate-400 border-opacity-50 p-5">
            <div>
              <div>File_2111</div>
              <div className="text-[10px]">PDF 2.6 MB</div>
            </div>
            <div className="bg-black text-white rounded-[6px] px-4 p-2">
              Download
            </div>
          </div> */}
          {/* <div className="border-b flex items-center justify-between w-full text-[14px] border-slate-400 border-opacity-50 p-5">
            <div>
              <div>File_2111</div>
              <div className="text-[10px]">PDF 2.6 MB</div>
            </div>
            <div className="bg-black text-white rounded-[6px] px-4 p-2">
              Download
            </div>
          </div>
          <div className="border-b flex items-center justify-between w-full text-[14px] border-slate-400 border-opacity-50 p-5">
            <div>
              <div>File_2111</div>
              <div className="text-[10px]">PDF 2.6 MB</div>
            </div>
            <div className="bg-black text-white rounded-[6px] px-4 p-2">
              Download
            </div>
          </div>
          <div className="border-b flex items-center justify-between w-full text-[14px] border-slate-400 border-opacity-50 p-5">
            <div>
              <div>File_2111</div>
              <div className="text-[10px]">PDF 2.6 MB</div>
            </div>
            <div className="bg-black text-white rounded-[6px] px-4 p-2">
              Download
            </div>
          </div> */}
          {/* <div className="border-b flex items-center justify-between w-full text-[14px] border-slate-400 border-opacity-50 p-5">
            <div>
              <div>File_2111</div>
              <div className="text-[10px]">PDF 2.6 MB</div>
            </div>
            <div className="bg-black text-white rounded-[6px] px-4 p-2">
              Download
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
