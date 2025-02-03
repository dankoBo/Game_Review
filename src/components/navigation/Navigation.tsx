import { S_NavContainer, S_List, S_ListItem } from '@/components/navigation/Navigation.styled';

const Navigtion = () => {
    return (
        <S_NavContainer>
            <S_List>
                <S_ListItem>Список ігор</S_ListItem>
                <S_ListItem>Локалізації</S_ListItem>
            </S_List>
        </S_NavContainer>
        );
};

export default Navigtion;
