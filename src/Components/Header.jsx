import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <h1 style={{ fontWeight: "600", fontSize: "2.5rem" }}>Age Checker</h1>
        <h2 style={{ fontSize: "2rem" }}>Calculate your exact age</h2>
      </div>
    </>
  );
};
export default Header;
