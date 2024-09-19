import NotificationContextProvider from "./context/NotificationContext";
import Notification from "./components/Notification";
import VolunteerProfile from "./components/VolunteerProfile";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Volunteer Management</h1>
        <Notification />
        <VolunteerProfile />
      </div>
    </Provider>
  );
};

export default App;
