import CoinList from "../../Components/CoinList";
export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  const data = await res.json();

  return {
    props: { coins: data },
  };
};

const MainCoinPage = ({ coins }) => {
  return (
    <div>
      <CoinList coins={coins} />
    </div>
  );
};

export default MainCoinPage;
