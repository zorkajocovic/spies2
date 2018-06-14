namespace RentApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RentApppp : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Reservations", "ReturnBranchId", "dbo.BranchOffices");
            DropIndex("dbo.Reservations", new[] { "ReturnBranchId" });
            AddColumn("dbo.Reservations", "GetBranchId", c => c.Int(nullable: false));
            CreateIndex("dbo.Reservations", "GetBranchId");
            AddForeignKey("dbo.Reservations", "GetBranchId", "dbo.BranchOffices", "BranchOfficeID", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Reservations", "GetBranchId", "dbo.BranchOffices");
            DropIndex("dbo.Reservations", new[] { "GetBranchId" });
            DropColumn("dbo.Reservations", "GetBranchId");
            CreateIndex("dbo.Reservations", "ReturnBranchId");
            AddForeignKey("dbo.Reservations", "ReturnBranchId", "dbo.BranchOffices", "BranchOfficeID", cascadeDelete: true);
        }
    }
}
