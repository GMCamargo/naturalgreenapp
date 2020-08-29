import React from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { View } from 'react-native'

const LeftActions = () => {
    return (
        
    )
}

export default props => (
    <Swipeable
        renderLeftActions={LeftActions}>
        <View>

        </View>
    </Swipeable>
)
