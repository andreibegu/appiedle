import { promises as fs } from 'fs'
import { Product } from './product';

const data: Product[] = JSON.parse(await fs.readFile(process.cwd() + '/public/products.json', 'utf8'));
const startDate = new Date("03/12/2024")

export async function getCurrentProduct() {
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - startDate.getTime();
    const daysPassed = Math.floor(timeDiff / (1000 * 3600 * 24));

    const game = data[daysPassed % data.length];
    return game;
}

