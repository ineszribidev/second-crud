import React, { Component } from 'react';
import { connect } from 'react-redux';
class EditProduct extends Component {
    render() {
        return (
            <div>
                <h3>Edit Product</h3>
            </div>
        );
    }
}
export default connect()(EditProduct);