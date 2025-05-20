import { styles } from '@/constants/Styles';
import React, { JSX } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface IButton {
  handleClick: () => void;
  children?: string;
  disabled?: boolean | null;
  size?: string;
  round?: string | null;
  customCss?: object | null;
  icon?: Element | null;
  enviando?: boolean | null;
  tipo?: string | null;
}

const Button = ({ children, handleClick, disabled = false, size = "m", round = "m", customCss = {}, icon = null, tipo = 'default', enviando = false }: IButton): JSX.Element => {
  const buttonSize = {
    s: { fontSize: 12, fontWeight: '500', padding: 2 },
    m: { fontSize: 14 },
    l: { fontSize: 16 },
  }

  const buttonStyle = {
    default: { ...styles.buttonBase, ...buttonSize[size], ...customCss },
    transparente: { ...styles.buttonTransparentBase, ...buttonSize[size], ...customCss },
    outline: { ...styles.buttonOutlineBase, ...buttonSize[size], ...customCss }
  }

  const buttonText = {
    ...styles.buttonTextBase,
    ...buttonSize[size],

  }


  return (
    <View>
      {disabled || enviando ?
        <View style={styles.buttonDisabled}>
          {icon &&
            <>{icon}</>
          }
          <Text style={buttonText}>{children}</Text>

        </View>
        :
        <TouchableOpacity
          onPress={handleClick}
          style={buttonStyle[tipo]}
          keyboardShouldPersistTaps={'always'}>
          {icon &&
            <>{icon}</>
          }

          <Text style={buttonText}>{children}</Text>

        </TouchableOpacity>
      }
    </View>
  );
};

export default Button;
