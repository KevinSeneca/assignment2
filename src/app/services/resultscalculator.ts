
export function calculateSide({ x, y }) { 
        if (x >= y) {
            return false;
        } 
        else
        {
        return Math.sqrt(x * x + y * y);
        }
} 