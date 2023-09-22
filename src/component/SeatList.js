import React, { Component } from 'react'
import { connect } from 'react-redux'
import SeatItem from './SeatItem';
import { seatArr } from './data';
class SeatList extends Component {
    render() {
        console.log('RENDER SEAT LIST=============================================');
        let { cart } = this.props;
        console.log("this.propsSeatList: ", this.props);
        return (
            <div className="col-7 my-auto pr-2">
                <div className='seatList'>
                    <h1 className='text-warning'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
                    <h5>Màn hình</h5>
                    <p className='screen'></p>
                    <table className='w-100'>
                        {seatArr &&
                            seatArr.map((seatList, index) => {
                                if (seatList.hang === "") {
                                    return (
                                        <thead key={index} className="text-center">
                                            <tr className='row'>
                                                <th className='text-warning col'>{seatList.hang}</th>
                                                {seatList.danhSachGhe.map((item, index) => (
                                                    <th className='text-warning col' key={index}>{item.soGhe}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                    );
                                } else {
                                    return (
                                        <tbody key={index}>
                                            <tr className='row'>
                                                <td className='text-warning col'>{seatList.hang}</td>
                                                {seatList.danhSachGhe.map((item, index) => {
                                                    console.log("cart.includes(item): ", cart.includes(item));
                                                    return (
                                                        <SeatItem
                                                            key={index}
                                                            item={item}
                                                            isChecked={cart.some(cartItem => cartItem.soGhe === item.soGhe)}
                                                        />
                                                    );
                                                })}
                                            </tr>
                                        </tbody>
                                    );
                                }
                            })}
                    </table>
                </div>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        cart: state.seatReducer.cart,
    };
};
export default connect(mapStateToProps, null)(SeatList);