import { useEffect, useState } from "react";
import type { Student } from "../types/Student";
import { getStudents, deleteStudent } from "../api/studentApi";

type Props = {
  onEdit: (student: Student) => void;
  refresh: boolean;
   clearEdit: () => void;   // ✅ add this
};

const StudentList = ({ onEdit, refresh,clearEdit  }: Props) => {
  const [students, setStudents] = useState<Student[]>([]);

  const loadData = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  useEffect(() => {
    loadData();
  }, [refresh]);

  const handleDelete = async (id: number) => {
  clearEdit();        // ✅ clear FIRST (important)
  await deleteStudent(id);
  loadData();         // then refresh
};

  return (
    <div className="mt-3">

      <table className="table table-sm table-hover align-middle">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Course</th>
            <th className="text-end">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.age}</td>
              <td>{s.course}</td>

              <td className="text-end">
                <button
                  className="btn btn-sm btn-outline-primary me-2"
                  onClick={() => onEdit(s)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDelete(s.id!)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default StudentList;