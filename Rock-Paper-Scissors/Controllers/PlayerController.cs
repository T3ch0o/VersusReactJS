namespace Rock_Paper_Scissors.Controllers
{
    using BindingModel;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Services.Interfaces;

    public class PlayerController : BaseApiController
    {
        private readonly IPlayerService _playerService;

        public PlayerController(IPlayerService playerService)
        {
            _playerService = playerService;
        }

        [HttpPost("register")]
        [ProducesDefaultResponseType]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult Register([FromBody] PlayerBindingModel player)
        {
            _playerService.RegisterPlayer(player.Username);

            return Ok(player);
        }
    }
}
