const priceConfig = {
    isLeft: true,
    symbol: "$"
}
export default function convertPrice(amount) {
    return priceConfig.isLeft ? `${priceConfig.symbol}${amount}` : `${amount}${priceConfig.symbol}`
}