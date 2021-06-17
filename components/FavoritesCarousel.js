import React from "react"
import {
    View,
    Text,
    ScrollView,
    Animated,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    Dimensions,
} from "react-native"

const offset = 30
const itemWidth = (Dimensions.get("screen").width * (0.55)) - (offset *2)
const itemHeight= 200

const favorites = [
    { title: '', posterUrl: require("../../assets/images/lady-in-red.jpg")},
    { title: '', posterUrl: require("../../assets/images/geo-room.jpg")},
    { title: '', posterUrl: require("../../assets/images/priester-moon.jpg")},
    { title: '', posterUrl: require("../../assets/images/trash-tree.jpg")},
    { title: '', posterUrl: require("../../assets/images/vaporwave-in-space.jpg")},
    { title: '', posterUrl: require("../../assets/images/orange-blue-pour.jpg")},
    { title: '', posterUrl: require("../../assets/images/lady-in-red.jpg")},
    { title: '', posterUrl: require("../../assets/images/geo-room.jpg")},
    { title: '', posterUrl: require("../../assets/images/priester-moon.jpg")},
    { title: '', posterUrl: require("../../assets/images/trash-tree.jpg")},
    { title: '', posterUrl: require("../../assets/images/vaporwave-in-space.jpg")},
    { title: '', posterUrl: require("../../assets/images/orange-blue-pour.jpg")},
]

export default function FavoritesCarousel() {
    const scrollX = React.useRef(new Animated.Value(0)).current

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView
                horizontal={true}
                decelerationRate={"normal"}
                snapToInterval={itemWidth}
                bounces={false}
                style={styles.carouselView}
                showsHorizontalScrollIndicator={false}
                disableIntervalMomentum
                onScroll={Animated.event (
                    [{nativeEvent: { contentOffset: { x:scrollX } } }],
                    {useNativeDriver: false}
                )}
                scrollEventThrottle={12}
            >
                {favorites.map((item, index) => {
                    

                    return(
                        <Animated.View 
                            key={index} 
                            style={{
                                width: itemWidth,
                                height: itemHeight,
                                paddingLeft: 5,
                                paddingRight: 10,
                                marginLeft: index === 0 ? offset : undefined,
                                marginRight: index === favorites.length - 1 ? offset : undefined,
                                
                            }}
                        >
                            <ImageBackground 
                                source={item.posterUrl}
                                style={{
                                    flex:1,
                                    resizeMode: "cover",
                                    justifyContent: "center",
                                    
                                }}
                            />
                        </Animated.View>
                    )
                })}
            </ScrollView>
        </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: "#1E2E33",
    },
    carouselView:{
        marginTop:20,
        marginBottom: 20,
        marginLeft:5,
        paddingHorizontal: 0
    },
    
})