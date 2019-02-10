namespace Rock_Paper_Scissors.Services
{
    using System.Linq;
    using Data;
    using Entities;
    using Interfaces;

    public class PlayerService : IPlayerService
    {
        private readonly RockPaperScissorsDbContext _db;

        public PlayerService(RockPaperScissorsDbContext db)
        {
            _db = db;
        }

        public IQueryable<Player> AllOrderByWins => _db.Players.OrderBy(player => player.Wins);

        public bool IsPlayerAuthorized(string username, string ipAddress)
        {
            Player player = _db.Players.FirstOrDefault(p => p.Username == username);

            if (player == null)
            {
                return false;
            }

            if (player.IpAddress == ipAddress)
            {
                return true;
            }

            return false;
        }

        public bool RegisterPlayer(string username, string ipAddress)
        {
            if (!IsPlayerAuthorized(username, ipAddress))
            {
                Player newPlayer = new Player
                {
                    Username = username,
                    IpAddress = ipAddress
                };

                _db.Players.Add(newPlayer);
                _db.SaveChanges();

                return true;
            }

            if (IsPlayerAuthorized(username, ipAddress))
            {
                return true;
            }

            return false;
        }
    }
}
