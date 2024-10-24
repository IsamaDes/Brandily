import alarmIcon from "./headimages/alarm.svg";
import settingsicon from "./headimages/settingsicon.svg";
import anglebutton from "./headimages/anglebutton.svg";
import flag from "./headimages/englishflag.svg";
import React, { useState } from "react";
import LocalStorage from "../../Helpers/storage";
import UserAccountDrop from "../UI/UserAccountDrop";
import { Avatar, Button, Layout, Popover, Space, Typography, Select } from "antd";
import line from "./headimages/Line.svg";

const { Text } = Typography;
const { Header } = Layout;

interface User {
  email: string;
  password: string;
}

const Headerbar = () => {
  const user: User | null = LocalStorage.getCurrentUser();
  const image = localStorage.getItem("image");
  const [notificationDrop, setNotificationDrop] = useState<boolean>(false);
  const [userAccountDrop, setUserAccountDrop] = useState<boolean>(false);
  const [language, setLanguage] = useState<"En" | "Fr">("En");

  const handleLanguageChange = (value: "En" | "Fr") => {
    setLanguage(value);
  };

  return (
    <div className="bg-#FAFAFA p-4 shadow-md w-full h-38 flex justify-end align-center">
      <div className="flex gap-6 justify-start">
        <div className="flex gap-4 justify-start">
          <div className="flex items-center justify-between rounded">
            <Select
              value={language}
              onChange={handleLanguageChange}
              className="flex items-center border-none focus:ring-0"
              options={[
                {
                  value: "En",
                  label: (
                    <div className="flex items-center">
                      <img src={flag} alt="English" className="mt-3 w-16 h-16" />
                      <span>English</span>
                    </div>
                  ),
                },
                {
                  value: "Fr",
                  label: (
                    <div className="flex items-center ">
                      <img src={flag} alt="French" className="mt-3 w-16 h-16" />
                      <span>French</span>
                    </div>
                  ),
                },
              ]}
            />
          </div>
          {/* User Guide Button */}
          <button className="flex items-center px-4 mt-2 h-14 border-lightblue border-2 rounded-full gap-4 ">
            <div className="w-6 h-6 bg-lightblue text-white rounded-full flex items-center justify-center">
              ?
            </div>
            <p className="text-lightblue">User Guide</p>
          </button>
        </div>
        <div className="flex items-center gap-8 ml-8 ">
          <Popover
            placement="bottomLeft"
            content={<div>Notification Content</div>}
            trigger="click"
            open={notificationDrop}
          >
            <Button
              onClick={() => setNotificationDrop(!notificationDrop)}
              icon={<img src={alarmIcon} alt="Notifications" className="w-12 h-12 bg-#FAFAFA border-transparent" />}
            />
          </Popover>
          <button>
            <img src={settingsicon} alt="Settings" className="w-12 h-12" />
          </button>
          <div className="flex items-center">
            <img src={line} className="b-#9C9494 w-[1.3px] h-[40px]" />
          </div>
          {user && (
            <Popover
              placement="bottomLeft"
              content={
                <UserAccountDrop
                  name={user.email}
                  smallName={user.email}
                  image={image || ''}
                  onClick={(val) => setUserAccountDrop(val)}
                />
              }
              trigger="click"
              open={userAccountDrop}
            >
              <button
                onClick={() => setUserAccountDrop(!userAccountDrop)}
                className="flex items-center justify-between gap-4 cursor-pointer "
              >
                <div className="flex justify-between gap-4">
                  <Avatar
                    size={"large"}
                    icon={<img src={image ? `${image}?timestamp=${new Date().getTime()}` : ''} alt="user" />}
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-gray-900">{user.email}</p>
                  </div>
                </div>
                <div>
                  <img src={anglebutton} alt="Dropdown" className="w-5" />
                </div>
              </button>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Headerbar;
