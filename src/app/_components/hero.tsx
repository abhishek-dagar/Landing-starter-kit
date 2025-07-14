import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <Container>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Product Name</h1>
        <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-8">A short, catchy description of your product goes here.</p>
        <Button>Get Started</Button>
      </Container>
    </section>
  );
} 