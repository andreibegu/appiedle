import Submission from "@/components/game/submission";
import Item from "@/components/game/item";
import { Product } from "@/lib/product";
import GuessList from "@/components/game/guesslist";
import { getCurrentProduct } from "@/lib/data";

export default async function Home() {
  return (
    <main className="flex flex-col flex-1 h-full justify-center items-center gap-5">
      <Item />
      <GuessList />
      <Submission />
    </main >
  );
}
