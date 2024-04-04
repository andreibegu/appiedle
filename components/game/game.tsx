'use client'

import GuessList from "./guess-list";
import Submission from "./submission";
import { GameState, Guess } from "@/lib/definitions";;
import ShareMenu from "./share-menu";
import useLocalStorage from "@/lib/useLocalStorage";

interface GameProps {
    id: number
}

export default function Game({ id }: GameProps) {
    const [gameState, setGameState] = useLocalStorage<GameState>("gamestate", {
        guesses: [undefined, undefined, undefined,
            undefined, undefined, undefined],
        won: false,
        gameOver: false
    }, id.toString());

    const addGuess = (newGuess: Guess) => {
        const updatedGuesses: (Guess | undefined)[] = [...gameState.guesses];

        const index = updatedGuesses.findIndex(guess => guess === undefined);
        if (index !== -1) {
            updatedGuesses[index] = newGuess;
        }

        setGameState({
            guesses: updatedGuesses,
            won: newGuess.closeness == 'win',
            gameOver: index == updatedGuesses.length - 1
        });
    };

    return (
        <div className="flex flex-col h-full justify-center items-center gap-5">
            <GuessList gameState={gameState!} />
            {(!gameState.gameOver && !gameState.won) ? <Submission onAddGuess={addGuess} />
                : <ShareMenu gameState={gameState} />}
        </div>
    );
}