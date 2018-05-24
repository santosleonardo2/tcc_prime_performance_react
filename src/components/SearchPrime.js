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
         const startTime = Date.now();
         const value = Number(this.state.value);

         // console.log(`${x} start time: ${startTime}`);

         /*
          * STUPID METHOD
          */
         let primeNumbers = [];
         let count = 0;
         for (let i = 2; i < Math.sqrt(value); i++) {
            count = 0;
            for (let j = 2; j < i; j++) {
               if (i % j === 0) {
                  count++;
                  break;
               }
            }

            if (count === 0) {
               primeNumbers.push(i);
            }
         }
         const endTime = Date.now();
         // console.log(`${x} end time: ${endTime}`);
         console.log(`${x} duration (ms): ${endTime - startTime}`);
         // console.log(primeNumbers);


         /*
          * MORE EFFICIENT METHOD
          */
         // let allNumbers = [];
         // let primes = [];
         //
         // allNumbers[0] = false;
         // allNumbers[1] = false;
         // for (let i = 2; i < value; i++) {
         //    allNumbers[i] = true;
         // }
         //
         // for (let i = 2; i < Math.sqrt(value); i++) {
         //    if (allNumbers[i]) {
         //       for (let j = i * i; j < value; j += i) {
         //          allNumbers[j] = false;
         //       }
         //    }
         // }
         //
         // for (let i = 2; i < value; i++) {
         //    if (allNumbers[i]) {
         //       primes.push(i);
         //    }
         // }
         //
         // const endTime2 = Date.now();
         // console.log(`End time: ${endTime2}`);
         // console.log(`Duration (ms): ${endTime2 - startTime}`);
         // console.log(primes);
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
