
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import TeamCard from '@/components/TeamCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { teams } from '@/data/teams';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const featuredTeams = teams.slice(0, 6);
  
  const filteredTeams = searchTerm 
    ? featuredTeams.filter(team => 
        team.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        team.players.some(player => 
          player.nickname.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : featuredTeams;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Топовые команды</h2>
              <p className="text-muted-foreground mt-1">Лучшие киберспортивные организации мира CS2</p>
            </div>
            
            <div className="relative mt-4 md:mt-0 w-full md:w-auto">
              <div className="flex gap-2">
                <div className="relative flex-grow">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Поиск команд и игроков"
                    className="pl-9 w-full md:w-[250px]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeams.map(team => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>
          
          {filteredTeams.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">По запросу "{searchTerm}" ничего не найдено</h3>
              <p className="text-muted-foreground mb-4">Попробуйте изменить поисковый запрос или сбросить фильтры</p>
              <Button onClick={() => setSearchTerm("")}>Сбросить поиск</Button>
            </div>
          )}
          
          <div className="flex justify-center mt-10">
            <Button asChild>
              <Link to="/team">
                Посмотреть все команды
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <footer className="mt-auto bg-accent/20 border-t border-accent/30 py-6">
        <div className="container mx-auto px-4">
          <Separator className="mb-6" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                &copy; 2024 КиберCS2 - Все права защищены
              </p>
            </div>
            <div className="flex gap-4">
              <Link to="/" className="text-sm hover:text-primary">Главная</Link>
              <Link to="/team" className="text-sm hover:text-primary">Команды</Link>
              <Link to="/tournaments" className="text-sm hover:text-primary">Турниры</Link>
              <Link to="/about" className="text-sm hover:text-primary">О нас</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
