import { Alert, AlertTitle, IconButton, Snackbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

const CustomAlert = ({ title, message, isError}) => {
    const [open, setOpen] = useState(true)

    console.log(message)

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Snackbar
            open={open}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
        >
            <Alert
                severity={isError ? 'error': 'success'}
                sx={{ minWidth: 300 }}
                action={
                    <IconButton
                        size="small"
                        color="inherit"
                        onClick={handleClose}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }
            >
                <AlertTitle>{title}</AlertTitle>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default CustomAlert
