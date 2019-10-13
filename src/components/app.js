import React, { Component } from 'react';
import SearchBar from '../Containers/SearchBar';
import WeatherList from '../Containers/WeatherList';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1 style={styles.headerStyle}>Locate any City in Nigeria</h1>
                <SearchBar />
                <WeatherList />
            </div>
        );
    }
}

const styles = {
    headerStyle: {
        flex: 1,
        fontSize: 28,
        textAlign: 'center',
        marginTop: 15,
        fontWeight: 'bold'

        
    }
}