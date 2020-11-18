
export function calculateSide(y: number, x: number ) { 
    return Math.round((Math.sqrt(x * x + y * y) * 100)) / 100;
} 