namespace Core.Entities;

public class Product
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string Description { get; set; }
    public decimal Price { get; set; }
    public required string PictureUrl { get; set; }
    public required string Genre { get; set; }
    public required string Publisher { get; set; }
    public int QuantityInStock { get; set; }
}
