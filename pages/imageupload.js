// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import RNFetchBlob from 'react-native-fetch-blob'
// import firebase from '../config/firebase.js';
// import ImagePicker from 'react-native-image-picker';
// export default class Gallery extends Component {
  
//     handleChoosePhoto = () => {
//         const {image} = this.state;
//           const options = {
//             noData: true,
//           };
//           ImagePicker.launchImageLibrary(options, response => {
//             if (response.uri) {
//               this.getSelectedImages('' , response) 
//             }
//           });
//       };
  

//   getSelectedImages = (selectedImages, currentImage) => {
    
//     const image = currentImage.uri
 
//     const Blob = RNFetchBlob.polyfill.Blob
//     const fs = RNFetchBlob.fs
//     window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
//     window.Blob = Blob
 
   
//     let uploadBlob = null
//     const imageRef = firebase.storage().ref('posts').child("test.jpg")
//     let mime = 'image/jpg'
//     fs.readFile(image, 'base64')
//       .then((data) => {
//         return Blob.build(data, { type: `${mime};BASE64` })
//     })
//     .then((blob) => {
//         uploadBlob = blob
//         return imageRef.put(blob, { contentType: mime })
//       })
//       .then(() => {
//         uploadBlob.close()
//         return imageRef.getDownloadURL()
//       })
//       .then((url) => {
//         // URL of the image uploaded on Firebase storage
//         console.log(url);
        
//       })
//       .catch((error) => {
//         console.log(error);
 
//       })  
 
//   }
//   render() {
 
//     return (
//       <View style={styles.gallery}>
//         <CameraRollPicker selected={[]} maximum={1} callback={this.getSelectedImages} />
//         <Text style={styles.welcome}>
//           Image Gallery
//         </Text>    

//         <Button transparent onPress={() => this.handleChoosePhoto()} block style={{ alignSelf:'center', marginTop: 10, marginBottom:20,color:'#000000'}}><Text>Choose Photo</Text></Button>

//       </View>
//     );
//   }
// }
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   gallery: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   }
// });