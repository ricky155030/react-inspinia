'use strict';

import React from 'react';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';

import { SidebarListItem } from './Sidebar/SidebarListItem'
import { SidebarList } from './Sidebar/SidebarList'

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
          <SidebarList>
            <SidebarListItem 
              animated={false}
              primaryText="Sent mail" 
              leftIcon={<ContentSend />} 
            />
            <SidebarListItem 
              animated={false}
              primaryText="Drafts" 
              leftIcon={<ContentDrafts />} 
            />
            <SidebarListItem
              animated={false}
              primaryText="Inbox"
              leftIcon={<ContentInbox />}
              primaryTogglesNestedList={true}
              nestedItems={[
                <SidebarListItem
                  primaryText="Starred"
                  leftIcon={<ActionGrade />}
                />,
                <SidebarListItem
                  primaryText="Sent Mail"
                  leftIcon={<ContentSend />}
                  primaryTogglesNestedList={true}
                  nestedItems={[
                    <SidebarListItem 
                      primaryText="Drafts" 
                      leftIcon={<ContentDrafts />} 
                    />
                  ]}
                />,
                <SidebarListItem
                  primaryText="Inbox"
                  leftIcon={<ContentInbox />}
                  primaryTogglesNestedList={true}
                  nestedItems={[
                    <SidebarListItem 
                      primaryText="Drafts" 
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
