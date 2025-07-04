import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between w-full px-15 ">
      <div className="w-[107px] h-[107px]">
        <img src="/Logo_Bleufoncé 1.png" alt="" />
      </div>
      <div className="w-150 flex flex-row  font-normal text-[#081356] justify-between  text-[25px] py-8">
        <a href="">À propos</a>
        <a href="">Services</a>
        <a href="">Tarifs</a>
        <a href="">Contact</a>
      </div>
    </div>
  )
}

export default Navbar