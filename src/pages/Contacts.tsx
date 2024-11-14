import * as React from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Search, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import fakePeople, {Contact} from "@/fakePeople";

const ContactsPage = () => {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState("");
  const [recentContacts] = React.useState<Contact[]>(fakePeople);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const navigateToProfile = (user: Contact) => {
    user.lastClicked = new Date();
    navigate(`/user/${user.id}/profile`);
  };

  const navigateToMessage = (user: Contact) => {
    user.lastClicked = new Date();
    navigate(`/user/${user.id}/message`);
  };

  const filteredContacts = recentContacts.filter(contact =>
    `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{
      width: '100%', padding: '20px', display: 'flex',
      flexDirection: 'column', gap: '20px', marginTop: '20px'
    }}>
      <div style={{
        width: '100%', textAlign: 'right'
      }}>
        <div style={{
          width: '100%', height: '40px', color: 'white', fontSize: '30px',
          fontFamily: 'Inter', fontWeight: '900', wordWrap: 'break-word'
        }}>
          Contacts
        </div>
      </div>

      <div style={{
        position: 'relative'
      }}>
        <Search style={{
          position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
          color: '#fff', height: '16px', width: '16px'
        }} />
        <Input
          value={query}
          onChange={handleSearch}
          placeholder="Search contacts..."
          style={{
            width: '100%', paddingLeft: '40px', paddingRight: '16px', color: "whitesmoke",
            paddingTop: '8px', paddingBottom: '8px', borderRadius: '8px'
          }}
        />
      </div>

      {query === "" && (
        <div style={{
          width: '100%'
        }}>
          <div style={{
            fontSize: '14px', fontWeight: '500', color: '#9CA3AF', marginBottom: '12px'
          }}>
            Recently Contacted
          </div>
          <ScrollArea style={{
            width: '100%', whiteSpace: 'nowrap', borderRadius: '8px'
          }}>
            <div style={{
              display: 'flex', gap: '16px', padding: '8px'
            }}>
              {recentContacts.sort((c1, c2) => c2.lastClicked.getTime() - c1.lastClicked.getTime()).map((contact) => (
                <div
                  key={contact.id}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white',
                    padding: '16px', borderRadius: '8px', width: '192px', gap: '12px'
                  }}
                >
                  {contact.avatar}

                  <span style={{
                    fontSize: '14px', fontWeight: '500', color: '#111827'
                  }}>
                    {contact.firstName} {contact.lastName}
                  </span>

                  <div style={{
                    display: 'flex', gap: '8px', width: '100%'
                  }}>
                    <Button
                      onClick={() => navigateToProfile(contact)}
                      variant="outline"
                      style={{
                        flex: 1, height: '32px', color: 'white', minWidth: 0, padding: '0 8px'
                      }}
                    >
                      Profile
                    </Button>
                    <Button
                      onClick={() => navigateToMessage(contact)}
                      style={{
                        flex: 1, height: '32px', minWidth: 0, padding: '0 8px',
                        display: 'flex', alignItems: 'center', gap: '4px'
                      }}
                    >
                      <MessageCircle style={{
                        height: '16px', width: '16px'
                      }} />
                      Chat
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      )}

      {query !== "" && (
        <div style={{
          width: '100%', display: 'flex', flexDirection: 'column', gap: '12px'
        }}>
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              style={{
                display: 'flex', alignItems: 'center', backgroundColor: 'white', padding: '12px',
                borderRadius: '8px', width: '100%', justifyContent: 'space-between'
              }}
            >
              {/* Left side - Avatar and Name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {contact.avatar}
                <span style={{
                  fontSize: '14px', fontWeight: '500', color: '#111827'
                }}>
                  {contact.firstName} {contact.lastName}
                </span>
              </div>

              {/* Right side - Buttons */}
              <div style={{
                display: 'flex', gap: '8px'
              }}>
                <Button
                  onClick={() => navigateToProfile(contact)}
                  variant="outline"
                  style={{
                    height: '32px', padding: '0 12px', color: 'white'
                  }}
                >
                  Profile
                </Button>
                <Button
                  onClick={() => navigateToMessage(contact)}
                  style={{
                    height: '32px', padding: '0 12px', display: 'flex', alignItems: 'center', gap: '4px'
                  }}
                >
                  <MessageCircle style={{
                    height: '16px', width: '16px'
                  }} />
                  Chat
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactsPage;