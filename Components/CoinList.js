import Link from "next/link";
import { useState } from "react";
import CoinListCard from "./CoinListCard";

const CoinList = ({ coins }) => {
  const [userInput, setUserInput] = useState("");
  const [searchBtn, setSearchbtn] = useState(false);

  const handleSearch = (e) => {
    setUserInput(e.target.value);
    console.log(userInput);
  };
  const handleSearchBtn = (e) => {
    e.preventDefault();
    setSearchbtn(!searchBtn);
    console.log(!searchBtn);
  };
  const filteredCoins = coins.filter((coins) =>
    coins?.name.toLowerCase().includes(userInput.toLowerCase())
  );
  return (
    <div className="text-center px-4 py-1">
      <form className="my-5" type="search">
        <input
          className="w-4/5 h-8 text-lg shadow appearance-none rounded-lg border-solid border-1 border-stone-300 outline-none font-sans-serif hover:font-sans-serif"
          type="search"
          placeholder="search coin"
          onChange={handleSearch}
          value={userInput}
        />

        <button className="coin-btn" type="submit" onClick={handleSearchBtn}>
          Submit
        </button>
      </form>
      <CoinListCard>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xlg:grid-cols-4 gap-4 text-lg ">
          {filteredCoins &&
            filteredCoins?.map((coins) => (
              <Link href={`/Coins/${coins.id}`} key={coins.id}>
                <a className="w-full h-full md:h-full border-solid border-black border-2 hover:box-content rounded-lg mt-5 bg-white hover:bg-white">
                  <img
                    className="mt-3 px-1 py-1"
                    src={coins?.image}
                    alt={coins?.image}
                    width={120}
                    height={120}
                  />
                  <ul className="mt-2 px-2 py-2">{coins?.name}</ul>
                </a>
              </Link>
            ))}
        </div>
      </CoinListCard>
    </div>
  );
};

export default CoinList;
