// interface Props {
//   name: string
//   price: string
//   description: string
// }

export default function ItemInfo() {
  return (
    <>
      <div className="fixed top-0 right-0 w-screen h-screen flex items-center justify-end">
        <div className="absolute top-0 right-0 w-screen h-screen bg-white dark:bg-neutral-900 dark:bg-opacity-50 backdrop-blur-[2p] bg-opacity-50">
          add onclick here
        </div>
        <div
          id="InfoCard"
          className="z-20 w-1/2 h-full bg-gray-200 dark:bg-neutral-900 flex gap-2 p-2"
        >
          <div className="h-full w-ful"></div>
          <div className="rounded-[6px] bg-neutral-800 w-full h-full"></div>
        </div>
      </div>
      <style jsx>{`
        #InfoCard {
          animation: 0.5s InfoCardSlide forwards ease-out;
        }

        @keyframes InfoCardSlide {
          0% {
            transform: translateX(850px);
          }
        }
      `}</style>
    </>
  )
}
