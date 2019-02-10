namespace Rock_Paper_Scissors.Entities
{
    public class Player
    {
        public int Id { get; set; }

        public string Username { get; set; }

        public int Wins { get; set; }

        public int Losses { get; set; }

        public int Draws { get; set; }

        public string IpAddress { get; set; }
    }
}
