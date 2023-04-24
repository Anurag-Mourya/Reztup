import React from 'react'

const Footer = () => {
  return (
    <div className="fixed bottom-0 pt-2 w-full responsive_footer">
      <footer className=" flex justify-around items-center  flex-wrap ">

        <ul className='flex gap-3 flex-wrap justify-center items-center'>
          <li className='list-disc list-inside cursor-pointer'>Privicy</li>
          <li className='list-disc list-inside cursor-pointer'>Terms</li>
          <li className='list-disc list-inside cursor-pointer'>Company Deatail</li>
          <li className='list-disc list-inside cursor-pointer'>Support</li>
        </ul>

        <div className="">
          <p> @ Reztup 2023, All Rights Reserved. </p>
        </div>
        <div className="">
          <ul className='inline-block'>
            <li className='list-disc list-inside mr-4'>Social Media</li>
          </ul>

          <span><i className="fa-brands fa-linkedin mr-4 cursor-pointer"></i></span>
          <span><i className="fa-brands fa-facebook mr-4 cursor-pointer"></i></span>
          <span><i className="fa-brands fa-instagram mr-4 cursor-pointer"></i></span>
          <span><i className="fa-brands fa-twitter mr-4 cursor-pointer"></i></span>
        </div>
      </footer>
    </div>
  )
}

export default Footer;