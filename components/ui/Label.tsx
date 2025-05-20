import { styles } from '@/constants/Styles';
import { Text } from 'react-native';
interface ILabel {
  etiqueta: string;
}
const Label = ({etiqueta}:ILabel) => {
  return (
    <Text style={styles.labelBase}>{etiqueta}</Text>
  )
}

export default Label