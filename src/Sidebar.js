import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow.js';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow 
        src='https://instagram.fphx1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/13414136_1719913881597049_846826088_a.jpg?_nc_ht=instagram.fphx1-1.fna.fbcdn.net&_nc_ohc=SQkC3a07NUIAX_9STDO&oh=740b970b5adc0c6e6b4e48a29ced0771&oe=5F792CB0' 
        title='Mike Torres' />
      <SidebarRow 
        Icon={LocalHospitalIcon}
        title="Covid-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
    </div>
  )
}

export default Sidebar;
