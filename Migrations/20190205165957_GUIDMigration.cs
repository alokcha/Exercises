using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace guid.Migrations
{
    public partial class GUIDMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GUIDs",
                columns: table => new
                {
                    guid = table.Column<string>(nullable: false),
                    expire = table.Column<long>(nullable: false),
                    user = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GUIDs", x => x.guid);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GUIDs");
        }
    }
}
