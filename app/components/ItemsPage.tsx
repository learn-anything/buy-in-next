import Item from "./Item"

export default function ItemsPage() {
  return (
    <>
      <div className="grid gap-2 grid-cols-3 grid-rows-2 h-full">
        <Item name="Course" price="5" />
        <Item name="Course" price="5" />
        <Item name="Course" price="5" />
        <Item name="Course" price="5" />
        <Item name="Course" price="5" />
        <Item name="Course" price="5" />
        {/* TODO: solve this should be scrollable infinite */}
        <Item name="Course" price="5" />
        <Item name="Course" price="5" />
        <Item name="Course" price="5" />
        <Item name="Course" price="5" />
        <Item name="Course" price="5" />
        <Item name="Course" price="5" />
      </div>
    </>
  )
}
