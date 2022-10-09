import React from 'react';
import img1 from '../assests/img1.png';
import Rectangle from '../assests/Rectangle.png';
import Navbar from './Navbar';
import Middlebar from './Middlebar';
import Whyparticipate from './Whyparticipate';
import Searchbox from './Searchbox';
import Challenges from './Challenges';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();
    const submit = (e) => {
        e.preventDefault();
        navigate("/Addhackathon")
    }
    return (
        <>
            <Navbar />
            <div>
                <div className='bg'>
                    <div className="row">
                        <div className="col px-5 py-5 flexbox-container">
                            <div>
                                <img className='Rectangle mx-5 my-5' height={150} width={15} src={Rectangle} alt="" />
                            </div>
                            <div>
                                <div className='my-5 '>
                                    <p className="hometext">
                                        Accelerate Innovation with Global AI Challenges
                                    </p>
                                </div>
                                <div >
                                    <p className='para'>
                                        AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.
                                    </p>
                                </div>
                                <div>
                                    <button className='btn btn-light btn-lg' onClick={(e) => submit(e)}> Create Challenge</button>
                                </div>
                            </div>
                        </div>
                        <div className="col mx-5 px-5">
                            <img className='mx-5 my-5 py-5 ' src={img1} alt="img1" />
                        </div>
                    </div>
                </div>
                <Middlebar />
                <Whyparticipate />
                <Searchbox />
                <Challenges />
            </div>
        </>
    )
}

export default Homepage;