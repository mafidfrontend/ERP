import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const shopData = {
  silverCoins: 850,
  items: [
    { 
      id: 1, 
      name: 'Extra Homework Pass', 
      description: 'Skip one homework assignment without penalty', 
      price: 300,
      image: 'https://i.imgur.com/JR0SCJ6.png'
    },
    { 
      id: 2, 
      name: 'Late Arrival Voucher', 
      description: 'One-time permission to arrive late without attendance impact', 
      price: 200,
      image: 'https://i.imgur.com/R5rLMU3.png'
    },
    { 
      id: 3, 
      name: 'Bonus Points Certificate', 
      description: 'Get 10 extra points on any assignment', 
      price: 500,
      image: 'https://i.imgur.com/wgF08S7.png'
    },
    { 
      id: 4, 
      name: 'Exclusive Notebook', 
      description: 'Premium notebook with educational center logo', 
      price: 150,
      image: 'https://i.imgur.com/uEyMCva.png'
    },
    { 
      id: 5, 
      name: 'Special Certificate', 
      description: 'Certificate of Achievement to display your success', 
      price: 400,
      image: 'https://i.imgur.com/Tzm3NyB.png'
    },
    { 
      id: 6, 
      name: 'Virtual High Five', 
      description: 'Get a personalized video high five from your teacher', 
      price: 100,
      image: 'https://i.imgur.com/L47JyFl.png'
    }
  ]
};

const ShopPage = () => {
  const { toast } = useToast();
  
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
