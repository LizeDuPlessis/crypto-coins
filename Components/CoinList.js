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
    <div className="text-center">
      <form className="my-5" type="search">
        <input
          className="w-4/5 h-8 text-lg shadow appearance-none rounded-lg border-solid border-1 border-stone-300 focus:shadow-outline"
          type="search"
          placeholder="Search Coin"
          onChange={handleSearch}
          value={userInput}
        />

        <button
          className=" h-9 ml-3 shadow appearance-none rounded-lg border-solid border-1 border-stone-300 hover:shadow "
          type="submit"
          onClick={handleSearchBtn}
        >
          Submit
        </button>
      </form>
      <CoinListCard>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xlg:grid-cols-4 gap-4 text-lg ">
          {filteredCoins &&
            filteredCoins?.map((coins) => (
              <Link href={`/Coins/${coins.id}`} key={coins.id}>
                <a className="w-full h-full md:h-full border-solid border-black border-2 hover:box-content rounded-lg mt-5 hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ">
                  <img
                    className="mt-3"
                    src={coins?.image}
                    alt={coins?.image}
                    width={120}
                    height={120}
                  />
                  <ul className="mr-8">{coins?.name}</ul>
                </a>
              </Link>
            ))}
        </div>
      </CoinListCard>
    </div>
  );
};

export default CoinList;
