import { useDispatch } from "react-redux";
import { addNotification } from "../store/slices/notificationSlice";

const VolunteerProfile = () => {
  const dispatch = useDispatch();

  const handleAddProfile = () => {
    dispatch(addNotification("Profile added"));
  };

  const handleEditProfile = () => {
    dispatch(addNotification("Profile edited"));
  };

  const handleDeleteProfile = () => {
    dispatch(addNotification("Profile deleted"));
  };

  return (
    <div>
      <button onClick={handleAddProfile}>Add Profile</button>
      <button onClick={handleEditProfile}>Edit Profile</button>
      <button onClick={handleDeleteProfile}>Delete Profile</button>
    </div>
  );
};

export default VolunteerProfile;
