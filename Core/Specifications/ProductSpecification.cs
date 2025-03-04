using Core.Entities;

namespace Core.Specifications;

public class ProductSpecification : BaseSpecification<Product>
{
    public ProductSpecification(string? genre, string? publisher, string? sort) : base(x =>
        (string.IsNullOrWhiteSpace(genre) || x.Genre == genre) &&
        (string.IsNullOrWhiteSpace(publisher) || x.Publisher == publisher)
    )
    {
        switch (sort)
        {
            case "priceAsc":
                AddOrderBy(x => x.Price);
                break;
            case "priceDesc":
                AddOrderByDescending(x => x.Price);
                break;
            default:
                AddOrderBy(x => x.Name);
                break;
        }
    }
}