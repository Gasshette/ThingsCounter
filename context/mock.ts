import IThing from "./interfaces/i-thing";
import { colors } from "../styles";

const thingsMock: Array<IThing> = [
  {
    id: '0',
    name: 'Boku no hero Academia',
    counterValue: '10.2',
    step: '0.1',
    color: colors.yellow,
  },
  {
    id: '1',
    name: 'Battle though the heaven',
    counterValue: '104',
    step: '1',
    color: colors.red,
  },
  {
    id: '2',
    name: 'Martial peak',
    counterValue: '248.5',
    step: '0.5',
    color: colors.green,
  },
];

export default thingsMock;