/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Form, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Footer, Header } from "antd/es/layout/layout";

export default function Home() {
  return (
    <div>
      <Header className="header">
        <div className="navbar flex-h">
          <ul className="flex justify-end align-center">
            <li className="p-2 hover:underline">
              <a href="#">Gmail</a>
            </li>
            <li className="p-2 hover:underline">
              <a href="#">Image</a>
            </li>
            <li className="p-2 ">
              <a href="#">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-11-512.png"
                  title="Google apps"
                  alt="googleimage"
                  width={50}
                />
              </a>
            </li>
          </ul>
        </div>
      </Header>
      <div className="flex flex-col items-center">
        <img
          className="w-56 h-20 mt-32"
          width={500}
          src={require("./googlelogo.png")}
          alt="googlelogo"
        />
        <Form>
          <Form.Item>
            <Input
              prefix={<SearchOutlined />}
              className="h-10 mt-4 w-96 rounded-2xl"
              placeholder="Search Pankaj Singh Sheoran here"
            />
          </Form.Item>
        </Form>
      </div>
      <Footer>
        <div className="flex flex-row items-center justify-center">
          <Button className="mx-1" href="https://www.google.com/">
            Google Search
          </Button>
          <Button className="mx-1" href="https://www.google.com/doodles">
            I'm Feeling Lucky
          </Button>
        </div>
      </Footer>
      <div className="fixed bottom-0">
        <p className="ml-4">India</p>
        <div className="flex justify-around">
          <div className="flex items-center justify-start p-2 flex-h">
            <p className="p-2 hover:underline">About</p>
            <p className="p-2 hover:underline">Advertising</p>
            <p className="p-2 hover:underline">Business</p>
            <p className="p-2 hover:underline">HowSearchworks</p>
          </div>
          <div className="flex justify-end p-2 ml-[1150px]">
            <div className="flex justify-end p-2 hover:underline">Privacy</div>
            <div className="flex justify-end p-2 hover:underline">Terms</div>
            <div className="flex justify-end p-2 hover:underline">Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
}
