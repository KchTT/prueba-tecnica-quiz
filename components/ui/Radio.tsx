import { COLOR_GRAY, COLOR_PRINCIPAL } from '@/constants/Colors';
import React, { JSX } from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface IRadio {
  selected: string | undefined;
  value: string;
  handleClick: (datos: any) => void;
}

const Radio = ({ value, selected, handleClick }: IRadio): JSX.Element => {
  const isSelected = value === selected;
  const style: { [key: string]: string | number } = {
    padding: 10,
    width: 20,
    height: 20,
    backgroundColor: isSelected ? COLOR_PRINCIPAL : COLOR_GRAY,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginEnd: 5,

  }
  const style_dot: { [key: string]: string | number } = {
    color: isSelected ? COLOR_GRAY : COLOR_PRINCIPAL,
     width: 20,
    height: 20,
    //margin: 5,
    textAlign:"center",
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 2,
  }

  return (
    <TouchableOpacity onPress={(e) => handleClick(value)} style={style}>
      <Text style={style_dot}>
        {value}
      </Text>
    </TouchableOpacity>
  );
}

export default Radio;