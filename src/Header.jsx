import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
const Header=()=>{
    return(
        <>
        <header class="pb-6 w-full fixed border- border-red-500 bg-white lg:pb-0 drop-shadow-md z-50">
        <div class="px-4 border- border-red-500 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        <nav className="flex items-center justify-start gap-2 sm:gap-0 sm:justify-between  lg:h-16   ">
            <div className="border- border-red-500 h-full w-12 p-2 flex lg:hidden">
            <FontAwesomeIcon className="w-full h-full" icon={faBars} />
                
            </div>
            <div className="border- border-red-500 h-full w-48">
                    <a href="#" title="">
                        <img class="w-full h-full" src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Printify.png" alt="" />
                    </a>
            </div>
            <div className="space-x-5 font-roboto border- border-red-600 text-[#353A47] text-base hidden lg:flex">
                <a href="#"  class="text-base font-medium text-black transition-all duration-200 hover:text-green-600"> Catalog </a>
                <a href="#"  class="text-base font-medium text-black transition-all duration-200 hover:text-green-600"> How it works </a>
                <a href="#"  class="text-base font-medium text-black transition-all duration-200 hover:text-green-600"> Pricing </a>
                <a href="#"  class="text-base font-medium text-black transition-all duration-200 hover:text-green-600"> Blog </a>
                <a href="#"  class="text-base font-medium text-black transition-all duration-200 hover:text-green-600"> Services </a>
                <a href="#"  class="text-base font-medium text-black transition-all duration-200 hover:text-green-600"> Use-cases </a>
                <a href="#"  class="text-base font-medium text-black transition-all duration-200 hover:text-green-600"> Need help? </a>

                
            </div>
            <div className="font-roboto text-base border- border-red-600 hidden sm:flex ">
                <a href="#" title="" class=" px-6 py-2 ml-10 text-base font-semibold border-gray-500 border text-black transition-all duration-200  rounded-sm  hover:text-green-600" role="button">Log in</a>
                <a href="#" title="" class=" px-5 py-2 ml-10 text-base font-semibold  text-white transition-all duration-200  rounded-sm bg-green-500  hover:bg-green-600" role="button">Sign up</a>

            </div>

        </nav>
        </div>
        </header>
        </>
    )
}
export default Header