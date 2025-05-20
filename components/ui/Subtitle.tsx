import { styles } from '@/constants/Styles';
import React from 'react';
import { Text } from 'react-native';

interface Props {
    children: string | React.ReactNode,
    customCss?: React.CSSProperties
}

const Subtitle = ({ children, customCss = {} }: Props) => {
    const style: { [key: string]: string | number } = {
        ...styles.subtitleBase,
        ...customCss
    }
    return (
        <Text style={style}>{children}</Text>
    )
}

export default Subtitle