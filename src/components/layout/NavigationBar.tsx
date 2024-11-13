import React from 'react';
import { To, useNavigate} from 'react-router-dom';
import {Home, Search, MessageCircle, User} from 'lucide-react';
import {Button} from "@/components/ui/button";

const NavigationBar = () => {
  const nav = useNavigate();
  const [activeTab, setActiveTab] = React.useState('home');

  const navItems = [
    {id: 'home', icon: Home, label: 'Home', path: '/home'},
    {id: 'search', icon: Search, label: 'Search', path: '/search'},
    {id: 'contacts', icon: MessageCircle, label: 'Contacts', path: '/contacts'},
    {id: 'profile', icon: User, label: 'Profile', path: '/profile'},
  ];

  const handleNavigation = (id: React.SetStateAction<string>, path: To) => {
    setActiveTab(id);
    nav(path);
  };

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, width: '500px', backgroundColor: 'maroon',
      fontFamily: 'Inter', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '60px', width: '100%'
      }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <Button
              key={ item.id }
              onClick={() => handleNavigation(item.id, item.path)}
              variant="ghost"
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%',
                backgroundColor: 'transparent', color: isActive ? '#ffffff' : '#EFCA47',
              }}
            >
              <Icon
                size={28}
                style={{ strokeWidth: isActive ? 3.5 : 3, transition: 'all 0.2s ease' }}
              />
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationBar;
