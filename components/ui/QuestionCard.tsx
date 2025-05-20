import { COLOR_PRINCIPAL } from '@/constants/Colors';
import { IQuestion } from '@/types';
import React from 'react';
import { Text, View } from 'react-native';
import Options from './Options';
import Panel from './Panel';
import Paragraph from './Paragraph';
import Subtitle from './Subtitle';

function QuestionCard({
  question,
  handleClick,
  index_question,
}: {
  question: IQuestion;
  handleClick: (datos:any) => void;
  index_question: number;
}) {
  return (
    <Panel>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginTop: 2,
          borderStyle: "solid",
          borderBottomColor: COLOR_PRINCIPAL,
          borderBottomWidth: 1,
          paddingBottom: 10,
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            padding: 5,
            backgroundColor: "#fff",
            aspectRatio: 1 / 1,
            width: 30,
            height: 30,
            textAlign: "center",
            marginRight: 10,
            borderRadius: 5,
            color: COLOR_PRINCIPAL,
          }}
        >
          {index_question + 1}
        </Text>
        <Subtitle customCss={{ marginTop: 5, width: "90%" }}>
          {question.title}
        </Subtitle>
      </View>
      <Paragraph customCss={{ marginTop: 5, marginBottom: 5 }}>
        {question.description}
      </Paragraph>
      <Options
        options={question.questions}
        index_question={index_question}
        handleClick={handleClick}
      />
    </Panel>
  );
}

export default QuestionCard;