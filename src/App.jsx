import { useState } from 'react'
import './App.css';
import clockIcon from './assets/images.jpg';
import planning_schedule_concept from './assets/flat-design-content-management-system-illustrated 1.png';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import meeting_icon from './assets/Ellipse 1.png';
import chat_icon from './assets/Ellipse 2.png';
import clock_icon from './assets/Ellipse 3.png';
function App() {

  return (
    <div className=''>
         <div className="background-container">
        <div className='d-flex container'>
         <div className="m-auto">
         <h1 className='text-center' style={{fontWeight:'500px'}}>Manage your <br/> projects better</h1>
          </div>
          <div className='m-auto'>
            <img alt="loading"src={planning_schedule_concept} style={{height:'40vh', width:'40vh'}}></img>
            </div> 
        </div>
      </div>
      <div>
      <div>
  <div className='container'>
    <div style={{marginTop:'50px'}}>
    <h3>What we Offer</h3>

      </div>
<div className='row justify-content-center align-items-center' style={{padding:'32px'}}>
  <div className='col-3'>
<div className='card' style={{backgroundColor:'#F0F7FF'}}>
<img src={meeting_icon} style={{background:'inherent'}} class="card-img-top" alt="..."/>
<div className='card-body'>
  <h5 className='card-title'>In-built meeting room</h5>
  <p className='card-text'>
  Host virtual meetings effortlessly with our integrated meeting room. Connect with your team through audio and video calls, and ensure everyone stays on the same page, no matter where they are.
  </p>
</div>
</div>
  </div>
  <div className='col-3'>

    <div className='card' style={{backgroundColor:"#DDEAFA"}}>
<img src={chat_icon} className='card-img-top text-center'/>
<div className='card-body'>
  <h5 className='card-title'>In-built Chat Room</h5>
  <p className='card-text'>
  Seamlessly communicate with your team in real-time using our in-built chat feature. Keep all your project discussions organized and easily accessible without ever leaving the platform.
  </p>
</div>
    </div>
  </div>
  <div className='col-3'>

    <div className='card' style={{backgroundColor:"#94B5DD"}}>
      <img src={clock_icon} className='card-img-top' alt="project tracking" ></img>
      <div className='card-body'>
        <h5 className='card-title'>Easy Project tracker</h5>
        <p className='card-text'>
        Stay on top of your tasks with our intuitive project tracker. Monitor progress, assign tasks, and keep your project moving forward with a clear overview of what needs to be done and by whom.
        </p>
      </div>
    </div>
  </div>
</div>
  </div>

</div>
      </div>
   
   <div className='container'>
    <div className='features'>
      
    </div>

   </div>
    </div>
  )
}

export default App
