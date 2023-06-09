﻿using Microsoft.EntityFrameworkCore;

namespace _14API.Models
{
    public class MoviesDbContext : DbContext
    {
        public MoviesDbContext(DbContextOptions<MoviesDbContext> options) : base(options)
        {

        }

        public DbSet<Movie> Movies { get; set;}
    }
}
