import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Chatbox from "../components/ChatBox.jsx";
import MyChats from "../components/MyChats.jsx";
import SideDrawer from "../components/miscellaneous/SideDrawer.jsx";
import { ChatState } from "../Context/ChatProvider.jsx";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <Box w="100%">
      {user && <SideDrawer />}

      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </Box>
  );
};

export default Chatpage;