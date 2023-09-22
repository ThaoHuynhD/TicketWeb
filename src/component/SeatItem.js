import React, { Component } from 'react'
import { SELECT_SEAT, DESELECT_SEAT } from '../constant/constant';
import { connect } from 'react-redux';

class SeatItem extends Component {
    handleButtonClick = () => {
        this.props.handleAddSeat(this.props.item);
        console.log("this.props.isCheckedhandleButtonClick: ", this.props.isChecked);
        if (this.props.isChecked) { 
            this.props.handleRemoveSeat(this.props.item);
        }
    };
    render() {
        // console.log('RENDER SEAT ITEM--------');
        // console.log("this.propsfdsf: ", this.props);
        console.log("this.props.isChecked: ", this.props.isChecked);

        let buttonClassName = "ghe gheDuocChon";
        if (this.props.item.daDat === true) {
            buttonClassName = 'ghe gheDuocChon';
        }
        else {
            buttonClassName = this.props.isChecked ? 'ghe gheDangChon' : 'ghe';
        }
        return (
            <td className='col'>
                <button
                    className={buttonClassName}
                    onClick={this.handleButtonClick}
                    disabled={this.props.item.daDat}>
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
        handleAddSeat: (item) => {
            let action = {
                type: SELECT_SEAT,
                payload: item,
            };
            dispatch(action);
        },
        handleRemoveSeat: (item) => {
            let action = {
                type: DESELECT_SEAT,
                payload: {
                    item,
                }
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SeatItem);