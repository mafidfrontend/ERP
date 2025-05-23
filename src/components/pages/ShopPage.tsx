import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { getShopItems } from "../services/shopServie";
import { Shop } from "@/types";

const ShopPage = () => {
  const { toast } = useToast();
  const [shopData, setItems] = useState<Shop>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getShopItems()
      .then(setItems)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Yuklanmoqda...</p>;
  const handlePurchase = (itemName: string, price: number) => {
    toast({
      title: "Item Purchased!",
      description: `You have purchased ${itemName} for ${price} silver coins.`,
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Shop</h1>
        <div className="text-xl font-medium">
          Balance: <span className="text-primary font-bold">{shopData.silverCoins}</span> Silver Coins
        </div>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shopData.items.map((item) => (
          <Card key={item.id} className="overflow-hidden transition-all hover:shadow-lg">
            <div className="aspect-video overflow-hidden bg-muted">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between items-center">
              <div className="font-bold">{item.price} Coins</div>
              <Button 
                onClick={() => handlePurchase(item.name, item.price)}
                disabled={shopData.silverCoins < item.price}
              >
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
