import React from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select';

const Searchbox = () => {
    const options = [
        // {
        // "Status": [
            { value: 'All', label: 'All' },
            { value: 'Active', label: 'Active' },
            { value: 'Upcoming', label: 'Upcoming' },
            { value: 'Past', label: 'Past' },
    //     ]
    // },
    // {
    //     "Level": [
            { value: 'Easy', label: 'Easy' },
            { value: 'Medium', label: 'Medium' },
            { value: 'Hard', label: 'Hard' },
        // ]
    // }
];
    return (
        <>
            <div className='searchbg search px-5 '>
                <h1 className='txt py-5 my-5 text-center'>Explore Challenges</h1>
                <div className=' row px-5 mx-5'>
                    <div className="col mx-4 ">
                        <div className="form-outline">
                            <input type="search" id="form1" className="py-2 px-4 form-control" placeholder="🔍 Search" aria-label="Search" />
                        </div>
                    </div>
                    <div className="col col-lg-2">
                    <Select
                                name="filter"
                                isMulti
                                options={options}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searchbox