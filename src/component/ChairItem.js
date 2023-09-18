import React, { Component } from 'react'
import { ADD_TO_CART } from '../constant/constant';
import { connect } from 'react-redux';

class ChairItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonClicked: false,
        };
    }
    handleButtonClick = () => {
        this.props.handleAddChair(this.props.item);
        this.setState((prevState) => ({
            buttonClicked: !prevState.buttonClicked,
        }));
    };
    render() {
        if (this.props.item.daDat === true) {
            var buttonClassName = 'ghe gheDuocChon';
        }
        else {
            var buttonClassName = this.state.buttonClicked ? 'ghe gheDangChon' : 'ghe';
        }
        return (
            <td className='col'>
                <button className={buttonClassName} onClick={this.handleButtonClick} disabled={this.props.item.daDat}>
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
export default connect(mapStateToProps, mapDispatchToProps)(ChairItem);