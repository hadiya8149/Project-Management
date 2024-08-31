import { Link } from 'react-router-dom';
import SignInWithGoogleButton from '../../components/ui/OAuth.jsx';
// import planning_schedule_concept from '../../assets/company-employees-sharing-thoughts-ideas.png';
import './auth.css';
export default function Login() {
  return (
    <div className='background-image'>
    
    <div className="container  justify-content-center align-items-center">
      <nav className='navbar narbar-sm-expand navbar-light'>


        <Link className="navbar-brand" to='/'>DeskUs</Link>
      </nav>

      <div>
        <div className='card card-login m-auto'>

          <h1 className='card-title login' style={{ fontSize: '30px' }}>Welcome to DeskUs</h1>
          <div className='card-body login'>
            <p className='card-text' style={{ fontSize: '15px', fontWeight: '100' }}>Your one click Management App!</p>
            <form className='text-align-left'>

              <div className="mb-3 text-align-left">
                <label htmlFor="InputEmail" id="emailLabel" className="form-label">Email</label>
                <input type="email" style={{ padding:'8px', background:'#eef5fd54'}} placeholder='yourmail@example.com' className="form-control" id="InputEmail" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3 text-align-left">
                <label htmlFor="InputPassword" id="passwordLabel" className="form-label">Password</label>
                <input type="password"  style={{background:'#eef5fd54'}} className="form-control" id="InputPassword" />
              </div>
              <div className="mb-3 form-check">
                <Link className='forgot-password-link' to='forgot_password'>Forgot Password?</Link>
              </div>
              <button type="submit" className="btn btn-light signin">Sign In</button>

              <p className='card-text' style={{ fontSize: '14px', margin: '8px', padding: '2px' }}>
                Don't have an account <Link to='/signup' className='card-text signup-link'>signup?</Link>

                <hr style={{ display: 'inline-block', width: '40%', margin: '6px' }} />or<hr style={{ display: 'inline-block', width: '40%', margin: '6px' }} /></p>
              <SignInWithGoogleButton />

            </form>

          </div>

        </div>

      </div>
    </div>
    {/* <img style={{position:'absolute',bottom: '-56px',
    left: '-89px', height:'600px'}} src={planning_schedule_concept}></img> */}

    </div>
  );
}