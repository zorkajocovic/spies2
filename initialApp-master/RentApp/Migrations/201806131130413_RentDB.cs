namespace RentApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RentDB : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Vehicles", "BranchOffice_BranchOfficeID", "dbo.BranchOffices");
            DropIndex("dbo.Vehicles", new[] { "BranchOffice_BranchOfficeID" });
            DropColumn("dbo.Vehicles", "BranchOffice_BranchOfficeID");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Vehicles", "BranchOffice_BranchOfficeID", c => c.Int());
            CreateIndex("dbo.Vehicles", "BranchOffice_BranchOfficeID");
            AddForeignKey("dbo.Vehicles", "BranchOffice_BranchOfficeID", "dbo.BranchOffices", "BranchOfficeID");
        }
    }
}
