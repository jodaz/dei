import {
    Grid,
    Card,
    ButtonBase,
    CardActionArea,
    Typography,
    CardContent,
    CardMedia,
    makeStyles
} from '@material-ui/core'

const projects = [
    {
        name: 'Sauco',
        description: 'Sistema de Atención Único al Contribuyente',
    },
    {
        name: 'Sasi',
        description: 'Sistema de Atención Social Integral',
        media: '/images/sasi_logo.png',
        alt_media: 'Sasi Logo',
        media_title: 'Sasi'
    }
];

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function Projects() {
    const classes = useStyles();

    return (
        <Grid container spacing={4}>
            {projects.map((project, key) => 
                <Grid item xs={12} sm={4} key={key}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt={project.alt_media}
                                height="140"
                                image={project.media}
                                title={project.media_title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            )}
        </Grid>
    );
}