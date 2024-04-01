import Submission from "@/components/game/submission";
import Item from "@/components/game/item";
import { Product } from "@/lib/product";
import GuessList from "@/components/game/guesslist";

const product: Product = {
  "name": "Calgon 3 In 1 Wasmachinereiniger en anti kalk",
  "link": "wi197092/calgon-3-in-1-wasmachinereiniger-en-anti-kalk",
  "price": 6.99,
  "size": "750 ml",
  "image": "https://static.ah.nl/dam/product/AHI_43545239393138393639?revLabel=1&rendition=800x800_JPG_Q90&fileType=binary"
}

export default function Home() {
  return (
    <main className="flex flex-col flex-1 h-full justify-center items-center gap-5">
      <Item product={product} />
      <GuessList />
      <Submission />
    </main >
  );
}
