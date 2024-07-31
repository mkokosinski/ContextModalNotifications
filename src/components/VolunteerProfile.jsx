import { useNotificationContext } from "../context/NotificationContext";

const VolunteerProfile = () => {
  const { addNotification } = useNotificationContext();

  const handleAddProfile = () => {
    addNotification("Profile added");
  };

  const handleEditProfile = () => {
    addNotification("Profile edited");
  };

  const handleDeleteProfile = () => {
    addNotification("Profile deleted");
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
