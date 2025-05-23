import { TOASTER_MESSAGES } from '@/UI/toaster/toaster.config';
import {
    S_ToasterWrapper,
    S_ToasterContainer,
    S_ToasterEmoji,
    S_ToasterMessage,
} from './Toaster.styled';

import { useToaster } from '@/store/toaster.store';

type ToasterMessageType = keyof typeof TOASTER_MESSAGES;
type ToasterProps = {
    type: ToasterMessageType;
};

const Toaster: React.FC<ToasterProps> = () => {
    const { toasterType } = useToaster();
    const { message, emoji, color } = TOASTER_MESSAGES[toasterType] || {};

    return (
        <S_ToasterWrapper>
            <S_ToasterContainer color={color}>
                <div>
                    <S_ToasterEmoji src={emoji} alt="toaster emoji" />
                </div>
                <S_ToasterMessage>{message}</S_ToasterMessage>
            </S_ToasterContainer>
        </S_ToasterWrapper>
    );
};

export default Toaster;
