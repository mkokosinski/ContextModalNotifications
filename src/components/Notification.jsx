import { useNotificationContext } from "../context/NotificationContext";
import { useState } from "react";
import NotificationModal from "./NotificationModal";
import { useSelector } from "react-redux";
import { selectNotifications } from "../store/slices/notificationSlice";

const Notification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const notifications = useSelector(selectNotifications);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
        Notifications {notifications.length}
      </button>
      {isModalOpen && (
        <NotificationModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default Notification;
