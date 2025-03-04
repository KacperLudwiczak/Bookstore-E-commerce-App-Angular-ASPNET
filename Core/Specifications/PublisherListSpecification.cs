using Core.Entities;

namespace Core.Specifications;

public class PublisherListSpecification : BaseSpecification<Product, string>
{
    public PublisherListSpecification()
    {
        AddSelect(x => x.Publisher);
        ApplyDistinct();
    }
}
