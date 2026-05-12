namespace StudentManagement.API.Models
{
    public class LoginModel
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;
    }
}
