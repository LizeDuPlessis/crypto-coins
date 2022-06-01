import Link from "next/link";
export const getStaticPaths = async () => {
  const res = await fetch("https://api.coingecko.com/api/v3/coins");
  const data = await res.json();

  const paths = data.map((coin) => {
    return {
      params: { id: coin.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await res.json();

  return {
    props: { coins: data },
  };
};

const Details = ({ coins }) => {
  return (
    <div>
      <h1 className="text-center"> {coins?.name}</h1>

      <div className="flex flex-wrap justify-center bg-slate-300 border-double rounded border-2 border-slate-200 ">
        <p
          className={`flex flex-col bg-white p-5 m-5 rounded shadow text-center gap-1 text-2xl ${
            coins?.market_data.current_price.gbp.toLocaleString() >= 10
              ? "bg-red-700"
              : coins?.market_data.current_price.gbp.toLocaleString() >= 7
              ? "bg-red-500"
              : coins?.market_data.current_price.gbp.toLocaleString() >= 5
              ? "bg-blue-600"
              : "bg-blue-100"
          }`}
        >
          <span className="font-bold">Current Price: </span>£
          {coins?.market_data.current_price.gbp.toLocaleString()}
        </p>
        <p
          className={`flex flex-col bg-white p-5 m-5 rounded shadow text-center gap-1 text-2xl ${
            coins?.market_data.market_cap_rank >= 10
              ? "bg-yellow-500"
              : coins?.market_data.market_cap_rank >= 3
              ? "bg-yellow-400"
              : coins?.market_data.market_cap_rank >= 10
              ? "bg-yellow-300"
              : "bg-yellow-200"
          }`}
        >
          <span className="font-bold ">Market Cap Rank: </span>
          {coins?.market_data.market_cap_rank}
        </p>
      </div>
      <div className="text-center mt-5">
        <Link href={coins?.links.homepage[0]}>
          <a className="px-3 py-1 rounded-lg border-solid border-1 border-stone-300 hover:bg-orange ">
            Go to {coins?.name}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Details;
