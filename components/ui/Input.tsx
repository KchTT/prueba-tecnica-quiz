import { styles } from '@/constants/Styles';
import { JSX } from 'react';
import {
  KeyboardType,
  TextInput,
  View,
} from 'react-native';
import Label from './Label';

interface IInput {
  campo: string;
  titulo: string;
  valor: string;
  placeholder?: string;
  teclado?: KeyboardType;
  secure?: boolean;
  lineas?: number;
  disabled?: boolean;
  customCss?:any;
  customContainerCss?:any;
  onChange: (campo: string, txt: string) => void;
}
const Input = ({
  campo,
  titulo,
  valor,
  placeholder="",
  teclado='default',
  secure = false,
  lineas = 1,
  disabled = false,
  customCss={},
  customContainerCss={},
  onChange,
}: IInput): JSX.Element => {

  return (
    <View style={customContainerCss}>
      {titulo !== '' &&   <Label etiqueta={titulo} />}
      <TextInput
        style={{...styles.inputBase,...customCss}}
        onChangeText={txt => disabled ?console.log(campo) :onChange(campo, txt)}
        value={valor ? valor : ''}
        placeholder={placeholder}
        placeholderTextColor="#ccc" 
        keyboardType={teclado}
        secureTextEntry={secure}
        numberOfLines={lineas}
        selectTextOnFocus={true}
        autoCapitalize={'none'}
      
      />
    </View>
  );
};

export default Input;
