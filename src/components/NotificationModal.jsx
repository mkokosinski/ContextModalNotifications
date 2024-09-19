import { useNotificationContext } from "../context/NotificationContext";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { removeNotification } from "../store/slices/notificationSlice";

const NotificationModal = ({ onClose }) => {
  const notifications = useSelector(selectNotifications);
  const dispatch = useDispatch();

  return (
    <Modal open onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          backgroundColor: "white",
          padding: 4,
        }}
      >
        <Typography sx={{ color: "black" }}>Notifications</Typography>
        <List>
          {notifications.map((notification, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={notification.message}
                secondary={new Date(notification.timestamp).toLocaleString()}
              />
              <Button
                onClick={() => dispatch(removeNotification(index))} // {type: "notifications/removeNotification", payload: index}
                color="error"
                size="small"
              >
                Remove
              </Button>
            </ListItem>
          ))}
        </List>
        <Button onClick={onClose} color="primary" variant="contained">
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default NotificationModal;
