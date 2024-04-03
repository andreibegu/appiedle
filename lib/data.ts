'use server'

import { promises as fs } from 'fs'
import { Guess, Product } from './definitions';

const data: Product[] = JSON.parse(await fs.readFile(process.cwd() + '/app/products.json', 'utf8'));
const startDate = new Date("03/12/2024")

export async function getCurrentProduct() {
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - startDate.getTime();
    const daysPassed = Math.floor(timeDiff / (1000 * 3600 * 24));

    const game = data[daysPassed % data.length];
    return game;
}

export async function submitGuess(price: number) {
    const product = await getCurrentProduct();

    const percent = (price / product.price) * 100 - 100;
    let guess: Guess = {
        price: price,
        closeness: 'far',
        direction: 'none'
    };

    if (Math.abs(percent) <= 5) {
        guess.closeness = 'win';
    } else {
        guess.closeness = Math.abs(percent) <= 25 ? 'close' : 'far';
        guess.direction = percent < 0 ? 'up' : 'down';
    }

    return guess;
}

