import PropTypes from "prop-types";
const Header = ({ text }) => {
  return (
    <header>
      <h1>{text}</h1>
    </header>
  );
};

Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: "CryptoCurrency",
};
export default Header;
