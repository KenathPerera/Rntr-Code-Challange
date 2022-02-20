
import { makeStyles } from "@material-ui/styles";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    appBarContent: {
        backgroundColor: '#fff !important',
        color: '#000 !important',
        boxShadow: 'none !important'

    },
    toolbarContent: {
        justifyContent: 'center'
    },
    profilePic: {
        margin: '0vh',
        display: 'flex',
        alignContent: 'flex-end'
    },
    avatarText: {
        marginLeft: '3vh'
    },
    ideaBookDiv: {
        marginTop: '3vh'
    },
    ideaBooktext: {
        marginTop: '5vh'
    },
    listItemBg: {
        backgroundColor: '#e1e1e1 !important',
        marginTop: '2vh'
    }

}
);


function FindProfessionals() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.ideaBooktext}>
                <Grid container spacing={2}>
                    <Grid item xs={6} >
                        <Typography variant="h5" align='left'>
                            Find Professional
                        </Typography>
                    </Grid>
                    <Grid item xs={6} >
                        <Typography variant="h5" align='right'>
                            <Link to='/view'> See All </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={3} >
                    <Card sx={{ textAlign: 'left', height: '20vw' }}>
                        <CardMedia
                            component="img"
                            height="194"
                            src={require('../images/Home_r.png')}
                        />
                        <CardContent>
                            <Typography variant="body1" color="text.secondary" align='left'>
                                Home Renovating
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} >
                    <Card sx={{ textAlign: 'left', height: '20vw' }}>
                        <CardMedia
                            component="img"
                            height="194"
                            src={require('../images/kitchen_r.png')}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" align='left'>
                                Kitchen Renovating
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} >
                    <Card sx={{ textAlign: 'left', height: '20vw' }}>
                        <CardMedia
                            component="img"
                            height="194"
                            src={require('../images/home_ar.png')}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" align='left'>
                                Home Addition
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} >
                    <Card sx={{ textAlign: 'left', height: '20vw' }}>
                        <CardMedia
                            component="img"
                            height="194"
                            src={require('../images/home_i_d.png')}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" align='left'>
                                Home Interior Design
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );

}

export default FindProfessionals