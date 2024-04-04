import Item from "@/components/game/item";
import Game from "@/components/game/game";
import { getCurrentGame, getCurrentProduct } from "@/lib/data";

export default async function Home() {
  const product = await getCurrentProduct();

  return (
    <main className="flex flex-col flex-1 h-full justify-center items-center gap-5">
      <Item product={product} />
      <Game id={await getCurrentGame()} price={product.price} />
    </main >
  );
}
