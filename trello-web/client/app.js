import React, {Component} from "react";
import Layout from "./components/layout";
import Trello from "./components/trello/trello";




const style = {
    div: {
        flexGrow: 1,
        paddingTop: 45,
        overflow: 'auto'
    }
}


export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Layout/>
                </div>
                <div style={style.div}>
                    <Trello/>
                </div>
            </div>


        );
    }
}