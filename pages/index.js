import {
  Container,
  Typography,
  Box
} from '@material-ui/core'
// Custom components
import Copyright from '../components/Copyright'
import Header from '../components/Header'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <Container>
      <Box my={4}>
        <Header />
        <Projects />
        <Copyright />
      </Box>
    </Container>
  )
}
