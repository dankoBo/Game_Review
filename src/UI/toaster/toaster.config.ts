import loginSuccessEmoji from '@/assets/images/emoji/login_success.png';
import logoutSuccessEmoji from '@/assets/images/emoji/logout_success.png';
import gameSuccessEmoji from '@/assets/images/emoji/game_success.png';
import gameDeletedEmoji from '@/assets/images/emoji/game_deleted.png';
import errorEmoji from '@/assets/images/emoji/error.png';

export const TOASTER_MESSAGES = {
    loginSuccess: {
        message: 'Привіт! Вхід виконано успішно.',
        emoji: loginSuccessEmoji,
        color: '#4caf50',
    },
    logoutSuccess: {
        message: 'До зустрічі! Побачимося пізніше.',
        emoji: logoutSuccessEmoji,
        color: '#4caf50',
    },
    gameAdded: {
        message: 'Гру успішно додано.',
        emoji: gameSuccessEmoji,
        color: '#4caf50',
    },
    gameEdited: {
        message: 'Дані гри успішно оновлено.',
        emoji: gameSuccessEmoji,
        color: '#4caf50',
    },
    gameDeleted: {
        message: 'Гру успішно видалено.',
        emoji: gameDeletedEmoji,
        color: '#4caf50',
    },
    errorMessage: {
        message: 'Ой! Щось пішло не так.',
        emoji: errorEmoji,
        color: '#dc3545',
    },
} as const;
