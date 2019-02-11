namespace Rock_Paper_Scissors.Controllers
{
    using System;
    using BindingModels;
    using Filters;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore.Internal;
    using Services.Interfaces;

    public class ReactController : BaseApiController
    {
        private readonly IPlayerService _playerService;

        public ReactController(IPlayerService playerService)
        {
            _playerService = playerService;
        }

        [HttpPost("hand_sign")]
        [ValidateModelState]
        [ProducesDefaultResponseType]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult HandSign([FromBody] PlayerHandSignBindingModel player)
        {
            string ipAddress = Request.HttpContext.Connection.RemoteIpAddress.ToString();

            bool isAuthorized = _playerService.IsPlayerAuthorized(player.Username, ipAddress);

            if (isAuthorized)
            {
                string[] handSigns = { "Rock", "Paper", "Scissors" };

                Random random = new Random();
                int reactValue = random.Next(0, 3);
                int playerValue = handSigns.IndexOf(player.HandSign);
                string status;

                if (((reactValue + 1) % 3) == playerValue)
                {
                    status = "Win";
                    _playerService.ChangePlayerStatus(player.Username, status);

                    return Ok(new
                    {
                        status = "Loss",
                        handSign = handSigns[reactValue]
                    });
                }

                if (((playerValue + 1) % 3) == reactValue)
                {
                    status = "Loss";
                    _playerService.ChangePlayerStatus(player.Username, status);

                    return Ok(new
                    {
                        status = "Win",
                        handSign = handSigns[reactValue]
                    });
                }

                status = "Draw";
                _playerService.ChangePlayerStatus(player.Username, status);

                return Ok(new
                {
                    status,
                    handSign = handSigns[reactValue]
                });
            }

            return BadRequest();
        }
    }
}
