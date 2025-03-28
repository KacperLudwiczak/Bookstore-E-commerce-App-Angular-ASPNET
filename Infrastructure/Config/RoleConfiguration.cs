using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Config;

public class RoleConfiguration : IEntityTypeConfiguration<IdentityRole>
{
    public void Configure(EntityTypeBuilder<IdentityRole> builder)
    {
        builder.HasData(
            new IdentityRole
            {
                Id = "cd186473-fb87-4694-9dcf-0e1c3cbed51a",
                Name = "Admin",
                NormalizedName = "ADMIN"
            },
            new IdentityRole
            {
                Id = "2beea80c-724e-43cb-ab07-669370b0a6db",
                Name = "Customer",
                NormalizedName = "CUSTOMER"
            }
        );
    }
}