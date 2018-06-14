using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using RentApp.Models.Entities;
using Microsoft.AspNet.Identity;
using System.Security.Principal;

namespace RentApp.Persistance.Repository
{
    public class AppUserRepository : Repository<AppUser, int>, IAppUserRepository
    {
        protected RADBContext Context { get { return context as RADBContext; } }

        public AppUserRepository(DbContext context) : base(context)
        {

        }

        public string GetActiveUser()
        {
            var user = System.Security.Principal.WindowsIdentity.GetCurrent().Name;
            return user;
        }

        public int GetActiveUserId()
        {
            var username = System.Security.Principal.WindowsIdentity.GetCurrent().Name;
            var user = Context.Users.Where(u => u.Email == username).FirstOrDefault();

            return user.AppUserId;
        }

     
    }
}