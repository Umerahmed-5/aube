import React from 'react'

const Project = () => {
  return (
    <div className='mt-[300px] min-w-full h-[210vh]  container'>
        <div className="font-normal flex flex-col items-center text-[70px] text-[#081356] pt-20">
            À propos
        </div>
        <div className="flex flex-row justify-between items-center text-[25px] px-50 py-20">
            <span className='font-normal text-[20px] text-[#081356]'> Je m'appelle Servane, passionnée par l'harmonie entre le corps,<br></br> l’âme et l'esprit. Mon approche des massages repose sur<br></br> l'intuition et une solide expertise acquise à travers plusieurs <br></br>formations et expériences dans le domaine du bien-être. Chaque<br></br> séance est conçue pour favoriser votre alignement intérieur et<br></br> vous reconnecter avec vous-même.</span>
            <img  src="/WhatsApp Image 2024-09-18 at 18.58.41 1.png" alt="" className='' />
        </div>
        <div className="px-30 gap-5">
          <img src="/IMG_4029 1.png" alt="" />
          <img src="/WhatsApp Image 2024-07-27 at 15.02.20 1.png" alt="" className='my-10' />
        </div>
        <div className="flex flex-col pl-120 -mt-150 ">
          <span className='font-normal text-[20px] leading-[30px]  text-[#081356]'>

          Formée dans diverses techniques de massage telles que:<br></br> l'ayurveda, le kobido, le massage crânien, les points réflexes et <br></br>énergétique. Je combine mes compétences professionnelles avec <br></br>une profonde écoute du corps.<br></br>
          </span>
          <span className='py-10 font-normal text-[20px] leading-[30px]  text-[#081356]'>Je crois fermement que le bien-être passe par un équilibre subtil<br></br> entre le corps et l’esprit, et je m’efforce de guider chaque personne<br></br> vers cette stabilité. Au cœur de mes soins se trouve l'ancrage : <br></br>cette capacité à être pleinement présent dans son corps, à se sentir<br></br> stable et aligné. Mon objectif est de vous offrir un moment où vous<br></br> pouvez vous ressourcer, relâcher les tensions et vous recentrer<br></br> pour mieux appréhender votre quotidien.</span>
        </div>
    </div>
  )
}

export default Project