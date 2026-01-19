import { SubContainer } from "./subcontainer";

export function Container() {
  return (
    <div className="grid grid-cols-8">
      {/*Row 1*/}
      <SubContainer className="bg-blue-200 p-4 col-span-2 h-24">
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[4px] border-b-[4px] border-l-transparent border-b-black" />
      </SubContainer>
      <section className="bg-green-200 p-4 col-span-4"></section>
      <section className="bg-red-200 p-4 col-span-2"></section>
      {/*Row 2*/}
      <section className="bg-yellow-200 p-4 col-span-2"></section>
      <section className="bg-purple-200 p- 4 col-span-4"></section>
      <section className="bg-pink-200 p-4 col-span-2"></section>
      {/*Row 3*/}
      <section className="bg-gray-200 p-4 col-span-2"></section>
      <section className="bg-indigo-200 p-4 col-span-4"></section>
      <section className="bg-teal-200 p-4 col-span-2"></section>
    </div>
  );
}
