﻿namespace Rock_Paper_Scissors.Controllers
{
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

        [HttpPost("all")]
        [ProducesDefaultResponseType]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult All()
        {
            IQueryable<Player> playersOrderedByScore = _playerService.AllOrderByWins;

            return Ok(playersOrderedByScore);
        }
    }
}
