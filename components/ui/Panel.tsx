import React from 'react';
import { View } from 'react-native';

interface Props {
    children: string | React.ReactNode,
    customCss?: React.CSSProperties
}

const Panel = ({ children, customCss = {} }: Props) => {
    const style: { [key: string]: string | number } = {
        padding: 10,
        backgroundColor: "#f3f8f9",
        borderRadius: 10,
        alignItems: "start",
        justifyContent: "flex-start",
        margin: 5,
        ...customCss
    }
    return (
        <View style={style}>{children}</View>
    )
}

export default Panel