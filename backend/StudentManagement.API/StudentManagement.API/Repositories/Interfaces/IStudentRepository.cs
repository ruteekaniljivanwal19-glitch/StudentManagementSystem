using StudentManagement.API.Models;

namespace StudentManagement.API.Repositories.Interfaces
{
    public interface IStudentRepository
    {
        Task<List<Student>> GetAllAsync();

        Task<Student?> GetByIdAsync(int id);

        Task<Student> AddAsync(Student student);

        Task<Student?> UpdateAsync(int id, Student student);

        Task<bool> DeleteAsync(int id);
    }
}
