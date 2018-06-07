﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RentApp.Models.Entities
{
    public class Item
    {
        public int ItemID { get; set; }
        public decimal Price { get; set; }
        public int PriceListID { get; set; }
        public int VehicleID { get; set; }

        public Vehicle VehicleId { get; set; }
        public PriceList PriceListId { get; set; }
        public virtual ICollection<PriceList> PriceLists { get; set; }
    }
}