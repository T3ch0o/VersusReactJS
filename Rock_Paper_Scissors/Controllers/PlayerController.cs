namespace Rock_Paper_Scissors.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using BindingModels;
    using Entities;
    using Filters;
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
        [ValidateModelState]
        [ProducesDefaultResponseType]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult Register([FromBody] PlayerBindingModel player)
        {
            string ipAddress = Request.HttpContext.Connection.RemoteIpAddress.ToString();

            bool isRegistered = _playerService.RegisterPlayer(player.Username, ipAddress);

            if (isRegistered)
            {
                return Ok(player);
            }

            return BadRequest(new
            {
                message = "Username already exists."
            });
        }

        [HttpGet("all")]
        [ProducesDefaultResponseType]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult All()
        {
            IQueryable<Player> playersOrderedByWins = _playerService.AllOrderByWins;
            List<PlayerStatusBindingModel> players = new List<PlayerStatusBindingModel>();

            foreach (Player player in playersOrderedByWins)
            {
                string winRate = $"{(double) player.Wins / (player.Wins + player.Losses) * 100:F2}%";

                players.Add(new PlayerStatusBindingModel
                {
                    Username = player.Username,
                    Wins = player.Wins,
                    Losses = player.Losses,
                    WinRate = winRate
                });
            }

            return Ok(players);
        }
    }
}
