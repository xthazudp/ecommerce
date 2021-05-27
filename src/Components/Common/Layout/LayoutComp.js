import React from 'react';
import { Panel } from 'rsuite';

import HeaderComp from '../Header/HeaderComp';

const Layout = ({
  title = 'Title',
  description = 'Description',
  className,
  children,
}) => {
  return (
    <div>
      <HeaderComp />
      <Panel header={title} shaded>
        <p>{description}</p>
      </Panel>
      <div className={className}>{children}</div>
    </div>
  );
};

export default Layout;
