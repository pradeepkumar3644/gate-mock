export const CORE_2MARK = [

/* ---------------- Q36 – Q65 (2 MARK EACH) ---------------- */

{
  qno: 36,
  section: "CSE",
  marks: 2,
  negative: 0.66,
  type: "MCQ",
  question:
    "Stop-and-Wait protocol is used. Frame size = 3000 bits, rate = 2000 bps, propagation delay = 100 ms. ACK size negligible. What is channel utilization (%)?",
  options: [
    "88.23",
    "93.75",
    "85.44",
    "66.67"
  ]
},
{
  qno: 37,
  section: "CSE",
  marks: 2,
  negative: 0.66,
  type: "MCQ",
  question:
    "A positive constant α is added to all edge weights of a weighted undirected graph. Which statement about MST and shortest paths is TRUE?",
  options: [
    "Both MST and SP remain unchanged",
    "MST may change, SP unchanged",
    "MST unchanged, SP may change",
    "Both MST and SP may change"
  ]
},
{
  qno: 38,
  section: "CSE",
  marks: 2,
  negative: 0.66,
  type: "MCQ",
  question:
    "Worst-case time complexities for meld operation on: (P) unsorted DLL, (Q) min-heap array, (R) BST?",
  options: [
    "P: Θ(1), Q: Θ(n), R: Θ(n)",
    "P: Θ(1), Q: Θ(n log n), R: Θ(n)",
    "P: Θ(n), Q: Θ(n log n), R: Θ(n²)",
    "P: Θ(1), Q: Θ(n), R: Θ(n log n)"
  ]
},
{
  qno: 39,
  section: "CSE",
  marks: 2,
  negative: 0.66,
  type: "MCQ",
  question:
    "Direct-mapped cache uses 4 bits tag and 12 bits index. Block size = 1 byte. What are main memory size and cache size?",
  options: [
    "64 KB and 4 KB",
    "128 KB and 16 KB",
    "64 KB and 8 KB",
    "128 KB and 6 KB"
  ]
},
{
  qno: 40,
  section: "CSE",
  marks: 2,
  negative: 0.66,
  type: "MCQ",
  question:
    "Given CFG: S→Aa | bAc | dc | bda ; A→d. Which statement is TRUE?",
  options: [
    "Neither LALR(1) nor SLR(1)",
    "CLR(1) but not LALR(1)",
    "LALR(1) but not SLR(1)",
    "LALR(1) and SLR(1)"
  ]
},
{
  qno: 41,
  section: "CSE",
  marks: 2,
  negative: 0.66,
  type: "MCQ",
  question:
    "Best asymptotic bound for searching an element in a bitonic array?",
  options: [
    "Θ(n)",
    "Θ(1)",
    "Θ(log² n)",
    "Θ(log n)"
  ]
},
{
  qno: 42,
  section: "CSE",
  marks: 2,
  negative: 0.66,
  type: "MSQ",
  question:
    "Relation ≼ on set of all functions from {1..n}→{0,1}. Which statements are TRUE?",
  options: [
    "≼ is symmetric",
    "(F,≼) is a partial order",
    "(F,≼) is a lattice",
    "≼ is an equivalence relation"
  ]
},
{
  qno: 43,
  section: "CSE",
  marks: 2,
  negative: 0.66,
  type: "MSQ",
  question:
    "Given Karnaugh map of Boolean function F(w,x,y,z), which expressions represent F?",
  options: [
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ],
  note: "Figure-based question"
},
{
  qno: 44,
  section: "CSE",
  marks: 2,
  negative: 0.66,
  type: "MSQ",
  question:
    "Given LU decomposition P = LU. Which statements are TRUE?",
  options: [
    "Solve LY=Q then UX=Y",
    "If P invertible, L and U invertible",
    "If P singular, some diagonal of U is zero",
    "If P symmetric, L and U symmetric"
  ]
},
{
  qno: 45,
  section: "CSE",
  marks: 2,
  negative: 0.66,
  type: "MSQ",
  question:
    "Stack supports O(1) MIN operation. Which approaches work?",
  options: [
    "Store pointer to minimum below each element",
    "Keep pointer to global minimum",
    "Maintain sorted auxiliary array",
    "Maintain Min-Heap"
  ]
},
{
  qno: 46,
  section: "CSE",
  marks: 2,
  negative: 0.66,
  type: "MSQ",
  question:
    "Given schemas R1 and R2 with FDs. Which statements about 3NF are TRUE?",
  options: [
    "R1 is in 3NF",
    "R2 is in 3NF",
    "R1 is NOT in 3NF",
    "R2 is NOT in 3NF"
  ]
},
{
  qno: 47,
  section: "CSE",
  marks: 2,
  negative: 0.66,
  type: "MSQ",
  question:
    "Given page reference string and frame evolution, which page replacement policies could be used?",
  options: [
    "LRU",
    "LFU",
    "MFU",
    "Optimal"
  ]
},
{
  qno: 48,
  section: "CSE",
  marks: 2,
  negative: 0.66,
  type: "MSQ",
  question:
    "Resource allocation graph given. Which abort choices remove deadlock?",
  options: [
    "Abort P1",
    "Abort P3",
    "Abort P2",
    "Abort P1 and P4"
  ]
},

/* -------- NAT QUESTIONS -------- */

{
  qno: 49,
  section: "CSE",
  marks: 2,
  negative: 0,
  type: "NAT",
  question:
    "IEEE-754 values X,Y,Z given. Which equations evaluate to zero?"
},
{
  qno: 50,
  section: "CSE",
  marks: 2,
  negative: 0,
  type: "MSQ",
  question:
    "Which Boolean algebra equations are correct?",
  options: ["A", "B", "C", "D"]
},
{
  qno: 51,
  section: "CSE",
  marks: 2,
  negative: 0.66,
  type: "MSQ",
  question:
    "Given grammars G1 and G2. Which statements are correct?",
  options: [
    "G1 not LL(1), G2 LL(1)",
    "G1 LL(1), G2 not LL(1)",
    "Both not LL(1)",
    "Both ambiguous"
  ]
},
{
  qno: 52,
  section: "CSE",
  marks: 2,
  negative: 0.66,
  type: "MSQ",
  question:
    "Which options define regular languages?",
  options: ["A", "B", "C", "D"]
},
{
  qno: 53,
  section: "CSE",
  marks: 2,
  negative: 0.66,
  type: "MSQ",
  question:
    "Which schedules are conflict serializable?",
  options: ["A", "B", "C", "D"]
},
{
  qno: 54,
  section: "CSE",
  marks: 2,
  negative: 0.66,
  type: "MSQ",
  question:
    "Correct SQL queries to find students enrolled in course 1470?",
  options: ["A", "B", "C", "D"]
},
{
  qno: 55,
  section: "CSE",
  marks: 2,
  negative: 0,
  type: "NAT",
  question:
    "Average memory access time (ns) in 2-level cache system (rounded to 1 decimal)?"
},
{
  qno: 56,
  section: "CSE",
  marks: 2,
  negative: 0,
  type: "NAT",
  question:
    "Time to process 1000 instructions in a 5-stage pipeline (microseconds, rounded to 2 decimals)?"
},
{
  qno: 57,
  section: "CSE",
  marks: 2,
  negative: 0,
  type: "NAT",
  question:
    "After inserting key 23 into given B+ tree, smallest key in parent of leaf containing 25*?"
},
{
  qno: 58,
  section: "CSE",
  marks: 2,
  negative: 0,
  type: "NAT",
  question:
    "Two-level paging system. Logical address space 2^32, page size 4096 bytes. Find b."
},
{
  qno: 59,
  section: "CSE",
  marks: 2,
  negative: 0,
  type: "NAT",
  question:
    "Output of someAlgo on given tree (diameter length)."
},
{
  qno: 60,
  section: "CSE",
  marks: 2,
  negative: 0,
  type: "NAT",
  question:
    "Number of states in minimum DFA for language L defined by product modulo 7."
},
{
  qno: 61,
  section: "CSE",
  marks: 2,
  negative: 0,
  type: "NAT",
  question:
    "Clock cycle duration (ns) given instruction mix and execution time."
},
{
  qno: 62,
  section: "CSE",
  marks: 2,
  negative: 0,
  type: "NAT",
  question:
    "Output of given C program involving pointers."
},
{
  qno: 63,
  section: "CSE",
  marks: 2,
  negative: 0,
  type: "NAT",
  question:
    "Output of nested function C program."
},
{
  qno: 64,
  section: "CSE",
  marks: 2,
  negative: 0,
  type: "NAT",
  question:
    "Probability that roots of randomly chosen square-invariant quadratic are equal."
},
{
  qno: 65,
  section: "CSE",
  marks: 2,
  negative: 0,
  type: "NAT",
  question:
    "Expected length of subinterval containing 0.4 (rounded to 2 decimals)."
}

];
