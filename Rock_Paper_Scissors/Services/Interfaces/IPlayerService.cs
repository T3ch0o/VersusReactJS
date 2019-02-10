namespace Rock_Paper_Scissors.Services.Interfaces
{
    using System.Linq;
    using Entities;

    public interface IPlayerService
    {
        IQueryable<Player> AllOrderByWins { get; }

        bool IsPlayerAuthorized(string username, string ipAddress);

        bool RegisterPlayer(string username, string ipAddress);

        void ChangePlayerStatus(string username, string status);
    }
}
