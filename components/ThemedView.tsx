import { StyleProp, View, ViewStyle, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
    type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
    stylesOverride?: StyleProp<ViewStyle>;
};

export default function ThemedView({ 
    stylesOverride = {},
    ...props
} : ThemedViewProps) {
    const backgroundColor = useThemeColor({}, 'background');
    
    return (
        <View 
            style={[
                { backgroundColor },
                stylesOverride
            ]}
            { ...props }
        />
    );
}