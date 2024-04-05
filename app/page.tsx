import Item from "@/components/game/item";
import Game from "@/components/game/game";
import { getCurrentGame, getCurrentProduct } from "@/lib/data";
import InfoModal from "@/components/ui/infomodal";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default async function Home({ searchParams }: SearchParamProps) {
  const product = await getCurrentProduct();
  const showInfo = searchParams?.showInfo;

  return (
    <main className="flex flex-col flex-1 h-full justify-center items-center gap-5">
      {showInfo && <InfoModal />}
      <Item product={product} />
      <Game id={await getCurrentGame()} price={product.price} />
    </main >
  );
}
