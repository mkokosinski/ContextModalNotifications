import NotificationContextProvider from "./context/NotificationContext";
import Notification from "./components/Notification";
import VolunteerProfile from "./components/VolunteerProfile";

const App = () => {
  return (
    <NotificationContextProvider>
      <div className="App">
        <h1>Volunteer Management</h1>
        <Notification />
        <VolunteerProfile />
      </div>
    </NotificationContextProvider>
  );
};

export default App;
