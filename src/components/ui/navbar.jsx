import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import BrandLogo from '../../assets/briefcase.png'
export default function Navbar()
{
    return (
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
    <img src={BrandLogo} style={{margin:'4px'}}/>
    DeskUs</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <form class="d-flex" role="search" style={{marginRight:'2px'}}>
        <input class="form-control me-2 search" type="search" placeholder="Search" aria-label="Search" />
      </form>
      <ul class="navbar-nav  mb-2 mb-lg-0" style={{marginLeft:'2px'}}>
       
        
        <li class="nav-item dropdown">
          <a class="nav-link "  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"  >
            <AccountCircleIcon fontSize="large" color="primary"/>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" ><NotificationsNoneOutlinedIcon fontSize="large"/></a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    )
}