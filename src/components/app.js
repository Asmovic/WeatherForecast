import React, { Component } from 'react';
import SearchBar from '../Containers/SearchBar';
import WeatherList from '../Containers/WeatherList';

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <WeatherList />
            </div>
        );
    }
}
