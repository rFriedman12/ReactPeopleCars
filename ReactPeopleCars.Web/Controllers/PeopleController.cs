using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactPeopleCars.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactPeopleCars.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private string _connString;

        public PeopleController(IConfiguration config)
        {
            _connString = config.GetConnectionString("ConStr");
        }

        [Route("addperson")]
        [HttpPost]
        public void AddPerson(Person person)
        {
            var repo = new PeopleRepository(_connString);
            repo.AddPerson(person);
        }

        [Route("getall")]
        public List<Person> GetAll()
        {
            var repo = new PeopleRepository(_connString);
            return repo.GetAll();
        }

        [Route("addcar")]
        [HttpPost]
        public void AddCar(Car car)
        {
            var repo = new PeopleRepository(_connString);
            repo.AddCar(car);
        }

        [Route("getcars")]
        public List<Car> GetCars(int id)
        {
            var repo = new PeopleRepository(_connString);
            return repo.GetCars(id);
        }

        [Route("deletecars")]
        [HttpPost]
        public void DeleteCars(PersonId personId)
        {
            var repo = new PeopleRepository(_connString);
            repo.DeleteCars(personId.Id);
        }
    }
}
