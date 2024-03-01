import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <section className="bg-gray-200 w-screen h-screen">
      <Navbar/>
      <div className="w-[45vw] h-max py-8 mx-auto ">
        <p className="text-2xl flex justify-center">
          Add Files
        </p>
        <div className="flex justify-between mt-10">
          <article className="h-max flex flex-col items-center w-max">
            <div className="w-60 h-80 border-4 border-black rounded bg-white">

            </div>
            <div className="text-sm mt-1 text-blue-500">
              File 1
            </div>
          </article>
          <article className="h-max flex flex-col items-center w-max">
            <div className="w-60 h-80 border-4 border-black rounded bg-white">

            </div>
            <div className="text-sm mt-1 text-blue-500">
              File 2
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
