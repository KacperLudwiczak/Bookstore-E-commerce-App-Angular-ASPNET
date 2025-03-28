using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class RolesAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2beea80c-724e-43cb-ab07-669370b0a6db", null, "Customer", "CUSTOMER" },
                    { "cd186473-fb87-4694-9dcf-0e1c3cbed51a", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2beea80c-724e-43cb-ab07-669370b0a6db");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "cd186473-fb87-4694-9dcf-0e1c3cbed51a");
        }
    }
}
