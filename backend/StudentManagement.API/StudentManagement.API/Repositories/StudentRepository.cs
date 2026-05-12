using Microsoft.EntityFrameworkCore;
using StudentManagement.API.Data;
using StudentManagement.API.Models;
using StudentManagement.API.Repositories.Interfaces;




namespace StudentManagement.API.Repositories
{
    public class StudentRepository: IStudentRepository
    {
        private readonly AppDbContext _context;

        public StudentRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<Student>> GetAllAsync()
        {
            return await _context.Students.ToListAsync();
        }

        public async Task<Student?> GetByIdAsync(int id)
        {
            return await _context.Students.FindAsync(id);
        }

        public async Task<Student> AddAsync(Student student)
        {
            _context.Students.Add(student);
            await _context.SaveChangesAsync();

            return student;
        }

        public async Task<Student?> UpdateAsync(int id, Student updated)
        {
            var student = await _context.Students.FindAsync(id);

            if (student == null)
                return null;

            student.Name = updated.Name;
            student.Email = updated.Email;
            student.Age = updated.Age;
            student.Course = updated.Course;

            await _context.SaveChangesAsync();

            return student;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var student = await _context.Students.FindAsync(id);

            if (student == null)
                return false;

            _context.Students.Remove(student);

            await _context.SaveChangesAsync();

            return true;
        }
    }
}
