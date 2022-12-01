import Axios from "axios";

type Props = {
    coinData: CoinData;
}

type Coin = {
    id: string;
    icon: string;
    name: string;
    symbol: string;
    rank: number;
    price: number;
    priceBtc: number;
    volume: number;
    marketCap: number;
    availableSupply: number;
    totalSupply: number;
    priceChange1h: number;
    priceChange1d: number;
    priceChange1w: number;
    websiteUrl: string;
    twitterUrl: string;
    exp: Array<string>;
}

type CoinData = { coins: Array<Coin> };

const CoinList = ({ coinData }:Props) => {
    console.log(coinData);
    return (
        <div></div>
    );
}

export const getStaticProps = async () => {
    const data: { data: CoinData } = await Axios.get(
        "https://api.coinstats.app/public/v1/coins?skip=0"
    )

    return {
        props: {
            coinData: data.data,
        },
    };
};
export default CoinList;