import { mount, shallow } from "enzyme";
import Pagination from "react-js-pagination";
import App from "../App";


it("renders without crashing", () => {
    shallow(<App />);
  });
  
  it("renders Page header", () => {
    const wrapper = mount(<App />);
    const value = wrapper.find("h2").text();
    expect(value).toEqual("Welcome to Haptik!!");
  });