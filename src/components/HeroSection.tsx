
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-black to-background py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-center opacity-10 bg-no-repeat bg-cover"></div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl md:text-6xl font-bold tracking-tight text-white">
          Киберспортивные команды <span className="text-primary animate-pulse-slow">CS2</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
          Полная информация о лучших командах мира, их составах, достижениях
          и предстоящих турнирах.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/team">Все команды</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/tournaments">Турниры</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
