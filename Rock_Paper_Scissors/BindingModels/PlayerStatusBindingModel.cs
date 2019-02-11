namespace Rock_Paper_Scissors.BindingModels
{
    public class PlayerStatusBindingModel
    {
        public string Username { get; set; }

        public int Wins { get; set; }

        public int Losses { get; set; }

        public string WinRate { get; set; }
    }
}