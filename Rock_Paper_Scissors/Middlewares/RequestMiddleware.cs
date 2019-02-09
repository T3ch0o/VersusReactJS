namespace Rock_Paper_Scissors.Middlewares
{
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Http;

    public class RequestMiddleware
    {
        private readonly RequestDelegate _next;

        public RequestMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            string ip = httpContext.Connection.RemoteIpAddress.ToString();

            await _next(httpContext);
        }
    }
}
