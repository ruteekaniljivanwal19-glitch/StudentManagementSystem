using StudentManagement.API.DTOs;
using StudentManagement.API.Models;
using StudentManagement.API.Repositories.Interfaces;
using StudentManagement.API.Services.Interfaces;


namespace StudentManagement.API.Services
{
    public class StudentService: IStudentService
    {
        private readonly IStudentRepository _repository;

        public StudentService(IStudentRepository repository)
        {
            _repository = repository;
        }

        public async Task<List<StudentDto>> GetAllAsync()
        {
            var students = await _repository.GetAllAsync();

            return students.Select(x => new StudentDto
            {
                Id = x.Id,
                Name = x.Name,
                Email = x.Email,
                Age = x.Age,
                Course = x.Course
            }).ToList();
        }

        public async Task<StudentDto?> GetByIdAsync(int id)
        {
            var student = await _repository.GetByIdAsync(id);

            if (student == null)
                return null;

            return new StudentDto
            {
                Id = student.Id,
                Name = student.Name,
                Email = student.Email,
                Age = student.Age,
                Course = student.Course
            };
        }

        public async Task<StudentDto> AddAsync(CreateStudentDto dto)
        {
            var student = new Student
            {
                Name = dto.Name,
                Email = dto.Email,
                Age = dto.Age,
                Course = dto.Course
            };

            var created = await _repository.AddAsync(student);

            return new StudentDto
            {
                Id = created.Id,
                Name = created.Name,
                Email = created.Email,
                Age = created.Age,
                Course = created.Course
            };
        }

        public async Task<StudentDto?> UpdateAsync(int id, CreateStudentDto dto)
        {
            var student = new Student
            {
                Name = dto.Name,
                Email = dto.Email,
                Age = dto.Age,
                Course = dto.Course
            };

            var updated = await _repository.UpdateAsync(id, student);

            if (updated == null)
                return null;

            return new StudentDto
            {
                Id = updated.Id,
                Name = updated.Name,
                Email = updated.Email,
                Age = updated.Age,
                Course = updated.Course
            };
        }

        public async Task<bool> DeleteAsync(int id)
        {
            return await _repository.DeleteAsync(id);
        }
    }
}
