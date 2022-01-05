import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Style.css'
import { useNavigate } from 'react-router-dom';
import {CreateCont} from './Info2';
import {useContext } from 'react'

export default function Students() {
  const [data] = useContext(CreateCont);
      const assign=useNavigate();
      const addstud=()=>{
          assign('/Info')
      }
     return (
    <div>
    <div>
  <button className='button' onClick={addstud}>Add Student</button>
     </div>
       <div>
   <h1 className='mainhead'>Students Data</h1>
   </div>
   <div className='table-body'>
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">age</TableCell>
            <TableCell align="right">course</TableCell>
            <TableCell align="right">batch</TableCell>
            <TableCell align="right">change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.Id}
              >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Age}</TableCell>
              <TableCell align="right">{row.Course}</TableCell>
              <TableCell align="right">{row.Batch}</TableCell>
              <TableCell align="right" ><h4 className="hover"   onClick={()=>assign(`/Info/${row.Id}`)} > <i>Edit</i> </h4></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );
}

