using _14API.Models;
using Microsoft.AspNetCore.Mvc;

namespace _14API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MoviesDbContext context;
        public MovieController(MoviesDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            return context.Movies.
                Where(m => m.Edited == "Yes").
                OrderBy(m => m.Title).
                ToArray();
        }
    }
}
