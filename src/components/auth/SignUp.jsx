import { Box, Button, InputLabel, TextField } from '@mui/material'
import { useState } from 'react'

const SignUp = ({currentIndex, handleButtonClick}) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [emailId, setEmailId] = useState('')

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
            {!currentIndex && <Box sx={{display:'flex', flexDirection:'column'}}>
                <InputLabel sx={{textAlign:'left'}}>User Name</InputLabel>
                <TextField sx={{ width: '75%' }} type="text" value={userName} onChange={(e) => setUserName(e.target.value)} id="outlined-basic" variant="outlined" />
            </Box>}
            <Box sx={{display:'flex', flexDirection:'column'}}>
                <InputLabel sx={{textAlign:'left'}}>EmailId</InputLabel>
                <TextField sx={{ width: '75%' }} type="text" value={emailId} onChange={(e) => setEmailId(e.target.value)} id="outlined-basic" variant="outlined" />
            </Box>
            <Box sx={{display:'flex', flexDirection:'column'}}>
                <InputLabel sx={{textAlign:'left'}}>Password</InputLabel>
                <TextField sx={{ width: '75%' }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="outlined-basic" variant="outlined" />
            </Box>
            <Box sx={{display:'flex', justifyContent:'flex-end'}}>
                <Button onClick={handleButtonClick} sx={{bgcolor: '#1976d2', margin: '10px', color: '#FFF'}}>
                    {currentIndex === 1 ? 'Login' : 'Sign Up'}
                </Button>
            </Box>
        </Box>
    )
}

export default SignUp
