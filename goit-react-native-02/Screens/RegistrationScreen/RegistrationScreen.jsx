import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const loadApplication = async () => {
  await Font.loadAsync({
    "DMMono-Regular": require("../../assets/fonts/DMMono-Regular.ttf"),
  });
};
const center = 2;
export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [inFocus, setInFocus] = useState(false);
  const [state, setState] = useState(initialState);
  const [iasReady, setIasReady] = useState(false);
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);

  console.log(Platform.OS);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      console.log("width", width);
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  if (!iasReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIasReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/images/photo-bg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 20 : 0,
              }}
            >
              {/* <View style={styles.avatar}></View> */}
              <Image
                source={require("../../assets/images/rectangle-1.png")}
                style={styles.addImg}
              />
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Регистрация</Text>
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  // textAlign={"center"}
                  placeholder="Логин"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.login}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}
                  // textAlign={"center"}
                  placeholder="Адрес электронной почты"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}
                  // textAlign={"center"}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.loginText}>Вже маєте аккаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    // justifyContent: "center",
    // alignItems: "center",
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "center",
    paddingTop: 92,
    paddingBottom: 78,
    paddingLeft: 16,
    paddingRight: 16,
    fontFamily: "DMMono-Regular",
  },
  input: {
    paddingLeft: 16,

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    borderRadius: 8,
    color: "#BDBDBD",
  },
  btn: {
    marginTop: 43,
    marginBottom: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    justifyContent: "center",
    alignItems: "center",

    fontSize: 16,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
    borderWidth: 1,
  },
  btnTitle: {
    fontFamily: "DMMono-Regular",
    fontSize: 16,

    color: "#FFFFFF",
  },
  loginText: {
    fontFamily: "DMMono-Regular",
    textAlign: "center",
    color: "#1B4371",
    fontSize: 16,
  },
  // avatar: {
  //   position: "absolute",
  //   top: -55,
  //   right: 140,
  //   backgroundColor: "#F6F6F6",
  //   width: 120,
  //   height: 120,
  //   borderRadius: 16,
  // },
  addImg: {
    position: "absolute",
    top: 25,
    right: 129,
  },
  header: {
    alignItems: "center",
    marginBottom: 33,
  },
  headerTitle: {
    fontSize: 30,
    color: "#212121;",
    fontFamily: "DMMono-Regular",
  },
});
