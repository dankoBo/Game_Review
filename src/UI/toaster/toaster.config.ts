import loginSuccessEmoji from '@/assets/images/emoji/login_success.png';
import logoutSuccessEmoji from '@/assets/images/emoji/logout_success.png';
import gameSuccessEmoji from '@/assets/images/emoji/game_success.png';
import gameDeletedEmoji from '@/assets/images/emoji/game_deleted.png';
import errorEmoji from '@/assets/images/emoji/error.png';

export const TOASTER_MESSAGES = {
    loginSuccess: {
        message: 'Привіт! Вхід виконано успішно.',
        emoji: loginSuccessEmoji,
        color: '#00674F',
    },
    logoutSuccess: {
        message: 'До зустрічі! Побачимося пізніше.',
        emoji: logoutSuccessEmoji,
        color: '#00674F',
    },
    gameAdded: {
        message: 'Гру успішно додано.',
        emoji: gameSuccessEmoji,
        color: '#00674F',
    },
    gameEdited: {
        message: 'Дані гри успішно оновлено.',
        emoji: gameSuccessEmoji,
        color: '#00674F',
    },
    gameDeleted: {
        message: 'Гру успішно видалено.',
        emoji: gameDeletedEmoji,
        color: '#00674F',
    },
    errorMessage: {
        message: 'Ой! Щось пішло не так.',
        emoji: errorEmoji,
        color: '#e94560',
    },
} as const;
