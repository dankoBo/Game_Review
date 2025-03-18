import { Link, useLocation } from 'react-router-dom';
import {
    S_NavigtionContainer,
    S_NavigtionList,
    S_NavigtionItem,
    S_NavigtionUnderline,
} from '@/components/navigation/Navigation.styled';

const Navigtion = () => {
    const location = useLocation();

    return (
        <S_NavigtionContainer>
            <S_NavigtionList>
                <S_NavigtionItem>
                    <Link to="/">Список ігор</Link>
                    <S_NavigtionUnderline $isActive={location.pathname === '/'} />
                </S_NavigtionItem>
                <S_NavigtionItem>
                    <Link to="/localizations">Українізатори</Link>
                    <S_NavigtionUnderline
                        $isActive={location.pathname === '/localizations'}
                    />
                </S_NavigtionItem>
            </S_NavigtionList>
        </S_NavigtionContainer>
    );
};

export default Navigtion;
