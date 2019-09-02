import React from 'react';
import {NavLink} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Image from '../../images/bw-plant-wallpaper.jpg';
import {Spring} from 'react-spring/renderprops';

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
    width: '100vw',
    backgroundImage: 'url(' + Image + ')',
    backgroundPosition:'center',
    backgroundSize:'cover',
    overflow:'hidden',
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
                <Spring from={{opacity:0, marginTop:400}} to={{opacity:1, marginTop:0}}
                    config={{duration:1000}}>
                        {props => (
                            <div style={props}>
                                <Grid container spacing={1} className="list-container" align="center" justify="center">
                                    <Grid item xs={12} style={{maxHeight:'50%'}}>
                                        <h1 style={title_styles}>BUSYWORK</h1>
                                    </Grid>
                                    <Grid item align='center' xs={12} md={3}>
                                        <Button size="large" variant="outlined" 
                                            className="nav-button"
                                            style={{textTransform:'none', borderColor:'white', minWidth:150}}>
                                            <NavLink to="/signup" style={list_item_styles}>SIGN UP</NavLink>
                                        </Button>
                                    </Grid>
                                    <Grid item align='center' xs={12} md={3}>
                                        <Button size="large" variant="outlined" 
                                            className="nav-button"
                                            style={{textTransform:'none', borderColor:'white', minWidth:150}}>
                                            <NavLink to="/signin" style={list_item_styles}>SIGN IN</NavLink>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        )}
                </Spring>
            </div>
        )
    }
}

export default Home;