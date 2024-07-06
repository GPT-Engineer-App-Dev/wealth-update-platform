import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to Financial Times</h1>
        <p className="text-lg mb-6">Your trusted source for financial news and insights.</p>
        <Button variant="primary" size="lg">Subscribe</Button>
      </section>

      {/* Top Stories */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Top Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Article Title {i}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">This is a short description of the article. It provides a brief overview of the content.</p>
                <Button variant="link">Read more</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Market Data */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Market Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["S&P 500", "Dow Jones", "NASDAQ"].map((index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{index}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Current Value: 4,500</p>
                <p className="text-green-500">+1.2%</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Latest News */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex justify-between items-center">
              <p>Latest news article title {i}</p>
              <span className="text-gray-500">10 mins ago</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;