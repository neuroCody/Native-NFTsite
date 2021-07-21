import { connect } from "react-redux"
import React, { useState } from "react"
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native"
import { Icon, Card, Button } from "react-native-elements"
import { ScrollView } from "react-native-gesture-handler"

//MOST VIEWED TAB
const MostViewed = (props) => {

  // show/hide modal Hook
  const[modalOpen, setModalOpen] = useState(false)
  // render modal card data Hook
  const[modalData, setModalData] = useState({})
  // changing favorite icon Hook
  const[favorite, setFavorite] = useState(false)

  // Function to toggle favorite icon
  const toggleFav = () => setFavorite(!favorite)

  const MostViewedArray = props.images.filter(({ views }) => views > 100000)
  const SortedViewArray = MostViewedArray.sort(function (a, b) {
    return b.views - a.views
  })

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#232323" }}>
      <View>
        {SortedViewArray.map((i) => {
          return (
            <View key={i.id}>
              <Card containerStyle={styles.cardContainer}>
              <TouchableOpacity
                  onPress={() => {
                    setModalOpen(true);
                    setModalData(i);
                  }}
                >
                    <Card.Image
                      style={styles.cardImg}
                      source={i.image}
                    ></Card.Image>
                </TouchableOpacity>
                <Text style={{ marginLeft: 10, marginTop: 10 }}>
                  <Text style={styles.cardTitle}>{i.title}</Text>
                  <Text style={styles.price}> Price: ${i.price}</Text>
                </Text>
                <View style={styles.line}></View>
                <View
                  style={{ marginTop: 5, marginLeft: 10, marginBottom: 10 }}
                >
                  <Text style={styles.artistHeader}>Artist</Text>
                  <Text style={styles.artistName}>{i.artist}</Text>
                </View>
              </Card>
              <View style={{ marginBottom: 50 }}></View>
            </View>
          )
        })}
      </View>
      <Modal
          animationType={"slide"}
          transparent={false}
          visible={modalOpen}
        >
          <View style={styles.modal}>
            <View style={{ padding: 10 }}>
              <Icon
                name='close'
                type='font-awesome'
                iconStyle={{
                  color: "#8B51F5",
                  marginLeft: "90%",
                }}
                size={35}
                onPress={() => setModalOpen(false)}
              />
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.modalTitle}>{modalData.title}</Text>
              <Icon
                name={'heart'}
                type='font-awesome'
                iconStyle={!favorite ?{
                  color: "#78797B",
                  marginRight: "30%",
                  marginTop: 14,
                } : {color: "#D7EB5A",
                  marginRight: "30%",
                  marginTop: 14}}
                size={25}
                onPress={toggleFav}
              />
            </View>
            <Card containerStyle={styles.cardContainer}>
              <Card.Image
                style={styles.cardImg}
                source={modalData.image}
              ></Card.Image>
              <Text style={{ marginLeft: 10, marginTop: 10 }}>
                <Text style={styles.modalArtist}>Artist: {modalData.artist}</Text>
              </Text>
              <View style={styles.line}></View>
              <View style={{ marginTop: 5, marginLeft: 10, marginBottom: 10 }}>
                <Text style={styles.modalHeader}>Current Price</Text>
                <Text style={styles.modalPrice}>${modalData.price}</Text>
              </View>
              <Button
                title={"Buy Now"}
                titleStyle={{ color: "#232323", fontSize: 20 }}
                buttonStyle={{
                  backgroundColor: "#D7EB5A",
                  marginTop: 15,
                  marginLeft: 25,
                  marginRight: 25,
                  marginBottom: 50,
                  padding: 15,
                  borderRadius: 17,
                }}
                onPress={() =>
                  Alert.alert(
                    "Connect Wallet",
                    "Please connect your ETH Wallet to continue",
                    [
                      {
                        text: "OK",
                        style: "cancel",
                      },
                    ],
                    { cancelable: true }
                  )
                }
              />
            </Card>
          </View>
        </Modal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 34,
    borderColor: "#D7EB5A",
    borderWidth: 1,
    borderRadius: 5,
    color: "#D7EB5A",
    backgroundColor: "#232323",
    paddingLeft: 10,
    margin: 3,
    fontFamily: "KoHo-regular",
  },
  cardContainer: {
    backgroundColor: "#48494B",
    display: "flex",
    borderColor: "#78797B",
    borderWidth: 3,
    borderRadius: 6,
    padding: 0,
  },
  cardImg: {
    width: "auto",
    height: 350,
  },
  cardTitle: {
    marginLeft: 10,
    fontFamily: "KoHo-bold",
    fontSize: 18,
    color: "#f2f2f2",
  },
  price: {
    fontFamily: "KoHo-regular",
    color: "#78797B",
    flexDirection: "row-reverse",
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: "#78797B",
    padding: 2,
    margin: 10,
  },
  artistHeader: {
    fontFamily: "KoHo-bold",
  },
  artistName: {
    fontFamily: "KoHo-regular",
  },
  viewsHeader: {
    fontFamily: "KoHo-bold",
    display: "flex",
    flexDirection: "row-reverse",
  },
  banner: {
    padding: 50,
  },
  bannerText: {
    fontSize: 50,
    fontFamily: "KoHo-bold",
    color: "#F2F2F2",
  },
  modal: {
    backgroundColor: "#232323",
    height: "100%",
  },
  modalTitle: {
    fontSize: 25,
    fontFamily: "KoHo-bold",
    color: "#F2F2F2",
    marginLeft: 15,
  },
  modalHeader: {
    fontFamily: "KoHo-bold",
    fontSize: 18,
    color: "#f2f2f2",
  },
  modalPrice: {
    fontSize: 30,
    fontFamily: "KoHo-bold",
    color: "#F2F2F2",
  },
})

const mapState = (state) => {
  return { images: state.images }
}

export default connect(mapState)(MostViewed)
