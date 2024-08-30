import GoogleIcon from '../../assets/google_icon.png';
export default function SignInWithGoogleButton(){
    const handleGoogleClick=()=>{
        console.log("google sigin clicked")
    }
    return(
        <button type="button" className="btn btn-light signin" onClick={handleGoogleClick}>
           <img style={{height:'18px', margin:'3px'}} src={GoogleIcon}></img>
            Continue with Google
        </button>
    );
}