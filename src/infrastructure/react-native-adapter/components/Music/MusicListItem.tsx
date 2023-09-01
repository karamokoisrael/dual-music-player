import { FontAwesome } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native";
import { List } from "react-native-paper";

interface Props {
  title: string;
  path: string;
  duration: string;
}
export default function MusicListItem(props: Props) {
  return (
    <List.Item
      title={props.title}
      description={props.duration}
      left={(props) => <FontAwesome name="music" size={30} {...props} />}
      right={(props) => (
        <TouchableHighlight>
          <FontAwesome name="ellipsis-v" size={28} {...props} />
        </TouchableHighlight>
      )}
    />
  );
}
