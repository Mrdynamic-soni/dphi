import React from 'react'
import Navbar from '../Components/Navbar';
import { BiTimeFive } from 'react-icons/bi';
import { BsFillBarChartFill } from 'react-icons/bs'
import Leader from './Leader';
const Details = () => {
    return (
        <>
            <div>
                <div>
                    <Navbar />
                </div>
                <div className='bg px-5'>
                    <p className=' mx-5 btn my-5  btn-warning'> <BiTimeFive /> Starts on 17th Jun'22 09:00 PM (India Standard Time) </p>
                    <p className=' mx-5 detailtxt'> Data Sprint 72 - Butterfly Identification</p>
                    <p className=' mx-5 detailtxt2' > Identify the class to which each butterfly belongs to</p>
                    <p className=' mx-5 btn btn-light my-5'> <BsFillBarChartFill /> Easy</p>
                </div>
                <div>
                    <Leader />
                </div>
                <div className='px-5 py-5 overviewtext' >
                    <p className='text mx-5 py-3'>
                        Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.
                    </p>
                    <p className='text mx-5 py-3'>
                        An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.
                    </p>
                    <p className='text mx-5 py-3'>
                        Your Task is to build an Image Classification Model using CNN that classifies to which class of weather  each image belongs to.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Details