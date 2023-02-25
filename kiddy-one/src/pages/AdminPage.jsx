import { useState } from "react";
import AllProducts from "../components/adminpanel/AllProducts";
import Sidebar from "../components/adminpanel/Sidebar";
import TopNavBar from "../components/Navbar/TopNavabr";
import { Box, Flex } from "@chakra-ui/react";
import AllUsers from "../components/adminpanel/AllUsers";

const AdminPage = () => {
  const [showPage, setShowPage] = useState("dashboard");
  return (
    <>
      <TopNavBar />

      <Flex justifyContent={"space-between"} width={"100%"}>
        <Box
        //   border={"1px solid"}
          width={["40%", "40%", "30%", "18%"]}
          h="100vh"
          position={"fixed"}
        >
          <Sidebar setShowPage={setShowPage} />
        </Box>
        <Box
        //   border={"1px solid"}
          width={["55%", "55%", "60%", "75%"]}
          marginLeft={["50%", "45%", "20%"]}
        >
          {/* {showPage == "dashboard" ? <Deshboard /> : null} */}
          {showPage == "showprods" ? <AllProducts /> : null}
          {showPage == "showusers" ? <AllUsers /> : null}
          {/* {showPage == "addprod" ? <AdminProduct /> : null} */}
          {/* {showPage == "editprod" ? <Delivery /> : null} */}
          {/* {showPage == "deleteprod" ? <Delete/> : null} */}
        </Box>
      </Flex>
    </>
  );
};
export default AdminPage;
