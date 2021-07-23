import React, { useState, useEffect } from 'react';

import { Tabs, Radio, Space } from 'antd';

const { TabPane } = Tabs;

export default function HomeMenu() {
    const [tabPosition, setTabPosition] = useState('left');

     const changeTabPosition = e => {
        setTabPosition(e.target.value);
      };

      
    return (
   
        <div>
             
        <Tabs tabPosition={tabPosition}>
          <TabPane tab={<img src ="https://picsum.photos/200" className="rounded"/>} key="1">
            Content of Tab 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
        </div>
    )
}
