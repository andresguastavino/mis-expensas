import { StyleProp, StyleSheet, Text, TextStyle, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
    type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
    stylesOverride?: StyleProp<TextStyle>;
};

export default function ThemedText({
    type = 'default',
    stylesOverride = {},
    ...props 
} : ThemedTextProps) {
    const color = useThemeColor({}, 'text');
    
    return (
        <Text style={[
            { color },
            styles[type],
            stylesOverride,
        ]}
            { ...props }
        />
    );
}

const styles = StyleSheet.create({
    default: {
        fontSize: 16,
        lineHeight: 24,
    },
    defaultSemiBold: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
    },
    title: {
        fontSize: 54,
        fontWeight: 'bold',
        lineHeight: 54,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        lineHeight: 30,
        fontSize: 16,
        color: '#0a7ea4',
    },
});
