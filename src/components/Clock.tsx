import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

function Clock() {

    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
            };
            setCurrentTime(now.toLocaleTimeString([], options as any));
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <Text style={styles.clock}>-{currentTime}-</Text>
    );
}

export default Clock;



const styles = StyleSheet.create({
    clock: {
        color: 'white',
        fontSize: 40,
        fontWeight: '700',
        marginBottom: 100,
    },

});
