import React, { Component } from 'react';
import { connect } from 'react-redux';
class ProductList extends Component {
    render() {
        return (
            <div>
                <h3>Product list</h3>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Id </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(function (product, index) {
                            return <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>Edit|Delete</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps)(ProductList);