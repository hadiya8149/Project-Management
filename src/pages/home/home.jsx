import Sidebar from '../../components/ui/sidebar.jsx'
import Navbar from '../../components/ui/navbar.jsx'

export default function HomePage()
{
return (
    <>
    <Navbar />
    <div className="d-flex">
    <Sidebar />
    </div>

    </>
    )
}