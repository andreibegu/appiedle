import Item from "@/components/game/item";
import Game from "@/components/game/game";

export default async function Home() {
  return (
    <main className="flex flex-col flex-1 h-svh justify-center items-center gap-5">
      <Item />
      <Game />
    </main >
  );
}
