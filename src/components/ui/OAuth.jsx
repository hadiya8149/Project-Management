import GoogleIcon from '@mui/icons-material/Google';
export default function SignInWithGoogleButton(){
    const handleGoogleClick=()=>{
        console.log("google sigin clicked")
    }
    return(
        <button type="button" className="btn btn-light signin" onClick={handleGoogleClick}>
           <GoogleIcon/>
            Continue with Google
        </button>
    );
}