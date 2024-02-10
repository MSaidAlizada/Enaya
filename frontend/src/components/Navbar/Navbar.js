import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material';
import {Link} from "react-router-dom";


const Navbar = () => {
    return ( 
        <div className="Navbar">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <Typography variant="h6"  component={Link} to="/" sx={{ flexGrow: 1, textDecoration: "none", textDecorationColor: "white", textDecorationStyle: "none", color: "white" }}>
                        Enaya
                    </Typography>
                    <Button color="inherit" component={Link} to="/login">Login</Button>
                    <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
     );
}
 
export default Navbar;