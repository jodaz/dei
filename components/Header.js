import {
  CardMedia,
  Box,
  makeStyles,
  useMediaQuery,
  Typography
} from '@material-ui/core'
// Custom components

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')] : {
      flexDirection: 'column'
    }
  },
  logo: {
    flex: '2',
    objectFit: 'cover'
  },
  description: {
    flex: '2 1 auto'
  }
})); 

export default function Header() {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Box className={classes.container} m={2} p={2}>
      <CardMedia
        component="img"
        height='140'
        width='240'
        image='/images/DTI.png'
        className={classes.logo}
        size='contain'
      />
      <div className={classes.description}>
        <Typography variant="h4" color="textSecondary" component="h1" gutterBottom>
          Dirección de Tecnología e Informática
        </Typography>
        <Typography variant="subtitle2" component="h3" color="textSecondary" gutterBottom>
          Sitio web interno
        </Typography>
      </div>
    </Box>
  )
}
