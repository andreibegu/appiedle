export default function GuessList() {
    return (
        <div className="flex flex-col gap-2">
            <Guess></Guess>
            <Guess></Guess>
            <Guess></Guess>
            <Guess></Guess>
            <Guess></Guess>
            <Guess></Guess>
        </div>
    )
}

function Guess() {
    return (
        <div className="w-80 h-6 bg-blue-50 border-solid border-2 border-blue-100 rounded-sm">

        </div>
    )
}