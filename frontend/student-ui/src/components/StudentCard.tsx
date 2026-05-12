import type  { Student } from "../types/Student";

type Props = {
  student: Student;
  onEdit: (student: Student) => void;
  onDelete: (id: number) => void;
};

const StudentCard = ({ student, onEdit, onDelete }: Props) => {
  return (
    <div style={styles.card}>
      <h3>{student.name}</h3>
      <p>{student.email}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>

      <button onClick={() => onEdit(student)}>Edit</button>
      <button onClick={() => onDelete(student.id!)}>Delete</button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
  },
};

export default StudentCard;