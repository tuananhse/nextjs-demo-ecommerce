
export function formatCurrency(amount: number): string {
    if (!amount) return "0"
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
    }).format(amount) + '$';
}