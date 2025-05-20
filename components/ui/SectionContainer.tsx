import { Colors } from '@/constants/Colors';
import { styles } from '@/constants/Styles';
import type { JSX, PropsWithChildren } from 'react';
import React from 'react';
import { SafeAreaView, ScrollView, useColorScheme } from 'react-native';



function SectionContainer({ children, scroll = false }: PropsWithChildren & { scroll?: boolean }): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.dark.background : Colors.light.background,
    };

    return (
        <>
            <SafeAreaView style={{...styles.safe, ...backgroundStyle}}>
                {scroll ?
                    <ScrollView style={backgroundStyle}>
                        {children}
                    </ScrollView>
                    :
                    <>
                        {children}
                    </>
                }
            </SafeAreaView>
        </>
    );
}

export default SectionContainer;