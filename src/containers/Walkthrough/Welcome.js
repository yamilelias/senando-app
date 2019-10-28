import React, {Component} from 'react';
import { StyleSheet, View, StatusBar, AsyncStorage } from 'react-native';

import WorkThrough from 'WorkThrough';
import {icons} from '@assets';

// example data
const flowData = {
    bgColor: "#788eec", 
    fgColor: "white", 
    screens:
    [
        {icon: "ok.png", title: "Señando", description: "¡Bienvenido a tu nuevo compañero para el uso de Lengua de Señas Mexicana"},
        {icon: "reading.png", title: "Aprende", description: "Los videos son grabados por un Instituto dedicado a promover el aprendizaje de esta lengua."},
        {icon: "support.png", title: "Apoya", description: "¡Apóyanos en esta causa si te gusta nuestro trabajo!"},
    ]
}

export default class TestPage extends Component {
    componentDidMount(){
        StatusBar.setHidden(true);
        setTimeout(() => {
            this.props.navigation.navigate('loginScreen');
        }, 1000);
    }

    _onWorkFlowFinished = () => {
        this.props.navigation.navigate('App');
    }
    render() {
        return (
            <View style={styles.container}>
                <WorkThrough
                    iconpackage = {icons}
                    data={flowData}
                    onFinished = {this._onWorkFlowFinished}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    }
});
