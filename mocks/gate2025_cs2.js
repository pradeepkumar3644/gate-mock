import { GA } from "../data/ga.js";
import { CORE_1MARK } from "../data/core_1mark.js";
import { CORE_2MARK } from "../data/core_2mark.js";
import { ANSWERS } from "../data/answers.js";

export const GATE_2025_CS2 = {
  id: "gate2025_cs2",
  name: "GATE 2025 – CSE (CS2)",
  duration: 180,   // minutes
  questions: [
    ...GA,
    ...CORE_1MARK,
    ...CORE_2MARK
  ],
  answers: ANSWERS
};
