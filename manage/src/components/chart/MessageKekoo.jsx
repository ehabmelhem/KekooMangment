
import React from 'react'
import { message, Button, Space } from 'antd';

// Type 1 = success
// Type 2 = warning
// Type 3 = error

function MessageKekoo({type,messageClient}) { 
  const success = () => {
    message.success('Successfully post product on Kekoo');
  };
  
  const error = () => {
    message.error('');
  };
  
  const warning = () => {
    message.warning('This is a warning message');
  };
  return (
    
    <div>
      {type=="1" && message.success(messageClient)}
      {type=="3" && message.error(messageClient)}
      {type=="2" && message.warning(messageClient)}
      </div>
  )
}

export default MessageKekoo