import React, { Component } from 'react'
import ChairItem from './ChairItem'
export default class ChairRow extends Component {
    renderList() {
        return this.props.itemRow.danhSachGhe.map((item, index) => {
            return <ChairItem key={index} item={item}
            />
        })
    }
    render() {
        let { hang } = this.props.itemRow;
        return (
            <tr className='row'>
                <td className='text-warning col'>{hang}</td>
                {this.renderList()}
            </tr>
        )
    }
}
