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

const Dashboard = () => {
  return (
    <div>
      <PaperWrapper>
        <Typography variant="h4" component="h4">
          Live Chat App
        </Typography>
        <Typography variant="h5" component="h5">
          Topic Placeholder
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
              {["topic"].map((topic) => (
                <ListItem button key={topic}>
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div>

          <div
            style={{
              width: "70%",
              height: "300px",
              paddingLeft: "30px 0 0 10px",
            }}
          >
            {[{ from: "user", msg: "hello" }].map((chat, index) => (
              <Box sx={{ display: "flex", alignItems: "center" }} key={index}>
                <Chip label={chat.from}></Chip>
                <Typography variant="p">{chat.msg}</Typography>
              </Box>
            ))}
          </div>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            label="send a chat"
            variant="standard"
            sx={{ width: "80%" }}
          />
          <Button variant="contained" color="primary">
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
