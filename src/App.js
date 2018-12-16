import React, {Component} from 'react'
import { BrowserRouter } from 'react-router-dom'
import List from './containers/list'
class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <List/>
            </BrowserRouter>
        )
    }
}
export default App