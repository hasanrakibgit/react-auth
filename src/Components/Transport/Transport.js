import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 200,
        width: 300,
        
        
    },
});

const Transport = (props) => {
    const { transportType, image, } = props.transport;
    const classes = useStyles();
    return (
        <div>
            <Link to= {`/destination/by/${transportType}`}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title={transportType}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {transportType}
                        </Typography>

                    </CardContent>
                </CardActionArea>
                
            </Card>
            </Link>
        </div>
    );
};

export default Transport;