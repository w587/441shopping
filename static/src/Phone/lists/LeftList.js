import React from 'react';

import { Tabs, WhiteSpace } from 'antd-mobile';

const tabs = [
  { title: '1 Tab' },
  { title: '2 Tab' },
  { title: '3 Tab' },
];

export default class LeftList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	
    };
  }

  render() {
    return (
    <Tabs tabs={tabs}
      initalPage={'t2'}
      tabBarPosition="left"
      tabDirection="vertical"
      usePaged="true"
      style={{height:'100%'}}
    >

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: '#fff' }}>
        Content of first tab
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: '#fff' }}>
        Content of second tab
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
    </Tabs>
    );
  }
}
