using Core.Entities;

namespace Core.Specifications;

public class ProductSpecification : BaseSpecification<Product>
{
    public ProductSpecification(ProductSpecParams specParams) : base(x =>
        (string.IsNullOrEmpty(specParams.Search) || x.Name.ToLower().Contains(specParams.Search)) &&
        (specParams.Genre.Count == 0 || specParams.Genre.Contains(x.Genre)) &&
        (specParams.Publisher.Count == 0 || specParams.Publisher.Contains(x.Publisher))
    )
    {
        ApplyPaging(specParams.PageSize * (specParams.PageIndex -1), specParams.PageSize);

        switch (specParams.Sort)
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