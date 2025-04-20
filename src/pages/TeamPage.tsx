
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Medal, Calendar, Users, Flag, Globe, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getTeamById } from '@/data/teams';

const TeamPage = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const team = getTeamById(teamId || '');
  
  if (!team) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center flex-col p-8">
          <h1 className="text-2xl font-bold mb-4">Команда не найдена</h1>
          <p className="text-muted-foreground mb-6">Команда с ID "{teamId}" не существует или была удалена</p>
          <Button asChild>
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="ghost" size="sm" asChild className="gap-1">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Назад
            </Link>
          </Button>
          <Separator orientation="vertical" className="h-6" />
          <div className="text-sm text-muted-foreground">
            Команда / {team.name}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 rounded-md overflow-hidden flex items-center justify-center bg-accent/30 border border-border">
                    {team.logo ? (
                      <img 
                        src={team.logo} 
                        alt={`${team.name} logo`} 
                        className="w-full h-full object-contain p-2" 
                      />
                    ) : (
                      <Users className="w-12 h-12 text-primary" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        #{team.rank}
                      </Badge>
                      <Badge className="bg-primary/80">{team.country}</Badge>
                    </div>
                    <CardTitle className="text-3xl font-bold">{team.name}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <Globe className="h-3 w-3 mr-1" />
                      <span>Международная киберспортивная организация</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center text-sm">
                    <Flag className="h-4 w-4 mr-1 text-primary" />
                    <span className="font-medium mr-2">Страна:</span>
                    <span>{team.country}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Trophy className="h-4 w-4 mr-1 text-primary" />
                    <span className="font-medium mr-2">Мировой рейтинг:</span>
                    <span>#{team.rank}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1 text-primary" />
                    <span className="font-medium mr-2">Следующий матч:</span>
                    <span>Скоро</span>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Текущий состав
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {team.players.map((player, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-md bg-accent/10 hover:bg-accent/20 transition-colors">
                        <Avatar className="h-12 w-12 border border-border">
                          <AvatarFallback className="bg-primary/20 text-primary">
                            {player.nickname.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{player.nickname}</div>
                          <div className="text-sm text-muted-foreground">{player.name}</div>
                        </div>
                        <Badge variant="outline" className="ml-auto">
                          {player.role}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-primary" />
                  Достижения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {team.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <Medal className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{achievement.title}</div>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {achievement.year}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Расположение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-accent/20 rounded-md flex items-center justify-center">
                  <div className="text-muted-foreground text-center p-4">
                    <Globe className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>{team.country}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
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

export default TeamPage;
