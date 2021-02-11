import {
    Grid,
    Card,
    Button,
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
        href: 'http://192.168.11.3:5480'
    },
    {
        name: 'Recaudo',
        description: 'Sistema de Hacienda Municipal (2018)',
        media: '/images/recaudo.png',
        alt_media: 'Recaudo Logo',
        media_title: 'Recaudo',
        href: 'http://192.168.11.2'
    },
    {
        name: 'Sasi',
        description: 'Sistema de Atención Social Integral',
        media: '/images/sasi_logo.png',
        alt_media: 'Sasi Logo',
        media_title: 'Sasi',
        href: 'http://192.168.11.3:5451'
    },
    {
        name: 'Somos Carúpano',
        description: 'Alcaldía Bolivariana del Municipio Bermúdez',
        media: '/images/somoscarupano.png',
        alt_media: 'Somos_carupano',
        media_title: 'Somos_carupano',
        href: 'https://somoscarupano.com.ve'
    }
];

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    container: {
        display: 'flex',
        padding: '1em',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    content: {
        marginBottom: '15px'
    }
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
                            <CardContent className={classes.container}>
                                <div className={classes.content}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {project.description}
                                    </Typography>
                                </div>
                                <Button variant="contained" color="primary" href={project.href}>Ingresar</Button>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            )}
        </Grid>
    );
}