import React, { useState } from 'react' 
import {GrClose} from 'react-icons/gr'
import Slider from '../components/Slider'

const photos = [
    'https://s3-mern-demo.s3.ap-south-1.amazonaws.com/projects/10.png', 
    'https://s3-mern-demo.s3.ap-south-1.amazonaws.com/projects/18.png', 
    'https://s3-mern-demo.s3.ap-south-1.amazonaws.com/projects/2.png', 
    'https://s3-mern-demo.s3.ap-south-1.amazonaws.com/projects/4.png', 
    'https://s3-mern-demo.s3.ap-south-1.amazonaws.com/projects/5.png', 
    'https://s3-mern-demo.s3.ap-south-1.amazonaws.com/projects/6.png', 
    'https://s3-mern-demo.s3.ap-south-1.amazonaws.com/projects/7.png', 
    'https://s3-mern-demo.s3.ap-south-1.amazonaws.com/projects/9.png'
]

const ProjectPage = () => {

    const [openSlider, setOpenSlider] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)

 
  return (
    <div className={`py-36  px-24 ${openSlider ? 'noscroll' : ''}`}>
        <h1 className='p-2 text-2xl font-semibold'>Name</h1> 
        <div className='pt-4   flex gap-10 justify-between'>
            <p className='w-7/12 px-2 shrink-0 text-sm text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quibusdam eos, quod dolor laudantium illum magni ipsa at harum repellat placeat optio beatae id pariatur deleniti. Perspiciatis dolor dolore, repellendus ipsa autem, ex expedita dolores consequuntur natus soluta repudiandae dicta saepe eum placeat error pariatur ad porro. Veniam, architecto vel.
            </p>
            <p className='w-full text-white flex [&>div]:gap-4   '>
                <div className='flex flex-col w-full'>
                    <div className=''>
                        <h4 htmlFor="location">Location</h4>
                        <span id='location'>Surat</span>
                    </div>
                    <div className=''>
                        <h4 htmlFor="location">Area</h4>
                        <span id='location'>1000 sqft</span>
                    </div>
                </div>
                <div className='flex   flex-col w-full'>
                    <div className=''>
                        <h4 htmlFor="location">Date of Completion</h4>
                        <span id='location'>Surat</span>
                    </div>
                    <div className=''>
                        <h4 htmlFor="location">Status</h4>
                        <span id='location'>Completed</span>
                    </div>
                </div>
            </p>
        </div>
        <div className='  pt-10 gallery'>
            {photos.map((x,i)=>(
                <img src={x} className='cursor-pointer hover:opacity-30' alt="" onClick={()=>{setOpenSlider(true);setSlideNumber(i)}}/>
            ))}
        </div>
        {
            openSlider && 
            <div className='fixed inset-0 z-20 relative text-black' >
                <div className='bg-white/90 w-screen h-screen fixed inset-0   overlay' onClick={()=>setOpenSlider(false)}>

                </div>
                <GrClose className='fixed right-20 top-20 cursor-pointer ' onClick={()=>setOpenSlider(false)}/>
                <Slider images={photos} number={slideNumber} />
            </div>
        }
         
    </div>
  )
}

export default ProjectPage