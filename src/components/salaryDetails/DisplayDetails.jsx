import {
    Box,
    FormControl,
    IconButton,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const DisplayDetails = ({
    setInvokeApi,
    yearFilter,
    setYearFilter,
    salaryDetails,
    setIsError,
    setShowAlert,
    setAlertMessage,
    setOpenPopUp,
    setModalTitle,
    setIncome,
    setSelectedDate,
    setMode
}) => {

    const yearFilterOptions = ['2026', '2025']

    const handleDelete = (event, data) => {
        fetch('http://localhost:8080/salaryBreakup/deleteDetail/' + data._id, {
            method: 'DELETE'
        })
            .then(async (res) => {
                const data = await res.json()
                setShowAlert(true)
                if (res.status === 200) {
                    setIsError(false)
                    setAlertMessage(data.message)
                    setInvokeApi(true)
                    return
                }
                throw new Error(data.message)
            })
            .catch(err => {
                setIsError(true)
                setAlertMessage(err)
            })
    }

    const handleEdit = (e, data) => {
        setOpenPopUp(true)
        setModalTitle('Edit Income Details')
        setMode('Edit')

        setIncome(data.income)
        setSelectedDate(data.date)
    }

    const getDate = (date) => {
        if (date === 'Total') {
            return date
        }
        return new Date(date).toLocaleString('en-US', {
            month: 'short',
            year: 'numeric'
        });
    }

    const handleYearFilterChange = (e) => {
        setYearFilter(e.target.value)
        setInvokeApi(true)
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow
                        sx={{
                            backgroundColor: '#1976d2',
                        }}
                    >
                        <TableCell>
                            <FormControl
                                size="small"
                                fullWidth
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'start',
                                    alignItems: 'center',
                                    borderRight: '1px solid black'
                                }}>
                                <Typography
                                    sx={{
                                        marginRight: '5px'
                                    }}
                                >
                                    Year:
                                </Typography>
                                <Select
                                    value={yearFilter}
                                    onChange={(e) => handleYearFilterChange(e)}
                                    displayEmpty
                                >
                                    {yearFilterOptions.map((year) => (
                                        <MenuItem key={year} value={year}>{year}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </TableCell>
                        <TableCell colSpan={6} align='center'>Salary Breakup Details</TableCell>
                    </TableRow>
                    <TableRow
                        sx={{
                            backgroundColor: 'lightBlue',
                        }}>
                        <TableCell>Date</TableCell>
                        <TableCell>Income</TableCell>
                        <TableCell align="right">Expenses</TableCell>
                        <TableCell align="right">Emergency Fund</TableCell>
                        <TableCell align="right">Savings</TableCell>
                        <TableCell
                            align="right"
                            sx={{
                                borderRight: '1px solid #ddd'
                            }}
                        >Vacation</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {salaryDetails?.map((data) => (
                        <TableRow
                            key={data._id}
                            sx={{
                                backgroundColor: data._id === 'Total' ? 'lightGreen' : null
                            }}
                        >
                            <TableCell component="th" scope="row">{getDate(data?.date)}</TableCell>
                            <TableCell component="th" scope="row">{data?.income}</TableCell>
                            <TableCell align="right">{data?.expenses}</TableCell>
                            <TableCell align="right">{data?.emergencyFund}</TableCell>
                            <TableCell align="right">{data?.savings}</TableCell>
                            <TableCell
                                align="right"
                                sx={{
                                    borderRight: '1px solid #ddd'
                                }}
                            >{data?.vacation}</TableCell>
                            <TableCell align="center">
                                {data?._id === 'Total' ? null : <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        gap: 1,
                                        backgroundColor: 'transparent',
                                    }}>
                                    <IconButton>
                                        <DeleteIcon onClick={(e) => handleDelete(e, data)} />
                                    </IconButton>
                                    <IconButton>
                                        <EditIcon onClick={(e) => handleEdit(e, data)} />
                                    </IconButton>
                                </Box>
                                }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DisplayDetails
