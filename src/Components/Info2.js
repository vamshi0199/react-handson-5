import React, { createContext, useState } from 'react'


export const CreateCont = createContext();
export const Studentprovide = (props) => {
const [data, setData] = useState([{

    
 "Id": "1",
 "Name": "Rajesh",
 "Age": "22",
 "Course": "MERN",
 "Batch": "aug"
    },
    {
 "Id": "2",
 "Name": "vamshi",
 "Age": "22",
 "Course": "MERN",
 "Batch": "sep"
    },
    {
 "Id": "3",
 "Name": "arun",
 "Age": "21",
 "Course": "MEAN",
 "Batch": "aug"
    },
    {
 "Id": "4",
 "Name": "ram",
 "Age": "23",
 "Course": "MERN",
 "Batch": "sep"
    },
    {
 "Id": "5",
 "Name": "hero",
 "Age": "24",
 "Course": "MERN",
 "Batch": "aug"
    },
    {
 "Id": "6",
 "Name": "zero",
 "Age": "24",
 "Course": "MERN",
 "Batch": "nov"

    }
    ])
    return (
    <CreateCont.Provider value={[data, setData]}>
         {props.children}
    </CreateCont.Provider>
    )
}
