import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useEffect, useState } from 'react'

const DisplayDetails = ({ showAddDetails, invokeApi, setInvokeApi }) => {
    const [salaryDetails, setSalaryDetails] = useState([])
    useEffect(() => {
        if (invokeApi) {
            fetch('http://localhost:8080/salaryBreakup/getDetails')
                .then(res => {
                    if (res.status === 200) {
                        return res.json()
                    }
                    throw new Error('Failed to fetch details')
                })
                .then(data => {
                    setSalaryDetails(data.breakupDetails)
                    setInvokeApi(false)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [showAddDetails, invokeApi, setInvokeApi])

    const handleDelete = (event, data) => {
        fetch('http://localhost:8080/salaryBreakup/deleteDetail/' + data._id, {
            method: 'DELETE'
        })
            .then(res => {
                if (res.status === 200) {
                    return true
                }
                throw new Error('Delete action failed')
            })
            .then(resData => {
                setInvokeApi(resData)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleEdit = () => {

    }

    const getDate = (date) => {
        return new Date(date).toLocaleString('en-US', {
            month: 'long',
            year: 'numeric'
        });
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Income</TableCell>
                        <TableCell align="right">Expenses</TableCell>
                        <TableCell align="right">Emergency Fund</TableCell>
                        <TableCell align="right">Savings</TableCell>
                        <TableCell align="right">Vacation</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {salaryDetails.map((data) => (
                        <TableRow
                            key={data._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{getDate(data?.date)}</TableCell>
                            <TableCell component="th" scope="row">{data?.income}</TableCell>
                            <TableCell align="right">{data?.expenses}</TableCell>
                            <TableCell align="right">{data?.emergencyFund}</TableCell>
                            <TableCell align="right">{data?.savings}</TableCell>
                            <TableCell align="right">{data?.vacation}</TableCell>
                            <TableCell align="right">
                                <IconButton>
                                    <DeleteIcon onClick={(e) => handleDelete(e, data)} />
                                    <EditIcon onClick={handleEdit} />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DisplayDetails
