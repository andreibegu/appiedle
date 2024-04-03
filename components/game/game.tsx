'use client'

import { useState } from "react";
import GuessList from "./guesslist";
import Submission from "./submission";
import { GameState, Guess } from "@/lib/definitions";

export default function Game() {
    const [gameState, setGameState] = useState<GameState>({
        guesses: [undefined, undefined, undefined,
            undefined, undefined, undefined],
        won: false
    });

    const addGuess = (newGuess: Guess) => {
        const updatedGuesses: (Guess | undefined)[] = [...gameState.guesses];

        const index = updatedGuesses.findIndex(guess => guess === undefined);
        if (index !== -1) {
            updatedGuesses[index] = newGuess;
        }

        setGameState({
            guesses: updatedGuesses,
            won: newGuess.closeness == 'win'
        });
    };

    return (
        <div className="flex flex-col h-full justify-center items-center gap-5">
            <GuessList gameState={gameState!} />
            <Submission onAddGuess={addGuess} />
        </div>
    )
}