import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-black">
      <img
        onClick={() => navigate("/")}
        role="button"
        className="h-36 mx-auto cursor-pointer"
        src="logo.png"
      />
    </div>
  );
}

export default Header;
