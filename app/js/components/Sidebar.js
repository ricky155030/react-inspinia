'use strict';

import React from 'react';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';

import { SidebarListItem } from './Sidebar/SidebarListItem'
import { SidebarList } from './Sidebar/SidebarList'
import { Profile } from './Profile'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
  }

  render() {
    return (
      <nav className="navbar-default navbar-static-side" role="navigation">
        <div className="sidebar-collapse">
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
              nestedItems={[
                <SidebarListItem
                  primaryText="Flot Chart"
                  leftIcon={<ActionGrade />}
                />,
                <SidebarListItem
                  primaryText="Chart.js"
                  leftIcon={<ContentSend />}
                  primaryTogglesNestedList={true}
                  nestedItems={[
                    <SidebarListItem 
                      primaryText="Pie Chart" 
                      leftIcon={<ContentDrafts />} 
                    />
                  ]}
                />,
                <SidebarListItem
                  primaryText="Sparkline Chart"
                  leftIcon={<ContentInbox />}
                  primaryTogglesNestedList={true}
                  nestedItems={[
                    <SidebarListItem 
                      primaryText="Bar Chart" 
                      leftIcon={<ContentDrafts />} 
                    />
                  ]}
                />,
              ]}
            />
          </SidebarList>
        </div>
      </nav>
    );
  }
};

export default Sidebar
