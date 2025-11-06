import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ToastAndroid, Image,ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Alert } from 'react-native';


const InputBox=({label,onChangeText})=>{
    return(

        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth:1}} onChangeText={onChangeText}/>
        </View>
    );
}
const KPOPgroup=()=> {
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');

    const checkAnswers = () => {
            let score = 0;
            if (ans1 === 'Blackpink') score++;
            if (ans2 === 'Gidle') score++;
            if (ans3 === 'Babymonster') score++;
            const message = score === 3 ? 'Good job! ' : 'Continue to work harder ! ';
            Alert.alert('Result', `You got ${score} / 3 correct! \n${message}`);

    };
    return (
        <ScrollView>
        <View style={styles.container} >
            <Text></Text>
            <Text></Text>
            <View style={styles.header}>
                <Text style={styles.title}>Welcome to my KPOP Quiz</Text>
                <Text style={styles.paragraph}>Pick the Correct Group for each photos</Text>
            </View>

            <Image
                source={{
                    uri: 'https://s.yimg.com/uu/api/res/1.2/PC1rc29uzOZGeFKaN0hUig--~B/aD0xMzM0O3c9MjAwMDtzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en-US/homerun/people_218/19181cdd581ef6139e7f1cd6716607e9',
                }}
                style={{ width: 400, height: 350 }}

            />
            <Text style={styles.label}>What KPOP Group is this?</Text>
            <Picker selectedValue={ans1} onValueChange={(value) => setAns1(value)}>


            <Picker.Item label='Blackpink' value={'Blackpink'}/>
                <Picker.Item label='Twice' value={'Twice'}/>
            </Picker>
            <Image
                source={{
                    uri: 'https://th.bing.com/th/id/R.a24d2dcace6e9e395fd1a3b6c64835db?rik=zuXmWTQ6MGaI6A&riu=http%3a%2f%2fkoreacrate.com%2fcdn%2fshop%2farticles%2f231204_gidle_comeback.jpg%3fv%3d1701552923&ehk=Mxoph3EFOTLZ1GfrG0qn%2b2jbpgK8RlzAgvzhvv8sC%2fs%3d&risl=&pid=ImgRaw&r=0',
                }}
                style={{ width: 400, height: 350 }}
            />
            <Text style={styles.label}>What KPOP Group is this?</Text>
            <Picker selectedValue={ans2} onValueChange={(value) => setAns2(value)}>


            <Picker.Item label='Gidle' value={'Gidle'} onChangeText={(text) => KPOPgroup(text)}/>
                <Picker.Item label='Blackpink' value={'Blackpink'} onChangeText={(text) => KPOPgroup(text)}/>
                <Picker.Item label='Twice' value={'Twice'} onChangeText={(text) => KPOPgroup(text)}/>

            </Picker>
            <Image
                source={{
                    uri: 'https://www.allkpop.com/upload/2024/06/content/301109/web_data/allkpop_1719760702_cc98xzhizi9d1.jpg',
                }}
                style={{ width: 400, height: 350 }}
            />
            <Text style={styles.label}>What KPOP Group is this?</Text>
            <Picker selectedValue={ans3} onValueChange={(value) => setAns3(value)}>


            <Picker.Item label='Babymonster' value={'Babymonster'}/>
                <Picker.Item label='2NE1' value={'2NE1'}/>

            </Picker>


            {/*  <Text>User Name: </Text>*/}
            {/*<TextInput style={{borderWidth:1}}*/}
            {/*           onChangeText={(text)=> setName(text)}/>*/}
            {/*  /!*<Button*!/*/}
            {/*  /!*    title="Log in"*!/*/}
            {/*  /!*    onPress={() => Alert.alert("Welcome")}*!/*/}
            {/*/>*/}
            {/*  <Text>Password: </Text>*/}
            {/*  <TextInput style={{borderWidth:1}}*/}
            {/*             onChangeText={(text)=> setPw(text)}/>*/}



            <TouchableOpacity>
                <Button title="Submit Answer" onPress={checkAnswers} />
              </TouchableOpacity>

            {/*  <Text>{pw}</Text>*/}


        </View>
        </ScrollView>

    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'pink',
},
 title:{
        fontSize:26,
     color:'black',
     fontWeight:'bold',
     textAlign:'center',
 },
    paragraph:{
        fontSize:16,
        textAlign:'center',
    }

});
export default  KPOPgroup;


