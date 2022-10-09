import React from 'react'
import Navbar from '../Components/Navbar';
import Select from 'react-select';

const Addhackathon = () => {
    const leveltype = [
        { value: 1, label: 'Easy' },
        { value: 2, label: 'Medium' },
        { value: 3, label: 'Hard' }
    ]
    
    return (
        <>
            <div>
                <div><Navbar /></div>
                <div className='px-5 mx-5'>
                    <p className='challenge'>Challenge Details</p>
                </div>
                <div style={{ width: "800px" }} className='px-5 mx-5 my-5 '>
                    <form>
                        <div className="form-group my-4" style={{ width: "400px" }}>
                            <label className='my-2' for="challemgename">Challenege Name</label>
                            <input type="text" className="form-control" name="challemgename" id="challemgename" />
                        </div>
                        <div className="form-group my-4" style={{ width: "400px" }}>
                            <label className='my-2' for="startdate">Start Date</label>
                            <input type="date" className="form-control" name='startdate' placeholder='Start Date' />
                        </div>
                        <div className="form-group my-4" style={{ width: "400px" }}>
                            <label className='my-2' for="enddate">End Date</label>
                            <input type="date" className="form-control" name='enddate' placeholder='End Date' />
                        </div>

                        <div className="form-group my-4" >
                            <label className='my-2' for="description">Description</label>
                            <textarea type="text" className="form-control" name="description" id="description" rows="8"></textarea>
                        </div>
                        <div className="form-group my-4">
                            <p> Image</p>
                            {/* <button className=' btn btn-light px-5 text-center'> Upload <MdCloudUpload /> </button> */}
                            <input className="form-control" type="file" name="image" id="image" />
                        </div>
                        <div className="form-group my-4">
                            <p>Level Type</p>
                            <Select
                                defaultValue={[leveltype[0]]}
                                name="leveltypes"
                                options={leveltype}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
                        </div>
                    </form>
                    <button className='btn btn-success'> Create Challenge</button>
                </div>
            </div>
        </>
    )
}

export default Addhackathon;