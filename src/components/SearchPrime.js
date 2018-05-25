import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSession, Header, InputText, Button } from './common';

class SearchPrime extends Component {
   state = ({ numberOfPimes: 0, shouldDisplayResult: false, value: '', times: 30 });

   updateValue(newValue) {
      this.setState({ value: newValue });
   }

   calculatePrimeNumbers() {
      for (let x = 0; x < this.state.times; x++) {
         const startTime = performance.now();
         const value = Number(this.state.value);

         // console.log(`${x} start time: ${startTime}`);

         /*
          * STUPID METHOD
          */
         let primeNumbers = [];
         let count = 0;
         for (let i = 2; i <= value; i++) {
            count = 0;
            for (let j = 2; j < Math.ceil(Math.sqrt(i)); j++) {
               if (i % j === 0) {
                  count++;
                  break;
               }
            }

            if (count === 0) {
               primeNumbers.push(i);
            }
         }
         const endTime = performance.now();
         // console.log(`${x} end time: ${endTime}`);
         console.log(`${x} duration (ms): ${endTime - startTime}`);
         // console.log(primeNumbers);
      }

      // this.setState({ shouldDisplayResult: true });
   }

   shoudlDisplayFinalResult() {
      if (this.state.shouldDisplayResult) {
         return (
            <CardSession>
               <Text>`Prime numbers = ${this.state.numberOfPimes}`</Text>
            </CardSession>
         );
      }

      return;
   }

   render() {
      return (
         <View>
            <Header headerText='Prime Numbers' />

            <Card>
               <CardSession>
                  <InputText
                     label='Number'
                     placeholder='144'
                     value={this.state.value}
                     updateText={this.updateValue.bind(this)}
                     style={{ marginTop: '50' }}
                  />
               </CardSession>

               <CardSession>
                  <Button onPress={this.calculatePrimeNumbers.bind(this)}>
                     Calculate
                  </Button>
               </CardSession>

               { this.shoudlDisplayFinalResult() }
            </Card>
         </View>
      );
   }
}

export default SearchPrime;
