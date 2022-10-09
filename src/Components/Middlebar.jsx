import React from 'react';
import AI from '../assests/AI.png';
import people from '../assests/people.png';
import hostedchallenege from '../assests/hostedchallenege.png';
import line from '../assests/line.png';

const Middlebar = () => {
    return (
        <>
            <div className='middlebar px-5'>
                <div className="row py-5 px-5">
                    <div className="col mx-5 flexbox-container">
                        <div>
                            <img height={80} src={AI} alt="" />
                        </div>
                        <div className='px-3 py-2'>
                            <h4 className='txt'>100K+</h4>
                            <h6 className='txt'>AI model submission</h6>
                        </div>
                        <div className='mx-3 my-2'>
                            <img height={60} src={line} alt="" />
                        </div>
                    </div>
                    <div className="col mx-5 flexbox-container">
                        <div>
                            <img height={80} src={people} alt="" />
                        </div>
                        <div className='px-3 py-2'>
                            <h4 className='txt'>50K+</h4>
                            <h6 className='txt'>Data Scientist</h6>
                        </div>
                        <div className='mx-3 my-2'>
                            <img height={60} src={line} alt="" />
                        </div>
                    </div>
                    <div className="col mx-5 flexbox-container">
                        <div>
                            <img height={80} src={hostedchallenege} alt="" />
                        </div>
                        <div className='px-3 py-2'>
                            <h4 className='txt'>100+</h4>
                            <h6 className='txt'>AI chanllenges hosted</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Middlebar;