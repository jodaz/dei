import {
  Container,
  Typography,
  Box
} from '@material-ui/core'
// Custom components
import Copyright from '../components/Copyright'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dirección de Estadísticas e Informática
        </Typography>
        <Projects />
        <Copyright />
      </Box>
    </Container>
  )
}
