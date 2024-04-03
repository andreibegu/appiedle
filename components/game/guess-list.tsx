import { GameState, Guess } from "@/lib/definitions"
import clsx from "clsx";

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
        <div className="w-80 h-8 bg-blue-50 border-solid border-2 border-blue-100 rounded-sm"></div>
    )
}

interface GuessProps {
    guess: Guess;
}

function GuessRow({ guess }: GuessProps) {
    return (
        <div className={clsx("flex justify-between flex-row w-80 h-8 gap-2",
            {
                "animate-shake": guess.direction != 'none',
                "animate-jump": guess.direction == 'none'
            })}>
            <div className="flex w-full h-8 text-sky-800 font-bold bg-blue-50 justify-center items-center border-solid border-2 border-blue-100 rounded-sm">
                {guess.price.toFixed(2)} €
            </div>
            <GuessIndicator closeness={guess.closeness} direction={guess.direction} />
        </div>

    )
}

type IndicatorProps = Omit<Guess, 'price'>

function GuessIndicator({ closeness, direction }: IndicatorProps) {
    let svgComponent = null;

    switch (direction) {
        case "down":
            svgComponent = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clip-rule="evenodd" />
            </svg>);
            break;
        case "up":
            svgComponent = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clip-rule="evenodd" />
            </svg>);
            break;
        case "none":
            svgComponent = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="m15 1.784-.796.795a1.125 1.125 0 1 0 1.591 0L15 1.784ZM12 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L12 1.784ZM9 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L9 1.784ZM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 0 1 1.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 0 1 1.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 0 0-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 0 1 1.5 0v.797ZM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 0 1 2.585.364 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 2.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0 0 12 12.75ZM21.75 18.131a2.604 2.604 0 0 0-1.915.165 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.604 2.604 0 0 0-1.915-.165v2.494c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494Z" />
            </svg>);
            break;
    }

    return (
        <div className={clsx(`w-15 pl-6 pr-6 h-8 border-solid border-2 rounded-sm flex items-center justify-center`,
            {
                'bg-green-50 border-green-100 text-green-400': closeness == 'win',
                'bg-red-50 border-red-100 text-red-400': closeness == 'far',
                'bg-orange-50 border-orange-100 text-orange-400': closeness == 'close',
            })}>
            {svgComponent}
        </div>
    );
}