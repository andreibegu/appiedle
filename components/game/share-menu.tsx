import { GameState } from "@/lib/definitions";
import { Button } from "../ui/button";
import { isMobile } from "@/lib/util";

interface ShareProps {
    gameState: GameState;
    price: number;
}

export default function ShareMenu({ gameState, price }: ShareProps) {
    return (
        <div className="inline-flex">
            <div className="inline-flex items-center">
                <div className="w-0 h-0 border-t-[20px] border-t-transparent border-r-[20px] border-r-blue-500 border-b-[20px] border-b-transparent relative">
                    <div className="absolute transform translate-x-3/4 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-blue-500 px-4 py-2 text-white font-bold">{price} €</div>
            </div>
            <Button
                onClick={async () => await handleShare(gameState)}
                className="text-lg flex gap-2 justify-center items-center border-dashed border-l-2 border-l-white">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clipRule="evenodd" />
                    </svg>
                </div>
            </Button>
        </div>
    );
}

async function handleShare(gameState: GameState) {
    const guesses = gameState.guesses.filter(g => g);
    let result = `I've just finished today's Appiedle! ${guesses.length}/${gameState.guesses.length} - `;

    guesses.forEach((guess, _) => {
        let color = "";
        switch (guess!.closeness) {
            case "close": color = "🟨"; break;
            case "far": color = "🟥"; break;
            case "win": color = "🟩"; break;
        }

        let arrow = "";
        switch (guess!.direction) {
            case "up": arrow = "⬆️"; break;
            case "down": arrow = "⬇️"; break;
            case "none": arrow = "🎉"; break;
        }

        result += color + arrow + " ";
    });

    const data = {
        title: "Appiedle",
        text: result,
        url: window.location.href
    }

    console.log(navigator.userAgent);
    if (navigator.canShare(data) && isMobile(navigator.userAgent)) {
        await navigator.share(data);
    } else {
        result += ' - ' + window.location.href;
        navigator.clipboard.writeText(result);
    }
}