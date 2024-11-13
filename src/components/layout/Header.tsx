import React from 'react';
import { ReactComponent as Logo } from "@/assets/images/icon.svg";

const Header = () => {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '500px', height: '65px',
      backgroundColor: '#FFF5D0', display: 'flex', alignItems: 'center',
    }}>
      <Logo width={65} height={65} />
    </div>
  );
};

export default Header;