import { GameState, Guess } from "@/lib/definitions"
import clsx from "clsx";
import GuessIndicator from "./guessindicator";

interface GuessListProps {
    gameState: GameState;
}

export default function GuessList({ gameState }: GuessListProps) {
    return (
        <div className="flex flex-col gap-2">
            {gameState.guesses.map((guess, idx) => {
                return !guess ? <BlankGuessRow key={idx} /> : <GuessRow key={idx} guess={guess} />;
            })}
        </div>
    )
}

function BlankGuessRow() {
    return (
        <div className="w-72 h-8 bg-blue-50 border-solid border-2 border-blue-100 rounded-md md:w-80"></div>
    )
}

interface GuessProps {
    guess: Guess;
}

function GuessRow({ guess }: GuessProps) {
    return (
        <div className={clsx("flex justify-between flex-row w-72 h-8 gap-1 md:w-80",
            {
                "animate-shake": guess.direction != 'none',
                "animate-jump": guess.direction == 'none'
            })}>
            <div className="flex w-full h-8 text-sky-800 font-bold bg-blue-50 justify-center items-center border-solid border-2 border-blue-100 rounded-md">
                {guess.price.toFixed(2)} €
            </div>
            <GuessIndicator closeness={guess.closeness} direction={guess.direction} />
        </div>

    )
}