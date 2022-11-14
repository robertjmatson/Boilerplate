import React from 'react';

export default class connectionExample extends React.Component {
    componentDidMount() {
        const apiURL = 'http://127.0.0.1:8001/api/';
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
    render() {
        return <h1>hello</h1>;
    }
}
