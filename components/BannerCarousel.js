import React, { Component } from "react"
import { View, Image } from "react-native"

class BannerCarousel extends Component {
    isMounted = false

    constructor(props){
      super(props);
      this.state = {
        images: [
          require('./images/MostViewedBanner.png'),
          require('./images/NewestBanner.png'),
          require('./images/LowToHighBanner.png'),
          require('./images/HighToLowBanner.png'),
        ], 
        imageOpacity: 0,
        currentImage: 0,
      }
    }
  
    componentDidMount() {
      this.isMounted = true;
      this.imageFadeIn()
      this.switchImage()
    }
  
    imageFadeOut() {
      let imageOpacity = this.state.imageOpacity
      if(imageOpacity > 0) {
        this.setState(
          {
            imageOpacity: imageOpacity - 0.1
          },
          () => {
            setTimeout(() => {
              this.imageFadeOut();
            }, 10)
          }
        )
      }
    }
  
    imageFadeIn() {
      let imageOpacity = this.state.imageOpacity
      if(imageOpacity < 1) {
        this.setState(
          {
            imageOpacity: imageOpacity + 0.1,
          },
          () => {
            setTimeout(() => {
              this.imageFadeIn()
            }, 30)
          }
        )
      }
    }
  
    switchImage() {
      let { images } = this.state
      setInterval(() => { //6 second pause between images
        this.imageFadeOut();
        setTimeout(() => { // .5 sec delay after image fade out begins
          this.setState(
            {
              currentImage: this.state.currentImage < images.length-1 ? this.state.currentImage + 1 : 0,
              imageOpacity: 0,
            }, 
            () => {
              setTimeout(() => { // 0.1 sec delay before new image fade in
                this.imageFadeIn();
              }, 300)
            }
          )
        }, 500)
      }, 6000)
    }

    componentWillUnmount() {
      this.isMounted = false;
    }

    render() {
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            fluid
            source={ this.state.images[this.state.currentImage]}
            style={{flex: 1, opacity: this.state.imageOpacity, position:'relative'}}
          />
          
        </View>
      )
    }
  
}

export default BannerCarousel