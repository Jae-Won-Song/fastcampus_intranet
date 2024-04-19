import LoginForm from "../components/LoginForm";
import LoginIntro from "../components/LoginIntro";

function LoginPage() {
  return (
    <div className="login">
      <LoginIntro />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
