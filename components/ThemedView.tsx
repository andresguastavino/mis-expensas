import { View } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export default function ThemedView({ ...props }) {
    const backgroundColor = useThemeColor({}, 'background');
    
    return (
        <View 
            style={{ backgroundColor }}
            { ...props }
        />
    );
}