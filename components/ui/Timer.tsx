import { COLOR_PRINCIPAL } from "@/constants/Colors";
import { ClockFading } from "lucide-react-native";
import { View } from "react-native";
import useTimer from "../../hooks/useTimer";
import { formatTime } from "../../utils/";
import Subtitle from "./Subtitle";

const Timer = () => {
    const { minutes, remainingSeconds } = useTimer();
    return (
      <View
        style={{
           flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingEnd:10
        }}
      >
        <ClockFading
          size={20}
          color={COLOR_PRINCIPAL}
          style={{ marginRight: 10, marginTop: 5 }}
        />
        <Subtitle>
          {formatTime(minutes, remainingSeconds)}
        </Subtitle>
      </View>
    );
};

export default Timer;