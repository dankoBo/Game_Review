import { Link, useLocation } from 'react-router-dom';
import {
    S_NavContainer,
    S_List,
    S_ListItem,
    S_Underline,
} from '@/components/navigation/Navigation.styled';

const Navigtion = () => {
    const location = useLocation();

    return (
        <S_NavContainer>
            <S_List>
                <S_ListItem>
                    <Link to="/">Список ігор</Link>
                    <S_Underline $isActive={location.pathname === '/'} />
                </S_ListItem>
                <S_ListItem>
                    <Link to="/localizations">Українізатори</Link>
                    <S_Underline
                        $isActive={location.pathname === '/localizations'}
                    />
                </S_ListItem>
            </S_List>
        </S_NavContainer>
    );
};

export default Navigtion;
