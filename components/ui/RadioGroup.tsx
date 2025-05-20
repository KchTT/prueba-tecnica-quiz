import React from 'react';
import { View } from 'react-native';
import Radio from './Radio';

function RadioGroup({
  param,
  index_option,
  index_question,
  selected,
  handleClick,
}: {
  param: string;
  index_option: number;
  index_question: number;
  selected: string|undefined;
  handleClick: (datos:any) => void;
}) {
  const quantity = parseInt(param.split("-")[3])+1;
  const handleClickRadio = (value: string) => {
    handleClick({index_question:index_question,index_option:index_option, value:value, type:'radio'});
  }
  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
      {Array.from({ length: quantity }, (v, i) => i).map((_, index) => {
        return (
          <Radio
            key={index}
            value={index.toString()}
            selected={selected}
            handleClick={handleClickRadio}
          />
        );
      })}
    </View>
  );
}

export default RadioGroup;