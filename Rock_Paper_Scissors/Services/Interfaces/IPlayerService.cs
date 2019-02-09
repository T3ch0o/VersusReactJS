namespace Rock_Paper_Scissors.Services.Interfaces
{
    using System.Linq;
    using Entities;

    public interface IPlayerService
    {
        IQueryable<Player> AllOrderByWins { get; }

        bool RegisterPlayer(string username, string ipAddress);
    }
}
