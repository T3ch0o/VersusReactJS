namespace Rock_Paper_Scissors.ValidationAttributes
{
    using System.ComponentModel.DataAnnotations;
    using System.Linq;

    public class HandSignAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            string[] handSigns = { "Rock", "Paper", "Scissors" };

            string handSign = (string)value;

            if (!handSigns.Contains(handSign))
            {
                return new ValidationResult("Are you trying to cheat?");
            }

            return ValidationResult.Success;
        }
    }
}
