import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { connect } from 'react-redux';
import { setFilter } from '../../config/actions/setFilter';

const FilterTodos = ({ filter }) => {
  const menu = (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Menu>
        <Menu.Item onClick={() => filter('ALL')}>
          All
        </Menu.Item>
      </Menu>
      <Menu>
        <Menu.Item onClick={() => filter('COMPLETED')}>
          Complete
        </Menu.Item>
      </Menu>
      <Menu>
        <Menu.Item onClick={() => filter('ACTIVE')}>
          Active
        </Menu.Item>
      </Menu>
    </>
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <Button>Filter</Button>
    </Dropdown>
  );
};

const mapDispatchToProps = (dispatch) => ({
  filter: (val) => dispatch(setFilter(val))
});

export default connect(null, mapDispatchToProps)(FilterTodos);