import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from "../../../constants/Colors";
import AuthHeader from "../Components/AuthHeader";
import AuthInput from "../Components/AuthInput";
import AuthAction from "../Components/AuthAction";
import AuthButton from "../Components/AuthButton";

export default function ForgotPassword() {
  return (
      <View style={styles.container}>
        <AuthHeader AuthHeaderTitle={{ title: 'ForgotPassword' }}/>
          <AuthInput inputTitle={{ title: 'Email' }}/>
          <AuthButton buttonTitle={{ title: 'Send' }} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background
  },
});
