import React, {Component} from 'react';
import {Board} from 'react-trello';
import data from "./data.json";
import PropTypes from 'prop-types';

class Trello extends Component {

    render() {
        return (
            <div>
                <Board data={data} draggable/>
            </div>
        )
    }
}

export default Trello