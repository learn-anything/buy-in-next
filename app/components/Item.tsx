interface Props {
  name: string
  price: string
  image?: string
  onClick?: () => void
}

export default function Item(props: Props) {
  return (
    <>
      <div className="cursor-pointer h-full w-full bg-gray-200 dark:bg-neutral-800 rounded-[6px]">
        {props.name}
      </div>
    </>
  )
}
