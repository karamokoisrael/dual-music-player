import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { ReactElement } from "react";
import { Appbar } from "react-native-paper";
type Props = BottomTabHeaderProps & {
  children?: ReactElement;
};
export default function NavigationBar(props: Props) {
  return (
    <Appbar.Header>
      <Appbar.Content title={props.options.title} />
      {props.children ? props.children : null}
    </Appbar.Header>
  );
}
