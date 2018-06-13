namespace RentApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Rentaaaa : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Vehicles", "BranchOfficeId", "dbo.BranchOffices");
            DropIndex("dbo.Vehicles", new[] { "BranchOfficeId" });
            RenameColumn(table: "dbo.Vehicles", name: "BranchOfficeId", newName: "BranchOffice_BranchOfficeID");
            AddColumn("dbo.Vehicles", "ServiceId", c => c.Int(nullable: false));
            AlterColumn("dbo.Vehicles", "BranchOffice_BranchOfficeID", c => c.Int());
            CreateIndex("dbo.Vehicles", "ServiceId");
            CreateIndex("dbo.Vehicles", "BranchOffice_BranchOfficeID");
            AddForeignKey("dbo.Vehicles", "ServiceId", "dbo.Services", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Vehicles", "BranchOffice_BranchOfficeID", "dbo.BranchOffices", "BranchOfficeID");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Vehicles", "BranchOffice_BranchOfficeID", "dbo.BranchOffices");
            DropForeignKey("dbo.Vehicles", "ServiceId", "dbo.Services");
            DropIndex("dbo.Vehicles", new[] { "BranchOffice_BranchOfficeID" });
            DropIndex("dbo.Vehicles", new[] { "ServiceId" });
            AlterColumn("dbo.Vehicles", "BranchOffice_BranchOfficeID", c => c.Int(nullable: false));
            DropColumn("dbo.Vehicles", "ServiceId");
            RenameColumn(table: "dbo.Vehicles", name: "BranchOffice_BranchOfficeID", newName: "BranchOfficeId");
            CreateIndex("dbo.Vehicles", "BranchOfficeId");
            AddForeignKey("dbo.Vehicles", "BranchOfficeId", "dbo.BranchOffices", "BranchOfficeID", cascadeDelete: true);
        }
    }
}
