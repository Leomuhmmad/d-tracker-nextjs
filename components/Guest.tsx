import { SignInButton } from "@clerk/nextjs";

const Guest = () => {
    return ( <div className="guest">
        <h1>Welcome</h1>
        <p>Please Sign In To manage your transactions</p>
        <SignInButton />
    </div> );
}
 
export default Guest;