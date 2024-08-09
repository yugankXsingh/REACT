import Tag from "./components/Tag.js";
import Random from "./components/Random";

export default function App() {
  return (
    <div className="w-full min-h-screen h-full flex flex-col items-center background">
      <h1 className="bg-white w-11/12 font-bold text-center py-[10px] text-4xl  mt-[40px] rounded-xl">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col gap-y-10 mt-[30px] items-center w-11/12">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
