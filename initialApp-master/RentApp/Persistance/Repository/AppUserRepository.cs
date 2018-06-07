using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using RentApp.Models.Entities;

namespace RentApp.Persistance.Repository
{
    public class AppUserRepository : Repository<AppUser, int>, IAppUserRepository
    {
        protected RADBContext Context { get { return context as RADBContext; } }

        public AppUserRepository(DbContext context) : base(context)
        {

        }
    }
}