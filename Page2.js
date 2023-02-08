import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Flex = ({ navigation, route }) => {
    return (
        <View
            style={[
                styles.container,
                {
                    // Try setting `flexDirection` to `"row"`.
                    flexDirection: 'column',
                },
            ]}>
            <View style={{ flex: 1, backgroundColor: 'red' }} />
            <View style={{ flex: 2, backgroundColor: 'darkorange' }} />
            <View style={{ flex: 3, backgroundColor: '#669900', alignItems:'center' }} >

                <Text style={{fontSize:50, color:'white', fontWeight:'bold'}}>Du lieu tu Page1:</Text>
                <Text style={{fontSize:30}}>{route.params.itemId}</Text>
                <Text style={{fontSize:30}}>{route.params.name}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default Flex;
// thu nghiem