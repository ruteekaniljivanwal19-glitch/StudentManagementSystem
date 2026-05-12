import { useEffect, useState } from "react";
import type { Student } from "../types/Student";
import { createStudent, updateStudent } from "../api/studentApi";
import "bootstrap/dist/css/bootstrap.min.css";

type Props = {
  selectedStudent: Student | null;
  onSuccess: () => void;
};

const StudentForm = ({ selectedStudent, onSuccess }: Props) => {
  const [form, setForm] = useState<Student>({
    name: "",
    email: "",
    age: 0,
    course: "",
  });

  const [errors, setErrors] = useState<any>({});

 useEffect(() => {
  if (selectedStudent) {
    setForm(selectedStudent);
  } else {
    setForm({
      name: "",
      email: "",
      age: 0,
      course: "",
    });
  }
}, [selectedStudent]);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;

  setForm({
    ...form,
    [name]: name === "age" ? Number(value) : value,
  });
};

  const validate = () => {
    const err: any = {};

    if (!form.name.trim()) err.name = "Name Required";
    if (!form.email.trim()) err.email = "Email Required";
    if (!form.age || Number(form.age) <= 0) err.age = "Invalid";
    if (!form.course.trim()) err.course = "Required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    if (form.id) {
      await updateStudent(form.id, form);
    } else {
      await createStudent(form);
    }

    setForm({ name: "", email: "", age: 0, course: "" });
    setErrors({});
    onSuccess();
  };

  const errorStyle = {
    minHeight: "18px", // 👈 key fix (prevents shifting)
    fontSize: "11px",
  };

  return (
    <form className="row g-2 align-items-start border p-2 rounded bg-light" onSubmit={handleSubmit}>

      {/* Name */}
      <div className="col-md-3">
        <input
          className="form-control form-control-sm"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <div style={errorStyle} className="text-danger">
          {errors.name || ""}
        </div>
      </div>

      {/* Email */}
      <div className="col-md-3">
        <input
          className="form-control form-control-sm"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <div style={errorStyle} className="text-danger">
          {errors.email || ""}
        </div>
      </div>

      {/* Age */}
      <div className="col-md-2">
        <input
          className="form-control form-control-sm"
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <div style={errorStyle} className="text-danger">
          {errors.age || ""}
        </div>
      </div>

      {/* Course */}
      <div className="col-md-2">
        <input
          className="form-control form-control-sm"
          name="course"
          value={form.course}
          onChange={handleChange}
          placeholder="Course"
        />
        <div style={errorStyle} className="text-danger">
          {errors.course || ""}
        </div>
      </div>

      {/* Button */}
      <div className="col-md-2 d-grid">
        <button type="submit" className="btn btn-sm btn-primary">
          {form.id ? "Update" : "Add"}
        </button>
      </div>

    </form>
  );
};

export default StudentForm;