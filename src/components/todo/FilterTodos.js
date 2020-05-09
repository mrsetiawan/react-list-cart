import React from 'react';
import { Menu, Dropdown, Button } from 'antd';

const FilterTodos = () => {
  const menu = (
    // eslint-disable-next-line react/jsx-filename-extension
    <Menu>
      <Menu.Item>
        1st menu item
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <Button>Filter todos</Button>
    </Dropdown>
  );
};

export default FilterTodos;