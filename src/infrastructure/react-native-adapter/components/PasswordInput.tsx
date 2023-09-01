import { useState, forwardRef } from "react"
import { TextInput, TextInputProps } from "react-native-paper"
type Props = Omit<TextInputProps, "theme">
const PasswordInput = forwardRef((props: Props, ref?: any) => {
    const [passwordVisible, setPasswordVisibility] = useState(false);
    return (
        <TextInput ref={ref} secureTextEntry={!passwordVisible} {...props} right={
            <TextInput.Icon
                onPress={() => setPasswordVisibility(!passwordVisible)}
                icon={passwordVisible ? "eye-off" : "eye"}
            />} />
    )
})

export default PasswordInput;