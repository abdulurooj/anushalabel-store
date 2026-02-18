import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <div className="login">
        <h2>Login</h2>
        <input placeholder="Email" />
        <input placeholder="Password" type="password" />
        <button>Login</button>
      </div>
    </>
  );
}

export default Login;