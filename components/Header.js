import {
  CardMedia,
  Box,
  makeStyles,
  Typography
} from '@material-ui/core'
// Custom components

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
})); 

export default function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.container} m={2} p={2}>
      <CardMedia
        component="img"
        height='140'
        width='240'
        image='/images/dei.webp'
      />
      <Typography variant="h4" component="h1" gutterBottom>
        Dirección de Estadísticas e Informática
      </Typography>
    </Box>
  )
}
