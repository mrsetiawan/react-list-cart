import React from 'react';
import { Menu, Dropdown, Button } from 'antd';

const FilterTodos = () => {

  const menu = (
    // eslint-disable-next-line react/jsx-filename-extension
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="">
          1st menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <Button>Filter todos</Button>
    </Dropdown>
  )
}

export default FilterTodos;