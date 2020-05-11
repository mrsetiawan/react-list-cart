import React from 'react';
import { Menu, Dropdown, Button } from 'antd';

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

export default FilterTodos;