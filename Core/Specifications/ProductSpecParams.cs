namespace Core.Specifications;

public class ProductSpecParams : PagingParams
{

    private List<string> _genre = [];
    public List<string> Genre
    {
        get => _genre;
        set
        {
            _genre = value.SelectMany(x => x.Split(',',
                StringSplitOptions.RemoveEmptyEntries)).ToList();
        }
    }

    private List<string> _publisher = [];
    public List<string> Publisher
    {
        get => _publisher;
        set
        {
            _publisher = value.SelectMany(x => x.Split(',',
                StringSplitOptions.RemoveEmptyEntries)).ToList();
        }
    }

    public string? Sort { get; set; }

    private string? _search;
    public string Search
    {
        get => _search ?? "";
        set => _search = value.ToLower();
    }

}