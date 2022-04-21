import React from 'react'
import { Switch } from "antd";
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

function SwitchKekoo(props) {

  function onChange(checked) {
    props.funvar(checked)
  }

  return (
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked onChange={onChange}
    />
  )
}

export default SwitchKekoo