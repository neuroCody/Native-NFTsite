import React, { Component } from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import { Card } from 'react-native-elements';
import { IMAGES } from '../arrays/images';

class RenderNFT extends Component {

  toggleModal() {
    this.setState({showModal: !this.state.showModal});
}

  constructor(props){
    super(props);
    this.state= {
      showModal: false,
      id: IMAGES.id,
      title: IMAGES.title,
      image: IMAGES.image,
      price: IMAGES.price,
      views: IMAGES.views,
      date: IMAGES.date,
    }
  }


  render() {
    return(
      <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
      <Card containerStyle={styles.cardContainer}>
                <Card.Image
                  style={styles.cardImg}
                  source={this.state.image}
                ></Card.Image>
                <Text style={{ marginLeft: 10, marginTop: 10 }}>
                  <Text style={styles.cardTitle}>{this.state.title}</Text>
                  <Text style={styles.price}> Price: ${this.state.price}</Text>
                </Text>
                <View style={styles.line}></View>
                <View
                  style={{ marginTop: 5, marginLeft: 10, marginBottom: 10 }}
                >
                  <Text style={styles.artistHeader}>Artist</Text>
                  <Text style={styles.artistName}>{this.state.title}</Text>
                </View>
              </Card>
      </Modal>
    )
  }
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
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  banner: {
    padding: 50,
  },
  bannerText: {
    fontSize: 50,
    fontFamily: "KoHo-bold",
    color: "#F2F2F2",
  },
})
export default NFTDetail;