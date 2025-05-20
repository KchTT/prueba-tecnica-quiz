import { IOption } from '@/types';
import React from 'react';
import { View } from 'react-native';
import CheckBox from './CheckBox';
import Paragraph from './Paragraph';
import RadioGroup from './RadioGroup';

interface Props {
    option: IOption;
    handleClick: (datos: any) => void;
    customCss?: React.CSSProperties;
    index_option: number;
    index_question: number;
    //selected: string;
}
//selected,
const Option = ({ option, handleClick, index_option, index_question, customCss = {} }: Props) => {
    const isRadio = option.answerType.includes("radio");
    const style: { [key: string]: string | number } = {
        padding: 0,
        //backgroundColor: Colors.dark.background,
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        margin: 5,
        ...customCss
    }

    return (
        <View style={style}>
            <View>
                {isRadio ? (
                    <RadioGroup
                        index_option={index_option}
                        index_question={index_question}
                        selected={option.selected}
                        param={option.answerType}
                        handleClick={handleClick}
                    />
                ) : (
                    <CheckBox
                        index_option={index_option}
                        index_question={index_question}
                        checked={option.checked}
                        handleClick={handleClick}
                    />
                )}
            </View>
            <Paragraph customCss={{ color: "black", marginTop: isRadio ?0 :5, width: isRadio ? "70%" : "90%" }}>
                {option.text}
            </Paragraph>
        </View>
    );
}

export default Option