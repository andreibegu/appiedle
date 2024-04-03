import { GameState } from "@/lib/definitions";
import { Button } from "../ui/button";

interface ShareProps {
    gameState: GameState;
}

export default function ShareMenu({ gameState }: ShareProps) {
    return (
        <Button
            onClick={async () => await handleShare(gameState)}
            className="text-lg flex gap-2 justify-center items-center">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clipRule="evenodd" />
                </svg>
            </div>
            Share your Appiedle
        </Button>
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

    if (isMobile(navigator.userAgent)) {
        navigator.share({
            title: "Appiedle",
            text: result,
            url: window.location.href
        });
    } else {
        result += ' - ' + window.location.href;
        navigator.clipboard.writeText(result);
    }
}