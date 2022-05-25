import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="">
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/about">
            <a>About</a>
          </Link>

          <Link href="/reviews">
            <a>Reviews</a>
          </Link>

          <Link href="/Coins">
            <a>Coins</a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
