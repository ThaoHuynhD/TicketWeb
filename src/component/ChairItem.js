import React, { Component } from 'react'
import { ADD_TO_CART } from '../constant/constant';
import { connect } from 'react-redux';

class ChairItem extends Component {
    render() {
        return (
            <td className='col'>
                <button className='ghe' onClick={() => { this.props.handleAddChair(this.props.item) }}>
                </button>
            </td>
        )
    }
}
let mapStateToProps = (state) => {
    return {
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        handleAddChair: (item) => {
            let action = {
                type: ADD_TO_CART,
                payload: item,
            };
            dispatch(action);
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ChairItem);