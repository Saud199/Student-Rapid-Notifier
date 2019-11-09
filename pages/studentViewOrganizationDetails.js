import React, {Component} from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text, List, ListItem, Thumbnail, Card, CardItem} from 'native-base';
import { withNavigation } from 'react-navigation';
import firebase from '../config/firebase.js'
import { connect } from 'react-redux';


class StudentViewOrganizationDetails extends Component {

    constructor() {
        super();

        this.state ={
          descriptionArray : []
        }
    
    }



  render() {
    const {favouritesArray} = this.state;
    return (

      <Container>

        <Header style={{backgroundColor:'#14c2e0'}}>
          <Left>
            <Button transparent onPress={()=> this.props.navigation.navigate('StudentViewOrganizations')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Stutech</Title>
          </Body>
          <Right />
        </Header>


        <Content padder style={{ padding: 7 }}>
                <Text style={{alignSelf:'center', color:'#14c2e0'}}>{this.props.moreDetails.orgName}</Text>
                <CardItem cardBody>
                    <Image source={{uri : this.props.moreDetails.logo}} style={{height: 200, width: null, flex: 1, resizeMode:'contain'}}/>
                </CardItem>

                <Text>{"\n"}</Text>

                <View style={{borderBottomColor:'black',borderBottomWidth:1}}></View>


                <Text>Website Link : {this.props.moreDetails.websiteLink}</Text>
                <Text>{"\n"}</Text>

                <Text>Organization Type : {this.props.moreDetails.type}</Text>
                <Text>{"\n"}</Text>

                <Text>Contact Number : {this.props.moreDetails.number}</Text>
                <Text>{"\n"}</Text>

                <Text>Email : {this.props.moreDetails.email}</Text>
                <Text>{"\n"}</Text>

                <Text>Address : {this.props.moreDetails.address}</Text>

                <View style={{borderBottomColor:'black',borderBottomWidth:1}}></View>

                <Text>Description :-</Text>
                <Text></Text>



        </Content>


      </Container>

    );
  }
  
}


function mapStateToProp(state) {
  return ({
    details: state.root.studentInfo ,
    accounttype : state.root.accountType,
    moreDetails : state.root.orgMoreInfo
  })
}
function mapDispatchToProp(dispatch) {
  return ({
      //  getUserinfo : (info)=>{ dispatch(SignupDetail(info))}
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(StudentViewOrganizationDetails);