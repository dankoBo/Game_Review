import { S_Container } from './GamesCards.styled'
import GameCard from './game-card/GameCard'
import gamesData from '../../../data/GamesData.json'
import rdr from '../../../assets/images/logo/rdr-2.jpg'


const GamesCards = () => {
    return (
        <S_Container>
            {
                gamesData.games.map((game) => (
                    <GameCard
                        img={rdr}
                        title={game.title}
                        genre={game.genre}
                        review={game.review}
                    />
                ))
            }
        </S_Container>
    );
}
 
export default GamesCards;