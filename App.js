  //Exercise 4 - Word Analyser
  //Name : Muhamad Nor Zakwan Bin Ismail
  //Matric Number : 1726259
  //Section : 2
  //Instructor : Dr Mohd Khairul Azmi Bin Hassan
  import { StatusBar } from 'expo-status-bar';

  import React, {Component} from 'react';
  import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
  
  export default class App extends Component { 
  
    constructor(){
      super(); 
        this.state = {
          text: '',
          charTotal: 0,
          consonants: 0,
          vowels: 0
      } 
    }

     //function for calculate total character
    charCalculator(){
      let string=this.state.text;
      var total_character = string.length;
      this.setState({
       charTotal: total_character
      });
    }

    //function for calculate vowel character
    vowelCalculator(){
      var vowelCharacters = 'aeiouAEIOU';
      var vowelCount = 0;
      var string = this.state.text;
      
      for(var x = 0; x < string.length ; x++)
      {
        if (vowelCharacters.indexOf(string[x]) !== -1)
        {
          vowelCount += 1;
        }
        this.setState({
           vowels: vowelCount
          });
      }
    
      }

      //function for calculate consonant character
      consonantCalculator(){
  
        var consonantCharacters = 'bcdfgjklmnpqstvxzhrwy';
        var consonantCount = 0;
        var string = this.state.text;
        
        for(var x = 0; x < string.length ; x++)
        {
          if (consonantCharacters.indexOf(string[x]) !== -1)
          {
            consonantCount += 1;
          }
      
          this.setState({
      
              consonants: consonantCount
      
              });
        }
      
        }

   
    render() {
      return (
        <View style={styles.container}>
        <Text style={styles.welcome}>Word Analyser</Text>
        <TextInput style={styles.label} onChangeText={(text) => this.setState({text})} placeholder='Type in any word'/>
        <Button color="#000000" onPress={() => {this.charCalculator(), this.consonantCalculator(), this.vowelCalculator()}} title='Analyse'/> 
            <Text style={styles.welcome}>Word: {this.state.text}</Text>
            <Text style={styles.welcome}>Total vowels: {this.state.vowels}</Text>
            <Text style={styles.welcome}>Total consonant: {this.state.consonants}</Text>
            <Text style={styles.welcome}>Total character: {this.state.charTotal}</Text>
            </View>
      );
     }
    }
    
    const styles = StyleSheet.create({
     container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center', 
      backgroundColor: '#A9A9A9',
      },
    
    header: {
      fontSize: 20,
      textAlign: 'center', 
      margin: 10,
    },
    label : {
      textAlign: 'center', 
      color: '#ffffff', 
      marginBottom: 5,
    },
    welcome: {
      fontSize:20,
      textAlign: 'center',
      margin: 10,
      color: '#ffffff'
    }
    })
    
     