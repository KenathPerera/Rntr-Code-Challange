

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardHeader, CardMedia, Container, Divider } from '@mui/material';
import { makeStyles } from "@material-ui/styles";

import Grid from '@material-ui/core/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import MainHeader from './MainHeader';
import IdeaBook from './IdeaBook';
import FindProfessionals from './FindProfessionals';
import LocalProfessionals from './LocalProfesssionals';
import { Link } from 'react-router-dom';




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


function Home2() {

    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <MainHeader />
            <Container sx={{ mt: '5vh' }}>
                <Grid container spacing={8}>
                    <Grid item xs={3} >

                        <div className={classes.profilePic}>
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 56, height: 56 }}
                            />
                            <div className={classes.avatarText}>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left'>
                                    Chami
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <Link to='/view'>View Profile   </Link>
                                </Typography>
                            </div>
                        </div>
                        <IdeaBook />

                    </Grid>
                    <Grid item xs={6} spacing={2}>
                        <Card sx={{ textAlign: 'left' }}>
                            <CardHeader
                                title="New Story in popular Huozz series"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                src={require('../images/bathroom.jpg')}
                            />
                            <CardContent>
                                <Typography variant="h4" color="text.secondary" align='left'>
                                    3D Dark
                                </Typography>
                                <Typography variant="body2" color="text.secondary" align='left'>
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                </Typography>
                            </CardContent>
                        </Card>
                        <FindProfessionals/>
                    </Grid>
                    <Grid item xs={3} spacing={2}>
                        <LocalProfessionals/>
                    </Grid>
                </Grid>
            </Container>


        </Box >


    );

}

export default Home2