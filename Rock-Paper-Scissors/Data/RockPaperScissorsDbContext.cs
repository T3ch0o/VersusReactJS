namespace Rock_Paper_Scissors.Data
{
    using Entities;
    using Microsoft.EntityFrameworkCore;

    public class RockPaperScissorsDbContext : DbContext
    {
        public RockPaperScissorsDbContext(DbContextOptions<RockPaperScissorsDbContext> options) : base(options)
        {
        }

        public DbSet<Player> Players { get; set; }
    }
}
