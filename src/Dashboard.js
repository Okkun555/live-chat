import styled from "@emotion/styled";
import {
  Button,
  Chip,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { CTX } from "./Store";

const Dashboard = () => {
  const { chats, sendChatAction } = useContext(CTX);
  const topics = Object.keys(chats);

  // localState
  const [activeTopic, setActiveTopic] = useState(topics[0]);
  const [textValue, setTextValue] = useState("");

  return (
    <div>
      <PaperWrapper>
        <Typography variant="h4" component="h4">
          Live Chat App
        </Typography>
        <Typography variant="h5" component="h5">
          {activeTopic}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <div
            style={{
              width: "30%",
              height: "300px",
              borderRight: "1px solid grey",
            }}
          >
            <List>
              {topics.map((topic) => (
                <ListItem
                  button
                  key={topic}
                  onClick={() => setActiveTopic(topic)}
                >
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div>

          <div
            style={{
              width: "70%",
              height: "300px",
              paddingLeft: "30px 0 10px 10px",
            }}
          >
            {chats[activeTopic].map((chat, index) => (
              <Box sx={{ display: "flex", alignItems: "center" }} key={index}>
                <Chip label={chat.from}></Chip>
                <Typography variant="p">{chat.msg}</Typography>
              </Box>
            ))}
          </div>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            value={textValue}
            label="send a chat"
            variant="standard"
            sx={{ width: "80%" }}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <Button
            onClick={() => {
              sendChatAction(textValue);
              setTextValue("");
            }}
            variant="contained"
            color="primary"
          >
            送信
          </Button>
        </Box>
      </PaperWrapper>
    </div>
  );
};

export default Dashboard;

const PaperWrapper = styled(Paper)((theme) => ({
  margin: "50px",
  padding: "30px 15px",
}));
