import React from 'react';
import Home from './src/screen/Home';
import codePush from 'react-native-code-push';


function App() {
  return (
    <Home />
  );
}

const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START, installMode: codePush.InstallMode.ON_NEXT_RESUME, updateDialog: true }
export default codePush(codePushOptions)(App);

// appcenter codepush release-react -a Delanki/BlendBuddy -d Staging
// appcenter codepush release-react -a Delanki/BlendBuddy -d Production
// appcenter codepush release-react -a Delanki/BlendBuddy -d CodePushDeploymentKey