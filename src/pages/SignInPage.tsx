import SignInForm from "../components/auth/SignInForm"
import NavBar from "../components/shared/NavBar"


function SignInPage() {
  return (
    <>
        <NavBar isLoggedIn={false} currentPage="signin" />
        <SignInForm />
    </>
  )
}

export default SignInPage