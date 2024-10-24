import { Button, Divider, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
// import Icons from "@Components/Icons/Icons";

const { Text, Title } = Typography;

interface UserDropDownProps {
  name: string;
  image: string;
  smallName: string;
  onClick: (val: any) => void;
}

const UserAccountDrop: React.FC<UserDropDownProps> = ({ name, image, smallName, onClick }) => {
  const navigate = useNavigate();

  const goto = (link: string) => {
    navigate(link);
  };

  return (
    <div style={{ width: "15vw", borderRadius: "0.4rem", backgroundColor: "#fff" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={image} height={83} width={83} alt="profile" className="rounded-circle" />
        <Text className="poppins notranslate" strong>
          {name}
        </Text>
        <Text className="poppins" style={{ textTransform: "lowercase", fontSize: 12 }}>
          @{smallName}
        </Text>
        <Button
          onClick={() => {
            onClick(false);
            goto("/settings");
          }}
          type="link"
        //   icon={<Icons.UserDropdownAccountIcon />}
          style={{
            position: "relative",
            paddingLeft: "10%",
            width: "100%",
            color: "#000",
            paddingTop: 20,
            paddingBottom: 20,
          }}
          className="poppins"
        >
          Account
        </Button>
        <Button
          onClick={() => {
            onClick(false);
            goto("/settings");
          }}
          type="link"
        //   icon={<Icons.UserDropDownSettingsIcon />}
          style={{
            position: "relative",
            paddingLeft: "10%",
            width: "100%",
            color: "#000",
            paddingTop: 20,
            paddingBottom: 20,
          }}
          className="poppins"
        >
          Settings
        </Button>
        <Button
          onClick={() => {
            onClick(false);
            goto("/help_and_support");
          }}
          type="link"
        //   icon={<Icons.UserDropdownInfoIcon />}
          style={{
            position: "relative",
            paddingLeft: "10%",
            width: "100%",
            color: "#000",
            paddingTop: 20,
            paddingBottom: 20,
          }}
          className="poppins"
        >
          Help & Support
        </Button>
        <Divider style={{ margin: 2 }}></Divider>
        {/* <Button
          onClick={() => {
            window.logout();
          }}
          type="link"
          icon={<Icons.UserDropDownLogoutIcon />}
          style={{
            position: "relative",
            paddingLeft: "10%",
            width: "100%",
            color: "#000",
            paddingTop: 20,
            paddingBottom: 20,
          }}
          className="poppins"
        >
          Logout
        </Button> */}
        
      </div>
    </div>
  );
};

export default UserAccountDrop;
