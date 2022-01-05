import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CreateCont } from './Info2'
import './Style.css'

export default function Info() {
    const [name, setName] = useState({
        Id: '',
        Name: '',
        Age: '',
        Course: '',
        Batch: ''
    });
    const { id } = useParams();
    const [data, setData] = useContext(CreateCont);
    useEffect(() => {
    data.filter((info) => info.Id === id).map((vall) => setName(vall))
    }, [data, id])
    const k = useNavigate();
    const first = (e) => {
    const sss = e.target.name;
    const sss1 = e.target.value;
    setName({ ...name, [sss]: sss1 })
    }
    const handle = (e) => {
 if (name.Name === '' || name.Age === '' || name.Batch === '' || name.Course === '') {
 alert("enter something")
}
else {
if (id !== undefined) {
setData((prev) => prev.map((nam) => (nam.Id === id) ? {
 'Id': id,
 "Name": name.Name,
 "Age": name.Age,
 "Course": name.Course,
 "Batch": name.Batch
 } : nam
 ))
 }
else {
 const newinfo = { ...name, Id: `${data.length + 1}` }
setData([...data, newinfo])
}
  }
k('/Student')
}
return (
<div className='data'>
<form >
<label className='one'><h3>NAME</h3></label>
<input id='name' type={'text'} onChange={first} name='Name' value={name.Name} /> <br></br>
<label className='two'><h3>AGE</h3></label>
<input id='age' type={'number'}  onChange={first} name='Age' value={name.Age} /> <br></br>
<label className='three'><h3>BATCH</h3></label>
<input id='batch' type={'text'}  onChange={first} name='Batch' value={name.Batch} /> <br></br>
<label className='four'><h3>COURSE</h3></label>
<input id='course' type={'text'}  onChange={first} name='Course' value={name.Course} /> <br></br>
<input type={'button'} className='submit' id='button'  value={id === undefined ? 'submit' : 'update'}onClick={handle} name='button' />
<input type={'button'} className='cancel' id='button' value={'cancel'} onClick={() => k('/Student')} name='button' />
 </form>
</div>
    )
}
