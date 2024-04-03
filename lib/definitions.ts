export type Product = {
    name: string,
    link: string,
    price: number,
    size: string,
    image: string
}

export type GameState = {
    guesses: [Guess | null, Guess | null, Guess | null, Guess | null, Guess | null, Guess | null],
    won: boolean,
}

export type Guess = {
    price: number,
    direction: 'up' | 'down' | 'none'
    closeness: 'close' | 'far' | 'win'
}