import { Box, Button } from '@mui/material'

const SalaryDetailsActions = ({ handleUpdate }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                mt: 2
            }}>
            <Button
                sx={{
                    background: 'green',
                    color: 'white'
                }}
                onClick={handleUpdate}>
                Update
            </Button>
        </Box>
    )
}

export default SalaryDetailsActions
