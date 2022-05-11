using Microsoft.EntityFrameworkCore;
using System;

namespace ReactPeopleCars.Data
{
    public class PeopleDataContext : DbContext
    {
        private readonly string _connString;

        public PeopleDataContext(string connString)
        {
            _connString = connString;
        }

        public DbSet<Person> People { get; set; }
        public DbSet<Car> Cars { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connString);
        }
    }
}
