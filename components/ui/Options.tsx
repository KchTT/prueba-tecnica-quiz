import { IOption } from '@/types';
import React from 'react';
import { FlatList, View } from 'react-native';
import Option from './Option';

function Options({
  options,
  index_question,
  handleClick,
}: {
  options: IOption[];
  index_question: number;
  handleClick: (datos:any) => void;
}) {


  const Row = ({ option, index }: { option: IOption; index: number }) => {
    return (
      <View key={index}>
        <Option
          option={option}
          index_option={index}
          index_question={index_question}
          handleClick={handleClick}
        />
      </View>
    );
  };

  return (
    <FlatList
      scrollEnabled={false}
      data={options}
      renderItem={({ item, index }) => <Row option={item} index={index} />}
      keyExtractor={(option) => option.id.toString()}
    />
  );
}

export default Options;