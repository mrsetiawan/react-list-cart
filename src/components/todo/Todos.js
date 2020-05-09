import React, { Component } from 'react'
import { connect } from 'react-redux';
import { List } from 'antd';
// eslint-disable-next-line react/prefer-stateless-function
class Todos extends Component {

  render() {

    const data = ["belajar", "berhasil", "kaya raya"];
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <List
        size="large"
        bordered
        dataSource={data}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)
}

export default connect(mapStateToProps,null)(Todos)
