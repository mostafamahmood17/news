import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        height: 370,
    },
    media: {
        height: 140,
    },

});

const cardStyle = {
    marginLeft: "105px",
    marginBottom: "20px",

    float: "left"

}
const News = (props) => {
    const { title, description, url, urlToImage } = props.article;
    const classes = useStyles();

    const articles = props.articles;

    return (
        <div style={cardStyle}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={urlToImage}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" color="primary" href={url}>
                        Details
                     </Button>
                </CardActions>
            </Card>

        </div>
    );
};


export default News;