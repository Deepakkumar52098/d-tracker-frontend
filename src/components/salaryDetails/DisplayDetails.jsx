import {
    Box,
    Button,
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
import { API_CONSTANTS } from '../api/API_CONSTANTS'
import { deleteSalaryDetails } from '../store/slices/salaryDetailsSlice'
import { setModalDetails } from '../store/slices/modalSlice'

const DisplayDetails = ({
    yearFilter,
    setYearFilter,
    salaryDetails,
    setIncome,
    setSelectedDate,
    dispatch,
    setInvokeApi
}) => {

    const yearFilterOptions = ['2026', '2025']

    const handleAddIncome = () => {
        dispatch(setModalDetails({ title: 'Add Income Details', openPopup: true, mode: 'Add' }))
    }

    const handleDelete = (event, data) => {
        dispatch(deleteSalaryDetails({
            method: API_CONSTANTS.DELETE_SALARY_DETAILS,
            body: {
                id: data._id
            }
        }))
        setInvokeApi(true)
    }

    const handleEdit = (e, data) => {
        dispatch(setModalDetails({
            title: 'Edit Income Details',
            openPopup: true,
            mode: 'Edit'
        }))
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
        const year = e.target.value
        const isCurrentYear = year === new Date().getFullYear().toString()
        const updatedDate = isCurrentYear ? new Date() : new Date(year)
        setYearFilter(year)
        setSelectedDate(updatedDate)
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
                        <TableCell colSpan={2} sx={{
                        }}>
                            <FormControl
                                size="small"
                                fullWidth
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'start',
                                    alignItems: 'center',
                                    borderRight: '1px solid #ddd'
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
                        <TableCell colSpan={4} align='center'>Salary Breakup Details</TableCell>
                        <TableCell sx={{ paddingLeft: 0 }} colSpan={2} align='center'>
                            <Box sx={{ borderLeft: '1px solid #ddd' }}>
                                <Button
                                    onClick={handleAddIncome}
                                    sx={{
                                        color: '#000',
                                        bgcolor: 'lightcyan',
                                    }}
                                >
                                    Add Income
                                </Button>
                            </Box>
                        </TableCell>
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
