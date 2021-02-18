import { useAuth } from '../../lib/useAuth';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HotelIcon from '@material-ui/icons/Hotel';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export function MenuItems(){
  const {setPageName} = useAuth();
  const menuItems = [
    // {name: 'Home',        icon: <HomeIcon />      },
    {name: 'Dashboard',    icon: <DashboardIcon /> },
    {name: 'Food', icon: <FastfoodIcon />    },
    {name: 'Sleep',     icon: <HotelIcon /> },
  ];

  return (
    <List>
      {menuItems.map((item) => 
        <ListItem button onClick={()=>setPageName(item.name)} key={'button'.concat(item.name)}>
          <ListItemIcon key={'icon'.concat(item.name)}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.name} key={'text'.concat(item.name)}/>
        </ListItem>
      )}
    </List>
  );
};

export function SignOut({handleSignOut}){
  
  return (
    <List>
      <ListItem button onClick={()=>handleSignOut()}>
        <ListItemIcon><ExitToAppIcon /></ListItemIcon>
        <ListItemText primary='Sign Out' />
      </ListItem>
    </List>
  );
};

export function ProfilePic(){
  return (
    <List>
      <ListItem>
        <ListItemIcon>
        <div style={{alignItems: 'center'}}>
            <img src='/download.jfif' height='30' width='30'/>
          </div>
        </ListItemIcon>
        <div style={{fontSize: '1.2rem', fontWeight: '450'}}>
          Username
        </div>
      </ListItem>
    </List>
  );
};



