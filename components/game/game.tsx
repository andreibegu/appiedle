'use client'

import { useState } from "react";
import GuessList from "./guesslist";
import Submission from "./submission";
import { GameState } from "@/lib/definitions";

export default function Game() {
    const [gameState, setGameState] = useState<GameState>()

    return (
        <div className="flex flex-col h-full justify-center items-center gap-5">
            <GuessList />
            <Submission />
        </div>
    )
}