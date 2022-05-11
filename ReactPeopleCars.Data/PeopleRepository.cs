using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactPeopleCars.Data
{
    public class PeopleRepository
    {
        private readonly string _connString;

        public PeopleRepository(string connString)
        {
            _connString = connString;
        }

        public void AddPerson(Person person)
        {
            using var context = new PeopleDataContext(_connString);
            context.People.Add(person);
            context.SaveChanges();
        }

        public List<Person> GetAll()
        {
            using var context = new PeopleDataContext(_connString);
            return context.People.Include(p => p.Cars).ToList();
        }

        public void AddCar(Car car)
        {
            using var context = new PeopleDataContext(_connString);
            context.Cars.Add(car);
            context.SaveChanges();
        }

        public List<Car> GetCars(int personId)
        {
            using var context = new PeopleDataContext(_connString);
            return context.Cars.Where(c => c.PersonId == personId).ToList();
        }

        public void DeleteCars(int personId)
        {
            using var context = new PeopleDataContext(_connString);
            context.Database.ExecuteSqlInterpolated($"DELETE FROM Cars WHERE PersonId = {personId}");
        }
    }
}
