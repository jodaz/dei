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
        description: 'Plataforma de Atención Único al Contribuyente',
        href: 'http://10.42.0.1:5480',
        media: '/images/sauco.png',
        alt_media: 'Sauco Logo',
        media_title: 'Sauco',
    },
    {
        name: 'Recaudo',
        description: 'Sistema de Hacienda Municipal (2018)',
        media: '/images/recaudo.png',
        alt_media: 'Recaudo Logo',
        media_title: 'Recaudo',
        href: 'http://10.42.1.1'
    },
    {
        name: 'Sasi',
        description: 'Sistema de Atención Social Integral',
        media: '/images/sasi_logo.png',
        alt_media: 'Sasi Logo',
        media_title: 'Sasi',
      href: 'https://sasi.somoscarupano.com.ve'
    },
    {
        name: 'Somos Carúpano',
        description: 'Sitio web de la Alcaldía del Municipio Bermúdez',
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
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none'
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
                            <a href={project.href} className={classes.link}>
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
                            </CardContent>
                        </a>
                        </CardActionArea>
                    </Card>
                </Grid>
            )}
        </Grid>
    );
}
