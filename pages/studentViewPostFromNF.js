import React, {Component} from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text, List, ListItem, Thumbnail, Card, CardItem} from 'native-base';
import { withNavigation } from 'react-navigation';
import firebase from '../config/firebase.js'
import { connect } from 'react-redux';


class StudentViewPostFromNF extends Component {

    constructor() {
        super();

        this.state ={
          postDescriptionArray : []
        }
    
    }

    // displayDescription() {
    //     const {descriptionArray} = this.state;

    //     // favouritesArray.push({name : 'SSUET' , image : require('../images/ssuet.png')});
    //     // favouritesArray.push({name : 'Oracle' , image : require('../images/oracle.png')});
    //     // favouritesArray.push({name : 'Decima' , image : require('../images/decima.png')});
    //     // favouritesArray.push({name : 'App Bakers' , image : require('../images/ssuet.png')});

    //     var data = this.props.postDetails;

    //     // firebase.database().ref(`Favourite/${data.rollNo}`).on("value", (snapshot)=> {
    //     //   if(snapshot.exists()){
    //     //    snapshot.forEach((childSnapshot)=> {
    //     //     var d = childSnapshot.val();
    //     //     var obj = {
    //     //     id : d.id ,
    //     //     logo : d.logo ,
    //     //     Jimg : d.Jimg ,
    //     //     orgName : d.orgName ,
    //     //     description : d.description ,
    //     //     date : d.date ,
    //     //     experience : d.experience,
    //     //     type : d.type ,
    //     //     cid : d.cid ,
    //     //     category : d.category ,
    //     //     subject : d.subject
    //     //    }
    //     //    favouritesArray.push(obj);
    //     //    this.setState({favouritesArray})
    //     //    })
    //     //   }
    //     //  })
    //     favouritesArray.push({name : 'App Bakers' , image : require('../images/ssuet.png')})
    // }

    // componentDidMount() {
    //   this.displayDescription();
    // }


  render() {
    const {postDescriptionArray} = this.state;
    return (

      <Container>

        <Header style={{backgroundColor:'#14c2e0'}}>
          <Left>
            <Button transparent onPress={()=> this.props.navigation.navigate('StudentNewsFeed')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Stutech</Title>
          </Body>
          <Right />
        </Header>


        <Content padder style={{ padding: 7 }}>
                <CardItem>
                    <Left>
                      <Thumbnail source={{uri : this.props.postDetails.logo}} />
                      <Body>
                        <Text>Ogranization Name goes here</Text>
                        <Text note>{this.props.postDetails.orgName}</Text>
                      </Body>
                    </Left>
                </CardItem>
                <Text style={{alignSelf:'center', color:'#14c2e0'}}>{this.props.postDetails.category}</Text>
                <CardItem cardBody>
                    <Image source={{uri : this.props.postDetails.Jimg}} style={{height: 200, width: null, flex: 1, resizeMode:'contain'}}/>
                </CardItem>

                <Text>{"\n"}</Text>

                <View style={{borderBottomColor:'black',borderBottomWidth:1}}></View>


                <Text style={{fontWeight:'bold'}}>Last Date : <Text style={{fontWeight:'normal'}}>{this.props.postDetails.date}</Text></Text>
                <Text>{"\n"}</Text>

                <Text style={{fontWeight:'bold'}}>Category : <Text style={{fontWeight:'normal'}}></Text></Text>
                <Text>{"\n"}</Text>

                <Text style={{fontWeight:'bold'}}>Event Type : <Text style={{fontWeight:'normal'}}>{this.props.postDetails.type}</Text></Text>
                <Text>{"\n"}</Text>

                <Text style={{fontWeight:'bold'}}>Work Experience : <Text style={{fontWeight:'normal'}}></Text></Text>

                <View style={{borderBottomColor:'black',borderBottomWidth:1}}></View>

                <Text style={{fontWeight:'bold'}}>Description :-</Text>
                <Text style={{fontWeight:'normal'}}>{this.props.postDetails.description}</Text>



        </Content>


      </Container>

    );
  }
  
}


function mapStateToProp(state) {
  return ({
    details: state.root.studentInfo ,
    accounttype : state.root.accountType,
    postDetails : state.root.postInfo
  })
}
function mapDispatchToProp(dispatch) {
  return ({
      //  getUserinfo : (info)=>{ dispatch(SignupDetail(info))}
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(StudentViewPostFromNF);
