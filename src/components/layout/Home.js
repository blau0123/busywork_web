import React from 'react';
import {NavLink} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Image from '../../images/bw-plant-wallpaper.jpg';

const title_styles = {
    fontFamily:'Playfair Display, serif',
    fontSize: '90px',
    textAlign: 'center',
    color:'#F9F9F9',
}

const container_styles = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    height: '100vh',
    backgroundImage: 'url(' + Image + ')',
    backgroundPosition:'center',
    backgroundSize:'cover',
}

const list_item_styles = {
    textDecoration: 'none',
    color:'#F9F9F9',
    fontFamily:'Playfair Display, serifs',
    padding:'5px',
}

class Home extends React.Component{
    render(){
        return (
            <div className='container' style={container_styles}>
                <Grid container spacing={0} className="list-container" align="center" justify="center">
                    <Grid item xs={12}>
                        <h1 style={title_styles}>BUSYWORK</h1>
                    </Grid>
                    <Grid item xs={1}>
                        <Button size="large" variant="outlined" 
                            className="nav-button"
                            style={{textTransform:'none', borderColor:'white'}}>
                            <NavLink to="/signup" style={list_item_styles}>SIGN UP</NavLink>
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button size="large" variant="outlined" 
                            className="nav-button"
                            style={{textTransform:'none', borderColor:'white'}}>
                            <NavLink to="/signin" style={list_item_styles}>SIGN IN</NavLink>
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Home;