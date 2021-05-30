import { mount } from "enzyme";
import DeleteConfirmModal from "../components/DeleteConfirmModal/DeleteConfirmModal";

describe("test DeleteConfirmModal", () => {
    it("accepts friendName as props", () => {
      const wrapper = mount(<DeleteConfirmModal friendName={"Sathyajith"} />);
      expect(wrapper.props().friendName).toEqual('Sathyajith');
    });
    it("contains Delete Confirmation header", () => {
      const wrapper = mount(<DeleteConfirmModal friendName={"Sathyajith"} />);
      const value = wrapper.find("div.title").text();
      expect(value).toEqual("Delete Confirmation");
    });
    it("contains Delete Confirmation message", () => {
        const wrapper = mount(<DeleteConfirmModal friendName={"Sathyajith"} />);
        const value = wrapper.find("div.message").text();
        expect(value).toEqual(`Are you sure you want to delete "Sathyajith" as your friend?`);
      });
  });