import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';
import MessagesIcon from '../../assets/messages.svg'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsVector from '../../assets/settingsvector.svg'
import MyTasks from '../../assets/mytasks.svg'
import ActivityVector from '../../assets/activityvector.svg'
import ProjectsVector from '../../assets/projectsvector.svg'
export default function Sidebar()
{
    return (
        <div className='sidebar' >
<div class=" flex-column flex-shrink-0 p-3"
>
<ul class="navbar-nav flex-column mb-auto " style={{marginLeft:'2px', color:'white'}}>
       
        
       <li class="nav-item ">
         <a class="nav-link "  href="#">
           <DashboardIcon style={{color:'#0193fc'}}/>Dashboard
         </a>
         
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#" >
            <img src={ProjectsVector} />Projects</a>
       </li>
       <li class="nav-item ">
         <a class="nav-link "  href="#">
           <img src={MyTasks} />My tasks
         </a>
         
       </li>
       <li class="nav-item ">
         <a class="nav-link "  href="#">
          <img src={ActivityVector} /> Activity
         </a>
         
       </li>
       <li class="nav-item ">
         <a class="nav-link "  href="#">
          <PeopleOutlineTwoToneIcon color="primary"/> Teams
         </a>
       </li>
       <li class="nav-item ">
         <a class="nav-link "  href="#">
          <img src={MessagesIcon} /> Messages
         </a>
       </li>
       <li class="nav-item ">
         <a class="nav-link "  href="#">
           <img src={SettingsVector} />Settings
         </a>
       </li>
     </ul>
    </div>
        </div>
    )
}