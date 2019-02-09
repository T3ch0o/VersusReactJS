namespace Rock_Paper_Scissors.BindingModels
{
    using System.ComponentModel.DataAnnotations;

    public class PlayerBindingModel
    {
        [Required(ErrorMessage = "Username is required.")]
        [StringLength(10, MinimumLength = 4, ErrorMessage = "Username must be between 4 and 10 characters.")]
        public string Username { get; set; }
    }
}
