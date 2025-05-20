import { styles } from '@/constants/Styles';
import React from 'react';
import { Text } from 'react-native';

interface Props {
    children: string | React.ReactNode,
    customCss?: React.CSSProperties
}

const Title = ({ children, customCss = {} }: Props) => {
     const style: { [key: string]: string | number } = {
            ...styles.titleBase,
            ...customCss
        }
    return (
        <Text style={style}>{children}</Text>
    )
}

export default Title