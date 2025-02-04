import { Link } from 'react-router-dom';
import { S_NavContainer, S_List, S_ListItem } from '@/components/navigation/Navigation.styled';

const Navigtion = () => {
    return (
        <S_NavContainer>
            <S_List>
                <S_ListItem>
                    <Link to="/">Список ігор</Link>
                </S_ListItem>
                <S_ListItem>
                    <Link to="/localizations">Локалізації</Link>
                </S_ListItem>
            </S_List>
        </S_NavContainer>
    );
};

export default Navigtion;
