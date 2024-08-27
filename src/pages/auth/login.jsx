import { Link } from 'react-router-dom';
import '../../components/ui/OAuth.jsx';
export default function Login(){
    return (
<div className="container  justify-content-center align-items-center">
    <div className='card m-auto'>
<form className='w-50 m-auto'>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <Link to='forgot_password'>Forgot Password?</Link>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
</div>
</div>
    );
}