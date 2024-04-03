import { GameState } from "@/lib/definitions"

interface GuessListProps {
    gameState: GameState
}

export default function GuessList({ gameState }: GuessListProps) {
    return (
        <div className="flex flex-col gap-2">
            {gameState.guesses.map((guess) => {
                return <Guess />
            })}
        </div>
    )
}

function Guess() {
    return (
        <div className="w-80 h-7 bg-blue-50 border-solid border-2 border-blue-100 rounded-sm">

        </div>
    )
}