import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Create Account</h2>

      <div className="form-group">
        <input type="text" placeholder="Full Name" />
      </div>

      <div className="form-group">
        <input type="password" placeholder="Password" />
      </div>

      <div className="form-group">
        <input type="password" placeholder="Confirm Password" />
      </div>

      <div className="form-group">
        <input type="text" placeholder="Village" />
      </div>

      <button className="primary-btn">Create Account</button>

      <div className="link-row">
        Already have an account?{" "}
        <span onClick={() => navigate("/signin")}>
          Sign In
        </span>
      </div>
    </div>
  );
}

export default Create;

