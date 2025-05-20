import { Platform, StyleSheet } from "react-native";
import { COLOR_BLANCO, COLOR_NEGRO_OPACITY, COLOR_PRINCIPAL, COLOR_SECUNDARIO, Colors } from "./Colors";
export const opacityOnTouch = 0.5;


type Sizes = {
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
};

export const sizes: Sizes = {
    xs: 6,
    s: 12,
    m: 20,
    l: 28,
    xl: 56,
};

export const styles = StyleSheet.create({
    safe: {
        marginTop: Platform.OS === 'android' ? 40 : 0,
        marginBottom: Platform.OS === 'android' ? 40 : 0,
        flex: 1,
        paddingHorizontal: Platform.OS === 'android' ? 5 : 0,
        marginHorizontal: Platform.OS === 'android' ? 15 : 20,
        backgroundColor:COLOR_BLANCO
    },
    
    alignCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    titleBase: {
        fontSize: 22,
        flexWrap: 'wrap',
        marginTop: sizes.s,
        color: COLOR_PRINCIPAL,
    },

    subtitleBase: {
        fontSize: 16,
        flexWrap: 'wrap',
        paddingBottom: sizes.xs,
        marginTop: sizes.s,
        color: COLOR_PRINCIPAL,
    },

    paragraphBase: {
        fontSize: 13,
        flexWrap: 'wrap',
        paddingBottom: sizes.xs,
        marginTop: sizes.s,
        color: Colors.light.text,
        lineHeight: 18
    },

    inputBase: {
        borderColor: COLOR_PRINCIPAL,
        borderWidth: 1,
        color: COLOR_PRINCIPAL,
        borderRadius: 5,
        padding: 10,
        backgroundColor:COLOR_BLANCO
    },
    buttonBase: {
        fontSize: 20,
        marginTop: 5,
        padding: 10,
        backgroundColor: COLOR_PRINCIPAL,
        borderRadius: 5,
    },
    buttonOffBase: {
        fontSize: 20,
        marginTop: 5,
        padding: 10,
        backgroundColor: COLOR_NEGRO_OPACITY,
        borderRadius: 5,
        borderColor: COLOR_SECUNDARIO,
        borderWidth: 2,
    },
    buttonDisabled: {
        fontSize: 16,
        marginTop: 5,
        padding: 10,
        backgroundColor: COLOR_NEGRO_OPACITY,
        borderColor: COLOR_BLANCO,
        borderWidth: 1,
        borderRadius: 5,
    },
    buttonTransparentBase: {
        fontSize: 20,
        marginTop: 5,
        padding: 10,
        backgroundColor: 'transparent',
        borderRadius: 5,
    },
    buttonOutlineBase: {
        fontSize: 20,
        marginTop: 5,
        padding: 10,
        backgroundColor: COLOR_NEGRO_OPACITY,
        borderRadius: 5,
        borderColor: COLOR_SECUNDARIO,
        borderWidth: 1,
    },
    buttonTextBase: {
        fontSize: 16,
        color: COLOR_BLANCO,
        textAlign: 'center',
        fontWeight: '700',
    },
    labelBase: {
        fontSize: 16,
        color: COLOR_PRINCIPAL,
        fontWeight: '700',
    },
    imageLogo: {
        width: 200,
        height: 80,
        //contentFit: 'contain'
        resizeMode: 'contain',
    },

    logoCont: {
        alignItems: 'center',
        marginBottom: 0,
    }
});