const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
const students50 = students
  .filter((student) => student.score > 50)
  .map((student) => (student.score += student.score * 0.1));
const totalStudentScore = students50.reduce((total, score) => total + score, 0);
console.log(totalStudentScore);
