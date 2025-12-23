import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome Back</h2>

      <button
        className="primary-btn"
        onClick={() => navigate("/signin")}
      >
        Sign In
      </button>

      <button
        className="secondary-btn"
        onClick={() => navigate("/create")}
      >
        Create New Account
      </button>
    </div>
  );
}

export default Home;

