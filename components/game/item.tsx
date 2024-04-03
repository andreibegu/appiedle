import { AspectRatio } from "@/components/ui/aspectratio"
import { getCurrentProduct } from "@/lib/data";
import Image from "next/image";

export default async function Item() {
    const product = await getCurrentProduct();

    return (
        <div className="flex flex-col justify-center items-center w-auto gap-2 bg-blue-50 pt-4 pb-4 pl-8 pr-8 rounded-md border-solid border-2 border-blue-100">
            <div className="w-56">
                <AspectRatio ratio={1} className="">
                    <Image
                        src={product.image}
                        fill
                        alt="Product image"
                        className="rounded-md object-cover border-solid border-blue-100 border-2 p-4 bg-white"
                    />
                </AspectRatio>
            </div>
            <div className="flex flex-col w-64 md:w-96">
                <h2 className="font-bold">{product.name}</h2>
                <p>{product.size}</p>
            </div>
        </div>
    )
}