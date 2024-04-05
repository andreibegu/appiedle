"use client"

import Link from "next/link";
import GuessIndicator from "../game/guessindicator";
import { useRouter } from "next/navigation";

export default function InfoModal() {
    const router = useRouter();

    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target instanceof HTMLDivElement && e.target.classList.contains('fixed') && e.target.classList.contains('z-50')) {
            router.push('/');
        }
    };

    return (
        <div onClick={handleOutsideClick} className="fixed z-50 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="p-4 border-solid border w-10/12 rounded-md bg-white md:w-1/2 md:divide-y-2">
                <div className="flex flex-row justify-between items-center pb-2">
                    <h2 className="text-xl font-bold text-gray-900">About Appiedle</h2>
                    <Link href="/" className="text-gray-900 hover:text-gray-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                        </svg>
                    </Link>
                </div>
                <div className="flex flex-col gap-2 text-justify pt-2">
                    <p>Appiedle is a Wordle-style game where your goal is to guess the price of a random product from the Albert Heijn catalogue. Every day, a new game is live for you to try your grocery-shopping knowledge with. Products can be from any category as long as they are in the AH or Etos product catalogue! </p>
                    <h2 className="text-xl font-bold text-gray-900">How to play</h2>
                    <p>You have 6 price guesses, if you get the correct price within them, you win! Each time you guess a price, an indicator of how close you are will show.</p>
                    <div className="inline-flex gap-3 items-center">
                        <GuessIndicator closeness="close" direction="up" /><p>You're <b>close</b>, but not quite there.</p>
                    </div>
                    <div className="inline-flex gap-3 items-center">
                        <GuessIndicator closeness="far" direction="up" /><p>You're pretty <b>far</b> from the price.</p>
                    </div>
                    <div className="inline-flex gap-3 items-center">
                        <GuessIndicator closeness="win" direction="none" /><p>You're basically <b>spot on</b> the price.</p>
                    </div>
                    <p>After you figure the price out (or unfortunately run out of guesses), you'll get the real price of the product as well as a button to share your game with your friends.</p>
                    <h2 className="text-xl font-bold text-gray-900">Enjoy the game!</h2>
                    <p>You may want to check out the <a href="https://github.com/andreibegu/appiedle" className="text-appie-500 underline decoration-dashed">source code</a> of this project, or, if kind enough, <a href="https://www.paypal.com/paypalme/andreibegu" className="text-appie-500 underline decoration-dashed">donate</a> in order to keep it running.</p>
                </div>
            </div>
        </div>
    );
}