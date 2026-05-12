import { useState } from "react";
import { useNavigate } from "react-router-dom";

import type { Student } from "../types/Student";

import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

import { logout } from "../auth/auth";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [refresh, setRefresh] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container-fluid bg-light min-vh-100 py-3">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3 px-2">

        <h4 className="fw-bold m-0">Student Management</h4>

        <button
          onClick={handleLogout}
          className="btn btn-sm btn-outline-danger"
        >
          Logout
        </button>

      </div>

      {/* Form Section */}
      <div className="mb-3">
        <StudentForm
          selectedStudent={selectedStudent}
          onSuccess={() => {
            setRefresh(!refresh);
            setSelectedStudent(null);
          }}
        />
      </div>

      {/* List Section */}
      <div className="bg-white rounded shadow-sm p-2">
        <StudentList
          onEdit={(student) => setSelectedStudent(student)}
          refresh={refresh}
            clearEdit={() => setSelectedStudent(null)}   // ✅ ADD THIS
        />
      </div>

    </div>
  );
};

export default Home;