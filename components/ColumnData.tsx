import { View, type ViewProps } from 'react-native';

export type ColumnDataProps = ViewProps & {
    size?: number;
}

export default function ColumnData({
    size = 1,
    ...props
}: ColumnDataProps) {
    return (
        <View
            style={{ flex: size }}
            { ...props }
        />
    );
}