/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import { Platform, Text, View } from 'react-native'
import styled from 'styled-components'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
})

const App: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Welcome>Welcome to React Native!</Welcome>
      <Instructions>To get started, edit App.tsx</Instructions>
      <Instructions>{instructions}</Instructions>
    </Container>
  )
}

export default App

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`

const Welcome = styled(Text)`
  font-size: 20;
  text-align: center;
  margin: 10;
`

const Instructions = styled(Text)`
  text-align: center;
  color: #333333;
  margin-bottom: 5;
`
