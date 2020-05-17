import React from 'react';
import { connect } from 'react-redux';
import { Menu, Dropdown, Button } from 'antd';
import { setFilter } from '../../config/actions/setFilter';

const FilterTodos = ({ filterTodo }) => {
  const menu = (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Menu>
        <Menu.Item onClick={() => filterTodo('ALL')}>
          All
        </Menu.Item>
      </Menu>
      <Menu>
        <Menu.Item onClick={() => filterTodo('COMPLETED')}>
          Complete
        </Menu.Item>
      </Menu>
      <Menu>
        <Menu.Item onClick={() => filterTodo('ACTIVE')}>
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
  filterTodo: (val) => dispatch(setFilter(val))
});

export default connect(null, mapDispatchToProps)(FilterTodos);