import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

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

function IdeaBook() {
    const classes = useStyles();

    return (
        <div className={classes.ideaBookDiv}>
            <Divider />
            <Typography variant="h6" component="div" sx={{ mt: '3vh' }} align='left'>
                Ideabooks
            </Typography>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
            >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src={require('../images/laundry.png')} variant='square'>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Laundery and Muds" secondary="3 items" />
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar src={require('../images/kitchen.png')} variant='square'>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Kitchen" secondary="3 items" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src={require('../images/bedroom.png')} variant='square'>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Bedroom" secondary="10 items" />
                </ListItem>
            </List>
        </div>
    );
}

export default IdeaBook