'use strict';

import React from 'react';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';

import { SidebarListItem } from './Sidebar/SidebarListItem'
import { SidebarList } from './Sidebar/SidebarList'
import { Profile } from './Profile'

const sidebarStyle = {
  width: '220px',
  position: 'fixed',
  top: '64px',
  bottom: 0,
  overflowY: 'scroll'
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="hidden-scrollbar" style={sidebarStyle}>
        <Profile 
          name="HWKAO"
          role="Admin"
        />
        <SidebarList>
          <SidebarListItem 
            animated={false}
            primaryText="Dashboards" 
            leftIcon={<ContentSend />} 
            onClick={() => this.props.router.push('/example')}
          />
          <SidebarListItem 
            animated={false}
            primaryText="Layouts" 
            leftIcon={<ContentDrafts />} 
          />
          <SidebarListItem
            animated={false}
            primaryText="Graphs"
            leftIcon={<ContentInbox />}
            primaryTogglesNestedList={true}
          >
            <SidebarListItem
              primaryText="Flot Chart"
              leftIcon={<ActionGrade />}
            />
            <SidebarListItem
              primaryText="Chart.js"
              leftIcon={<ContentSend />}
              primaryTogglesNestedList={true}
            >
              <SidebarListItem 
                primaryText="Pie Chart" 
                leftIcon={<ContentDrafts />} 
              />
            </SidebarListItem>
            <SidebarListItem
              primaryText="Sparkline Chart"
              leftIcon={<ContentInbox />}
              primaryTogglesNestedList={true}
            >
              <SidebarListItem 
                primaryText="Bar Chart" 
                leftIcon={<ContentDrafts />} 
              />
              <SidebarListItem 
                primaryText="Line Chart" 
                leftIcon={<ContentDrafts />} 
              />
            </SidebarListItem>
          </SidebarListItem>
          <SidebarListItem
            animated={false}
            primaryText="Graphs"
            leftIcon={<ContentInbox />}
            primaryTogglesNestedList={true}
          >
            <SidebarListItem
              primaryText="Flot Chart"
              leftIcon={<ActionGrade />}
            />
            <SidebarListItem
              primaryText="Chart.js"
              leftIcon={<ContentSend />}
              primaryTogglesNestedList={true}
            >
              <SidebarListItem 
                primaryText="Pie Chart" 
                leftIcon={<ContentDrafts />} 
              />
            </SidebarListItem>
            <SidebarListItem
              primaryText="Sparkline Chart"
              leftIcon={<ContentInbox />}
              primaryTogglesNestedList={true}
            >
              <SidebarListItem 
                primaryText="Bar Chart" 
                leftIcon={<ContentDrafts />} 
              />
              <SidebarListItem 
                primaryText="Line Chart" 
                leftIcon={<ContentDrafts />} 
              />
            </SidebarListItem>
          </SidebarListItem>
        </SidebarList>
      </div>
    );
  }
};

export default Sidebar
