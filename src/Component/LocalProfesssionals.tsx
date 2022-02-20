import { makeStyles } from "@material-ui/styles";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
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


function LocalProfessionals() {

    const classes = useStyles();
    return (
        <div>
            <Typography variant="h6" component="div" sx={{ mt: '3vh' }} align='left'>
                Contact a Local Professional
            </Typography>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
            >
                <ListItem className={classes.listItemBg}>
                    <ListItemAvatar>
                        <Avatar src={require('../images/Home_r.png')} variant='square'>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Home Renovating" />
                </ListItem>

                <ListItem className={classes.listItemBg}>
                    <ListItemAvatar>
                        <Avatar src={require('../images/kitchen_r.png')} variant='square'>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Kitchen Renovating" />
                </ListItem>
                <ListItem className={classes.listItemBg}>
                    <ListItemAvatar>
                        <Avatar src={require('../images/home_i_d.png')} variant='square'>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Home Additions" />
                </ListItem>
                <ListItem className={classes.listItemBg}>
                    <ListItemAvatar>
                        <Avatar src={require('../images/home_ar.png')} variant='square'>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Interior Design" />
                </ListItem>
            </List>
            <Typography variant="h6" component="div" sx={{ mt: '3vh' }} >
            <Link to='/view'> View All Services </Link>
            </Typography>
        </div>
    );

}

export default LocalProfessionals