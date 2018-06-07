﻿using RentApp.Models.Entities;
using RentApp.Persistance.Repository;
using RentApp.Persistance.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Unity.Attributes;

namespace RentApp.Persistance.UnitOfWork
{
    public class DemoUnitOfWork : IUnitOfWork
    {
        private readonly DbContext _context;
      
        [Dependency]
        public IServiceRepository Services { get; set; }

        [Dependency]
        public IAppUserRepository AppUsers { get; set; }

        [Dependency]
        public IBranchOfficeRepository BranchOffices { get; set; }

        [Dependency]
        public ICommentRepository Comments { get; set; }

        [Dependency]
        public IItemRepository Items { get; set; }

        [Dependency]
        public IPriceListRepository PriceLists { get; set; }

        [Dependency]
        public IRateRepository Rates { get; set; }

        [Dependency]
        public IReservationRepository Reservations { get; set; }

        [Dependency]
        public IVehicleRepository Vehicles { get; set; }

        [Dependency]
        public IVehicleTypeRepository VehicleTypes { get; set; }


        // public Repository<Vehicle, int> Vehicles { get; set; } 

        public DemoUnitOfWork(DbContext context)
        {
            _context = context;
        }

        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
