import React from 'react';
import { ScrollView, FlatList, ActivityIndicator, StyleSheet, TextInput, Dimensions, Text, View, Image } from 'react-native';
import Card from '../components/Card'
import { ListItem, SearchBar } from 'react-native-elements';
// import searchData from '../data/fake_data/searchData';

const { width: WIDTH } = Dimensions.get('window');

export default class SearchScreen extends React.Component {

  static navigationOptions = {
    header: null
  };

  constructor(props){
    super(props);

    this.state = {
      textInputValue: '',
      loading: false,
      data: [],
      error: null
    };
    this.arrayholder =[];
  }


componentDidMount(){

  this.makeRemoteRequest();

}


makeRemoteRequest = () => {

    const url = `http://www.json-generator.com/api/json/get/cpEwWskPPC?indent=2`;
    this.setState({ loading : true });

    fetch(url)
      .then(res=>res.json())
      .then(res => {

        this.setState({

          data: res.results,
          error: res.error || null,
          loading: false,

        });

        this.arrayholder = res.results;

      })
      
      .catch(error => {

        this.setState({ error, loading : false });

      });
  };



  searchFilterFunction = text => {

    const newData = this.arrayholder.filter(item => {

      const itemData = `${item.event_name.toUpperCase()} ${item.org_name.toUpperCase()} ${item.description.toUpperCase()}`;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;

    });

    this.setState({ data : newData });

  };

  renderHeader = () => {

    return(
      <View style={styles.container}>
      <TextInput style={styles.inputBar}
        placeholder="Search for events, organizations, or posts..."
        onChangeText = { text => this.searchFilterFunction(text) }
        autoCorrect = { false }
        />
        </View>
    );
  };
  

  render() {

    if(this.state.loading){

      return(

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>

      );

    }

    return (
      <View>

        <FlatList

          data={this.state.data}

          renderItem={({ item }) => (

            <ListItem style={styles.card}
            
              title={`${item.event_name}`}
              subtitle={item.org_name}
            />

          )}
          keyExtractor={item => item.address}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#f8f3e7',
    alignItems:'center',
    marginTop: 100
  },

  resultsContainer:{
    backgroundColor: '#f8f3e7',

    flex: 1,
    marginTop: 100
  },

  card: {
    backgroundColor: 'white',
    width: '100%',
    height: 100,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset:{
        width:3,
        height:3
    },
    marginBottom: 10,
    fontFamily: 'poppins',
    fontSize: 12,
    color: 'black',
    padding: 25
    
},

  cardText: {
    fontFamily: 'poppins',
    fontSize: 12,
    color: 'black'
},

subtitleText:{
  fontFamily: 'poppins',
    fontSize: 12,
    color: 'black'
  },

  inputBar: {
    width: 350,
    height: 45,
    borderRadius: 20,
    fontSize: 16,
    fontFamily: 'poppins',
    color: '#584421',
    backgroundColor: 'white',
    padding: 5,
    marginTop: 10,
    textAlignVertical: 'top'
  }
});
 