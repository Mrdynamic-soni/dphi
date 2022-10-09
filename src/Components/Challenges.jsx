import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import cardimg1 from '../assests/cardimg1.png';
import cardimg2 from '../assests/cardimg2.png';
import cardimg3 from '../assests/cardimg3.png';
import cardimg4 from '../assests/cardimg4.png';
import cardimg5 from '../assests/cardimg5.png';
import cardimg6 from '../assests/cardimg6.png';
import {useNavigate} from 'react-router-dom';

const Challenges = () => {
    const navigate = useNavigate();
    const submit=(e)=>{
        e.preventDefault();
        navigate("/Details")
    }
    return (
        <>
            <div className='py-5 px-5 challengebg'>
                <div className="row mx-3">
                    <div className="col my-5">
                        <div className="card rounded-4 text-center mx-4 cardhack" >
                            <img className="card-img-top" src={cardimg1} alt="Cardimg" />
                            <div className="card-body">
                                <p className='btn btn-warning text-center px-4'> Upcoming</p>
                                <h5 className="px-5 my-3 cardtxt">Data Science Bootcamp - Graded Datathon</h5>
                                <p className="txt-1">Starts in</p>

                                <div className='row mx-5'>
                                    <div className="col">
                                        <p className="txt-1"> 00 &nbsp;&nbsp;:</p>
                                        <p > Days </p>
                                    </div>
                                    <div className="col">
                                        <p className="txt-1"> 15&nbsp;&nbsp;  :</p>
                                        <p > Hours </p>
                                    </div>
                                    <div className="col">
                                        <p className="txt-1"> 22</p>
                                        <p > Mins </p>
                                    </div>

                                </div>
                                <button className='btn my-4 btn-success rounded-3' onClick={(e)=>submit(e)}> <FiCheckCircle /> Participate Now </button>
                            </div>
                        </div>
                    </div>
                    <div className="col my-5">
                    <div className="card rounded-4 text-center mx-4 cardhack" >
                            <img className="card-img-top" src={cardimg2} alt="Cardimg" />
                            <div className="card-body">
                                <p className='btn btn-warning text-center px-4'> Upcoming</p>
                                <h5 className="px-5 my-3 cardtxt">Data Sprint 72 - Butterfly Identification</h5>
                                <p className="txt-1">Starts in</p>

                                <div className='row mx-5'>
                                    <div className="col">
                                        <p className="txt-1"> 00 &nbsp;&nbsp;:</p>
                                        <p > Days </p>
                                    </div>
                                    <div className="col">
                                        <p className="txt-1"> 12&nbsp;&nbsp;  :</p>
                                        <p > Hours </p>
                                    </div>
                                    <div className="col">
                                        <p className="txt-1"> 34</p>
                                        <p > Mins </p>
                                    </div>

                                </div>
                                <button className='btn my-4 btn-success rounded-3' onClick={(e)=>submit(e)}> <FiCheckCircle /> Participate Now </button>
                            </div>
                        </div>
                    </div>
                    <div className="col my-5">
                    <div className="card rounded-4 text-center mx-4 cardhack" >
                            <img className="card-img-top" src={cardimg3} alt="Cardimg" />
                            <div className="card-body">
                                <p className='btn btn-success text-center px-4'> Active</p>
                                <h5 className="px-5 my-3 cardtxt">Data Sprint 71 - Weather Recognition</h5>
                                <p className="txt-1">Ends in</p>

                                <div className='row mx-5'>
                                    <div className="col">
                                        <p className="txt-1"> 01 &nbsp;&nbsp;:</p>
                                        <p > Days </p>
                                    </div>
                                    <div className="col">
                                        <p className="txt-1"> 17&nbsp;&nbsp;  :</p>
                                        <p > Hours </p>
                                    </div>
                                    <div className="col">
                                        <p className="txt-1"> 10</p>
                                        <p > Mins </p>
                                    </div>

                                </div>
                                <button className='btn my-4 btn-success rounded-3' onClick={(e)=>submit(e)}> <FiCheckCircle /> Participate Now </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mx-3">
                    <div className="col my-5">
                        <div className="card rounded-4 text-center mx-4 cardhack" >
                            <img className="card-img-top" src={cardimg4} alt="Cardimg" />
                            <div className="card-body">
                                <p className='btn btn-success text-center px-4'> Active</p>
                                <h5 className="px-5 my-3 cardtxt">Data Sprint 70-Airline Passenger Satisfaction</h5>
                                <p className="txt-1">Ends in</p>

                                <div className='row mx-5'>
                                    <div className="col">
                                        <p className="txt-1"> 00 &nbsp;&nbsp;:</p>
                                        <p > Days </p>
                                    </div>
                                    <div className="col">
                                        <p className="txt-1"> 11&nbsp;&nbsp;  :</p>
                                        <p > Hours </p>
                                    </div>
                                    <div className="col">
                                        <p className="txt-1"> 27</p>
                                        <p > Mins </p>
                                    </div>

                                </div>
                                <button className='btn my-4 btn-success rounded-3' onClick={(e)=>submit(e)}> <FiCheckCircle /> Participate Now </button>
                            </div>
                        </div>
                    </div>
                    <div className="col my-5">
                    <div className="card rounded-4 text-center mx-4 cardhack" >
                            <img className="card-img-top" src={cardimg5} alt="Cardimg" />
                            <div className="card-body">
                                <p className='btn btn-danger text-center px-4'> Past</p>
                                <h5 className="px-5 my-3 cardtxt">Engineering Graduates Employment Outcomes</h5>
                                <p className="txt-1 py-2">Ended on</p>
                                <p className='cardtxt my-4'> 16th May'22 09:00 PM</p>
                                <button className='btn my-4 btn-success rounded-3' onClick={(e)=>submit(e)}> <FiCheckCircle /> Participate Now </button>
                            </div>
                        </div>
                    </div>
                    <div className="col my-5">
                    <div className="card rounded-4 text-center mx-4 cardhack" >
                            <img className="card-img-top" src={cardimg6} alt="Cardimg" />
                            <div className="card-body">
                                <p className='btn btn-danger text-center px-4'> Past</p>
                                <h5 className="px-5 py-2 cardtxt">Travel Insurance Claim Prediction</h5>
                                <p className="txt-1 my-4">Ended on</p>
                                <div className="txt-1 my-4"> 16th May'22 09:00 PM</div>
                                <button className='btn my-4 btn-success rounded-3' onClick={(e)=>submit(e)}> <FiCheckCircle /> Participate Now </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Challenges