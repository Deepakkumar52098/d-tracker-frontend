import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { Calculate, Settings, TrendingUp } from '@mui/icons-material';

const Sidebar = () => {

    return (
        <Box sx={{ overflow: 'auto' }}>
            <List>
                {['Settings'].map((title, index) => (
                    <ListItem key={title} disablePadding>
                        <ListItemButton >
                            <ListItemIcon>
                                {index % 2 === 0 ? <Settings /> : <TrendingUp />}
                            </ListItemIcon>
                            <ListItemText primary={title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Calculator'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <Calculate /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default Sidebar
