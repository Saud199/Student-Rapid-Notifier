import React, {Component} from 'react';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text, List, ListItem, Thumbnail } from 'native-base';
import firebase from '../config/firebase.js';

class TeacherNotification extends Component {

    constructor() {
        super();

        this.state ={
          notificationsArray : []
        }
    
    }

    componentDidMount() {
      this.displayNotifications();
    }

    // displayNotifications() {
    //     const {notificationsArray} = this.state;
    //     notificationsArray.push({name : 'SSUET' , details : 'Seminar on AI', date : '21/9/19' , time: '10:00 AM' , image : require('../images/ssuet.png')});
    //     notificationsArray.push({name : 'Oracle' , details : 'Internships Available' , date : '18/9/19' , time: '03:00 PM', image : require('../images/oracle.png')});
    //     notificationsArray.push({name : 'Decima AI' , details : '2 Job Openings' , date : '4/9/19' , time: '05:00 PM', image : require('../images/decima.png')});
    // }

    displayNotifications() {

      const {notificationsArray} = this.state;

      firebase.database().ref(`/Notification`).on("value", (snapshot)=> {         
        snapshot.forEach((childSnapshot)=> {
            if(childSnapshot.val().to == 'Teacher'){
            var obj = {
                message : childSnapshot.val().message ,
                date : childSnapshot.val().date
             }
             notificationsArray.push(obj);
            this.setState({notificationsArray})
          }
        })
    })

    }


  render() {
    const {notificationsArray} = this.state;
    return (

      <Container>

        <Header style={{backgroundColor:'#14c2e0'}}>
          <Left>
            <Button transparent onPress={()=> this.props.navigation.navigate('TeacherNewsFeed')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Stutech</Title>
          </Body>
          <Right />
        </Header>


        <Content>


        { notificationsArray.map((val , ind) => {
            return(

            <List>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail square source={require('../images/profile_icon1.jpg')} />
                  </Left>
                  <Body>
                    <Text>Admin</Text>
                    <Text>Message : {val.message}</Text>
                  </Body>
                  <Right>
                  <Text note>{val.date}</Text>
                  </Right>
                </ListItem>
            </List>

            )
            })
        }


        </Content>


      </Container>

    );
  }
  
}


export default TeacherNotification;