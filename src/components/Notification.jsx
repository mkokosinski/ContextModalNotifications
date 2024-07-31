import { useNotificationContext } from "../context/NotificationContext";
import { useState } from "react";
import NotificationModal from "./NotificationModal";

const Notification = () => {
  const { notifications } = useNotificationContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
