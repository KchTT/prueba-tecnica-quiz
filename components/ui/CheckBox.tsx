import { COLOR_GRAY, COLOR_PRINCIPAL } from '@/constants/Colors';
import { Check } from 'lucide-react-native';
import React, { JSX } from 'react';
import { TouchableOpacity } from 'react-native';

interface ICheckBox {
  checked: boolean | undefined;
  index_option: number;
  index_question: number;
  handleClick: (datos: any) => void;
}

const CheckBox = ({index_option,index_question,checked,handleClick}:ICheckBox):JSX.Element => {
    const style:{[key: string]: string | number} = {
          padding: 10,
          width: 20,
          height: 20,
          backgroundColor: checked ? COLOR_PRINCIPAL : COLOR_GRAY,
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
          margin: 5,
        
    }
    
    return (
      <TouchableOpacity onPress={(e) => handleClick({index_question:index_question,index_option:index_option, value:true, type:'checkbox'})} style={style}>
        {checked ? <Check size={14} color="#fff" /> : <></>}
      </TouchableOpacity>
    );
}

export default CheckBox;