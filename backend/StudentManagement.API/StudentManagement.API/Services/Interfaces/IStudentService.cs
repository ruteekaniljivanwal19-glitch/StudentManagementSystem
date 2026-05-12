using StudentManagement.API.DTOs;


namespace StudentManagement.API.Services.Interfaces
{
    public interface IStudentService
    {
        Task<List<StudentDto>> GetAllAsync();

        Task<StudentDto?> GetByIdAsync(int id);

        Task<StudentDto> AddAsync(CreateStudentDto dto);

        Task<StudentDto?> UpdateAsync(int id, CreateStudentDto dto);

        Task<bool> DeleteAsync(int id);
    }
}
