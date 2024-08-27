export default function SignInWithGoogleButton(){
    const handleGoogleClick=()=>{
        console.log("google sigin clicked")
    }
    return(
        <button type="button" onClick={handleGoogleClick}>
            Continue with Google
        </button>
    );
}