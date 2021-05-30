import { mount } from "enzyme";
import DisplayListOfFriends from "../components/DisplayListOfFriends/DisplayListOfFriends";

const displayFriendsList = [
  {
    name: "Sathyajith",
    favorite: false,
  },
  {
    name: "John",
    favorite: true,
  },
];

describe("test DisplayListOfFriends Component", () => {
  it("accepts displayFriendsList as props", () => {
    const wrapper = mount(<DisplayListOfFriends displayFriendsList={displayFriendsList} />);
    expect(wrapper.props().displayFriendsList[0].name).toEqual("Sathyajith");
  });
  it("displayFriendsList contains 'John' name in props", () => {
    const wrapper = mount(<DisplayListOfFriends displayFriendsList={displayFriendsList} />);
    expect(wrapper.props().displayFriendsList[1].name).toEqual("John");
  });
});
