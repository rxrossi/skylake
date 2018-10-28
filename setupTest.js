import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

window.require = require;

Enzyme.configure({ adapter: new Adapter() });
