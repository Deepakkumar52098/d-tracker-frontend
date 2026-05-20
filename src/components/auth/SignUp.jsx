import { Box, Button, InputLabel, TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchLogin, fetchSignUp } from '../store/slices/authSlice'
import { API_CONSTANTS } from '../api/API_CONSTANTS'

const SignUp = ({ currentIndex }) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [emailId, setEmailId] = useState('')

    const dispatch = useDispatch()

    const handleButtonClick = () => {
        // value 1 is Login & value 0 is Signup
        if (currentIndex) {
            dispatch(fetchLogin({
                method: API_CONSTANTS.LOGIN,
                body: {
                    emailId,
                    password
                }
            }))
        } else {
            dispatch(fetchSignUp({
                method: API_CONSTANTS.SIGN_UP,
                body: {
                    userName,
                    emailId,
                    password
                }
            }))
        }

    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {!currentIndex && <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <InputLabel sx={{ textAlign: 'left' }}>User Name</InputLabel>
                <TextField sx={{ width: '75%' }} type="text" value={userName} onChange={(e) => setUserName(e.target.value)} id="outlined-basic" variant="outlined" />
            </Box>}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <InputLabel sx={{ textAlign: 'left' }}>EmailId</InputLabel>
                <TextField sx={{ width: '75%' }} type="text" value={emailId} onChange={(e) => setEmailId(e.target.value)} id="outlined-basic" variant="outlined" />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <InputLabel sx={{ textAlign: 'left' }}>Password</InputLabel>
                <TextField sx={{ width: '75%' }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="outlined-basic" variant="outlined" />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={handleButtonClick} sx={{ bgcolor: '#1976d2', margin: '10px', color: '#FFF' }}>
                    {currentIndex === 1 ? 'Login' : 'Sign Up'}
                </Button>
            </Box>
        </Box>
    )
}

export default SignUp
