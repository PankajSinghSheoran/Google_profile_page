/* eslint-disable jsx-a11y/anchor-is-valid */
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Header } from "antd/es/layout/layout";

export default function Profile() {
  return (
    <div>
      <Header>
        <div className="flex justify-between">
          <img
            className="w-24 mt-4 ml-4 h-9"
            width={500}
            src={require("./googlelogo2.png")}
            alt="googlelogo"
          />
          <Input
            className="mt-5 ml-5 mr-auto h-7 w-72 rounded-2xl "
            suffix={<SearchOutlined className="hover:cursor-pointer" />}
          />
          <p>
            <a href="#">
              <img
                src="https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-11-512.png"
                title="Google apps"
                alt="googleimage"
                className="mt-5 mr-[1150px] w-7"
              />
            </a>
          </p>
        </div>
        <div className="flex items-center justify-start p-2 mt-1 ml-32 flex-h">
          <p className="p-2 hover:underline">All</p>
          <p className="p-2 hover:underline">Projects</p>
          <p className="p-2 hover:underline">Images</p>
        </div>
        <div>
          <hr className="w-full my-5 border-2" />
        </div>
      </Header>
      <div className=" ml-44">
        <div className="flex">
          <p className="mt-6 text-blue-500 ">
            <a href="#"> Pankaj Singh Sheoran - Resume</a>
          </p>
        </div>
        <div className="text-xs">
          <p className="mt-3">
            <b>Pankaj Singh Sheoran</b> (born 2001), Computer Science
            Undergraduate Batch of 2023, pursuing degree from Guru Jambheshwar
            University of Science and Technology, Hisar, Haryana, India.
          </p>
          <p className="mt-3">
            <b>Skills:</b> React.js, Redux, Javascript, HTML5, CSS3, Tailwind
            CSS, Bootstrap, Agile Development, Responsive Designing, Typescript,
            Git, Giyhub, Wordpress.
          </p>
          <p className="mt-3">
            <b>Interests:</b> Open Source Projects, Competitive Programming,
            Tech Events, UI/UX Design, Cloud Computing.
          </p>
        </div>
        <div>
          <div className="flex">
            <p className="mt-6 text-blue-500 ">
              <a href="#"> LinkedIn - Pankaj Singh Sheoran</a>
            </p>
          </div>
        </div>
        <div>
          <div className="flex">
            <p className="mt-6 text-blue-500 ">
              <a href="#"> Email - pankajsheoran728@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
