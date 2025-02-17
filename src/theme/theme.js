import { useColorScheme } from 'react-native';
import { lightColors, darkColors } from './colors';

export const useTheme = () => {
    const colorScheme = useColorScheme();
    const colors = colorScheme === 'dark' ? darkColors : lightColors;

    return { colors, colorScheme };
};
