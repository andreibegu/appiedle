import { submitGuess } from "@/lib/data";
import { Button } from "../ui/button";

export default function Submission() {
    return (
        <form action={async (formData: FormData) => {
            const price = Number(formData.get('price'));
            const guess = await submitGuess(price);
            console.log(guess);
        }} className="flex items-center justify-center gap-2">
            <div className="flex rounded-lg bg-blue-500">
                <input
                    className="block w-20 rounded-md border-2 border-blue-500 py-[9px] pl-2 text-sm outline-2 placeholder:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-500"
                    type="number"
                    name="price"
                    placeholder="1.00"
                    required
                />
                <div className="flex items-center text-white pl-2 pr-2">
                    €
                </div>
            </div>
            <Button
                type="submit"
                className="text-lg flex gap-2 justify-center items-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                    </svg>
                </div>
                Submit
            </Button>
        </form>
    )
}