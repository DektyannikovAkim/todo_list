import { GestureResponderEvent } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Check } from "./style";

interface Props {
    selected: boolean,
    onPress: (event: GestureResponderEvent) => void,
    size?: number,
    color?: string
}

export const CheckBox = ({
  selected,
  onPress,
  size = 30,
  color = "#211f30",
  ...props
}: Props) => (
  <Check onPress={onPress} {...props}>
    <Icon
      size={size}
      color={color}
      name={selected ? "check-box" : "check-box-outline-blank"}
    />
  </Check>
);
