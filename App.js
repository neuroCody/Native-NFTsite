import React, { useState } from "react"

import * as Font from "expo-font"
import Main from "./components/MainComponent"

import { AppLoading } from "expo"

import { IMAGES } from "./arrays/images"
//REDUX IMPORTS
import { createStore } from "redux"
import galleryReducer from "./redux/GalleryReducer"
import { Provider } from "react-redux"

const initialState = {
  showModal: false,
  images: IMAGES,
}

const store = createStore(galleryReducer, initialState)

//Imported fonts
const getFonts = () => {
  return Font.loadAsync({
    // <p> elemnts
    "asap-regular": require("./assets/fonts/Asap-Regular.ttf"),

    // site headers
    "KoHo-regular": require("./assets/fonts/KoHo-Regular.ttf"),
    "KoHo-bold": require("./assets/fonts/KoHo-Bold.ttf"),

    // logo font
    "satisfy-regular": require("./assets/fonts/Satisfy-Regular.ttf"),
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    )
  }
}
