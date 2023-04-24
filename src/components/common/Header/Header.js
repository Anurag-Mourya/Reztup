import { faAlignLeft, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Header = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <>
            <nav className="w-full bg-white sticky top-0 pt-2">
                <div className="justify-around px-5 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div className="logo">
                            <h1 className='text-[30px] font-bold text-red-500 mb-[1.5rem]'>Reztup</h1>
                        </div>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div>
                        <div
                            className={`flex-1 md:block md:pb-0 md:mt-0 flex justify-around items-center max-w-screen-xl res_header_alignment  ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center flex space-y-8 md:flex md:space-x-6 md:space-y-0 responsive_nav1">
                                <div className="shadow-sm flex items-center p-[21px] aligin-middle h-[40px] rounded-lg responsive_overFlow" style={{ border: "1px solid #ff000047" }}>
                                    <input type="text" className='h-[25px] w-[100px] placeholder:bold  placeholder-gray-900 outline-none' placeholder='Location' />
                                    <span className='border-gray-300 border ml-4 h-[25px] mr-6'></span>
                                    <input type="text" className='h-[25px] w-[100px] outline-none placeholder:bold placeholder-gray-900' placeholder='Date / Time' />
                                    <span className='border-gray-300 border ml-4 h-[25px] mr-6'></span>
                                    <input type="text" className='h-[25px] w-[100px] text_thin placeholder:bold placeholder-gray-400 outline-none' placeholder='Add guests' />
                                    <button className="rounded-lg bg-red-500 text-white w-20 btn_res"><FontAwesomeIcon icon={faSearch} /></button>
                                </div>

                                <button className="shadow-sm rounded-lg relative show_text py-[12px] px-3" style={{ border: "1px solid #ff000047" }}>
                                    <img src='images/filter.png' alt='img' className='text-red-500 w-[16px] h-[16px] m-auto' />
                                </button>

                                <button className="rounded-lg bg-red-500  text-white w-24 h-9">Careers</button>
                                <span className='border-gray-300 border mt-1 h-[24px]'></span>
                                <div className=" shadow-sm flex items-center res_text px-6 aligin-middle h-[40px] rounded-lg hover:bg-red-200" style={{ border: "1px solid #ff000047" }}>
                                    <span className=' font-bold text-red-500 responsive_nav3'>Reztup</span><span className='ml-3 font-bold res_text_header'>Your Home</span>
                                </div>

                                <div className="flex items-center text-sm responsive_nav3 hover:shadow hover:rounded-lg hover:py-1 cursor-pointer">
                                    <img src="images/logo.png" alt="" width={20} className='mr-1  h-[30px] w-[30px] img_res' />
                                    <img src="images/menu.png" alt="" width={20} className=' rounded-full' />
                                </div>
                            </ul>
                        </div>
                    </div>

                </div>
                <hr className="border-y-2 w-[90%] m-auto border-slate-300" />
            </nav>

        </>
    )
}

export default Header