import { Form, Input } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";

export default function Home() {
  return (
    <div>
      <Header className="header">
        <div className="navbar flex-h">
          <ul>
            <li>
              <a href="#">Gmail</a>
            </li>
            <li>
              <a href="#">Image</a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-11-512.png"
                  title="Google apps"
                  width={50}
                />
              </a>
            </li>
          </ul>
        </div>
      </Header>
      <img width={500} src={require("./googlelogo.png")} alt="googlelogo" />
      <Form>
        <Form.Item>
          <Input placeholder="Search Pankaj Singh Sheoran here" />
        </Form.Item>
      </Form>
    </div>
  );
}
