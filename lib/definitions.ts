export type Product = {
    name: string,
    link: string,
    price: number,
    size: string,
    image: string
}

export type GameState = {
    guesses: (Guess | undefined)[],
    won: boolean,
    gameOver: boolean
}

export type Guess = {
    price: number,
    direction: 'up' | 'down' | 'none'
    closeness: 'close' | 'far' | 'win'
}