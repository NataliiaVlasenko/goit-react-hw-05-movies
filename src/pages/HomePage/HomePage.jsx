import {Container} from './HomePage.styled';
import {Movies} from '../../components/Movies/Movies';

const HomePage = () => {


return(
<Container>
<h2> Trending today</h2>
<Movies/>
</Container>
)
}

export default HomePage;