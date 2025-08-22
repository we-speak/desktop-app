import React, { useState } from "react";
import "./App.css";

interface User {
  id: string;
  name: string;
  avatar: string;
  status: "online" | "offline" | "busy";
  inMeeting?: boolean;
}

interface Room {
  id: string;
  name: string;
  type: "voice" | "text";
  users: User[];
}

const App: React.FC = () => {
  const [currentRoom, setCurrentRoom] = useState<Room | null>(null);
  const [users] = useState<User[]>([
    {
      id: "1",
      name: "Harold H",
      avatar: "/api/placeholder/32/32",
      status: "online",
    },
    {
      id: "2",
      name: "Arthur S",
      avatar: "/api/placeholder/32/32",
      status: "online",
    },
    {
      id: "3",
      name: "Valery P",
      avatar: "/api/placeholder/32/32",
      status: "online",
    },
    {
      id: "4",
      name: "Jane C",
      avatar: "/api/placeholder/32/32",
      status: "online",
    },
    {
      id: "5",
      name: "Soham H",
      avatar: "/api/placeholder/32/32",
      status: "online",
    },
  ]);

  const [rooms] = useState<Room[]>([
    { id: "1", name: "No-noise room", type: "voice", users: [] },
    { id: "2", name: "Water Cooler", type: "voice", users: [] },
    {
      id: "3",
      name: "Onboarding",
      type: "voice",
      users: [
        {
          id: "valery",
          name: "Valery Pevnev",
          avatar: "/api/placeholder/80/80",
          status: "online",
          inMeeting: true,
        },
        {
          id: "jane",
          name: "Jane Cooper",
          avatar: "/api/placeholder/80/80",
          status: "offline",
          inMeeting: true,
        },
      ],
    },
  ]);

  const handleJoinRoom = (room: Room) => {
    setCurrentRoom(room);
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="server-info">
            <div className="server-icon">🎤?</div>
            <span className="server-name">We Speak</span>
            <span className="online-count">5 rooms online</span>
          </div>
        </div>

        <div className="sidebar-content">
          {/* Navigation */}
          <div className="nav-section">
            <div className="nav-item">
              <span className="nav-icon">➕</span>
              <span>New room</span>
            </div>
            <div className="nav-item">
              <span className="nav-icon">🔍</span>
              <span>Search</span>
            </div>
            <div className="nav-item active">
              <span className="nav-icon">🏠</span>
              <span>Home</span>
            </div>
            <div className="nav-item">
              <span className="nav-icon">💬</span>
              <span>All rooms</span>
            </div>
            <div className="nav-item">
              <span className="nav-icon">👥</span>
              <span>All users</span>
            </div>
            <div className="nav-item">
              <span className="nav-icon">🔔</span>
              <span>Notifications</span>
            </div>
            <div className="nav-item">
              <span className="nav-icon">⚙️</span>
              <span>Settings</span>
            </div>
          </div>

          {/* Rooms */}
          <div className="section">
            <div className="section-header">
              <span>ROOMS</span>
              <button className="add-btn">+ Add</button>
            </div>
            {rooms.map((room) => (
              <div
                key={room.id}
                className={`room-item ${currentRoom?.id === room.id ? "active" : ""}`}
                onClick={() => handleJoinRoom(room)}
              >
                <span className="room-icon">🔊</span>
                <span className="room-name">{room.name}</span>
                <span className="room-shortcut">⌘{room.id}</span>
              </div>
            ))}
          </div>

          {/* Users */}
          <div className="section">
            <div className="section-header">
              <span>USERS</span>
              <button className="add-btn">+ Add</button>
            </div>
            {users.map((user) => (
              <div key={user.id} className="user-item">
                <div className="user-avatar">
                  <div className="avatar-placeholder">
                    {user.name.charAt(0)}
                  </div>
                  <div className={`status-indicator ${user.status}`}></div>
                </div>
                <span className="user-name">{user.name}</span>
                <div className="user-status">
                  {user.status === "online" && (
                    <span className="status-text">🟢 No-noise room</span>
                  )}
                  {user.status === "busy" && (
                    <span className="status-text">🔴 Onboarding</span>
                  )}
                  {user.status === "offline" && (
                    <span className="status-text">⚫ In a meeting</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User info at bottom */}
        <div className="sidebar-footer">
          <div className="current-user">
            <div className="user-avatar">
              <div className="avatar-placeholder">A</div>
              <div className="status-indicator online"></div>
            </div>
            <div className="user-info">
              <span className="username">Albert Howard</span>
              <span className="user-status-text">Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {currentRoom ? (
          <div className="video-call-area">
            <div className="call-header">
              <div className="room-info">
                <span className="room-icon">🔴</span>
                <span className="room-name">{currentRoom.name}</span>
                <div className="room-controls">
                  <button className="control-btn">📌</button>
                  <button className="control-btn">⋯</button>
                </div>
              </div>
              <div className="call-info">
                <span>2/4 quorum | 23 users</span>
              </div>
            </div>

            <div className="participants-grid">
              {currentRoom.users.map((user) => (
                <div
                  key={user.id}
                  className={`participant ${user.name === "Jane Cooper" ? "speaking" : ""}`}
                >
                  <div className="participant-video">
                    <div className="avatar-large">{user.name.charAt(0)}</div>
                    {user.name === "Valery Pevnev" && (
                      <div className="mute-indicator">🔇</div>
                    )}
                  </div>
                  <div className="participant-name">{user.name}</div>
                  <div className="participant-controls">
                    <button className="control-btn">📌</button>
                    <button className="control-btn">⋯</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="call-footer">
              <div className="call-status">
                <span className="call-icon">🎯</span>
                <span>You in Water Cooler room</span>
                <span className="participants-count">23 together with you</span>
              </div>
              <div className="call-controls">
                <button className="control-btn mic">🎤</button>
                <button className="control-btn video">📹</button>
                <button className="control-btn screen">🖥️</button>
                <button className="control-btn more">⋯</button>
                <button className="control-btn leave">📞</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="welcome-screen">
            <h2>Welcome to Buzzfeed</h2>
            <p>Select a room to join a conversation</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
