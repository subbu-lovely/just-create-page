import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Sign In</h2>

      <div className="form-group">
        <input type="email" placeholder="Email address" />
      </div>

      <div className="form-group">
        <input type="password" placeholder="Password" />
      </div>

      <button className="primary-btn">Sign In</button>

      <div className="link-row">
        New here?{" "}
        <span onClick={() => navigate("/create")}>
          Create account
        </span>
      </div>
    </div>
  );
}

export default SignIn;


