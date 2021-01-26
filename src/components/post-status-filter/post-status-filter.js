import React, {Component} from 'react';
import { Button } from 'reactstrap';
import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Liked'}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const elClass = active ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button 
                    key={name} 
                    type="button" 
                    className={`btn ${elClass}`}
                    onClick={()=> onFilterSelect(name)}
                    >{label}</button>
            )
        });
        return (
            <div className='btn-group'>
                {buttons}
                {/* <button outline color='info'>All</button> */}
                {/* <button type="button" className="btn btn-info">All</button> */}
                {/* <button type="button" className="btn btn-outline-secondary">By likes</button> */}
            </div>
        )
    }
    
    
}