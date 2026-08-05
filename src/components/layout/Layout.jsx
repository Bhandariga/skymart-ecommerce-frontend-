import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(){

return(

<div className="
min-h-screen
bg-white
dark:bg-[#070A0F]
text-gray-900
dark:text-white
transition-colors
duration-300
">

<Navbar/>

<main>
<Outlet/>
</main>

<Footer/>

</div>

)

}

export default Layout;