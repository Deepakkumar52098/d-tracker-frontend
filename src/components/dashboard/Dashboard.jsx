import { Grid } from '@mui/material'
import SalaryDetails from '../salaryDetails/SalaryDetails'

const Dashboard = () => {
  return (
    <Grid item container>
      <Grid item size={6}>
      <SalaryDetails/>
      </Grid>
    </Grid>
    
  )
}

export default Dashboard
