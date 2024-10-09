import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { handleBackButton } from '../utils';

function Heading({ title = 'Go Back' }: { title?: string }) {
    return (
        <View testID="heading">
            <TouchableOpacity testID="button" onPress={() => handleBackButton()} style={{ width: 'auto', paddingHorizontal: 16, paddingVertical: 8 }}>
                <Text style={{ fontSize: 24, fontWeight: '800' }}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Heading;
