
import { Link } from 'react-router-dom';
import { Trophy, Users, Flag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export interface TeamProps {
  id: string;
  name: string;
  logo: string;
  country: string;
  countryCode: string;
  rank: number;
  achievements: {
    title: string;
    year: number;
  }[];
  players: {
    name: string;
    nickname: string;
    role: string;
  }[];
}

const TeamCard = ({ team }: { team: TeamProps }) => {
  return (
    <Card className="w-full overflow-hidden transition-all hover:shadow-lg hover:border-primary/50 animate-fade-in">
      <CardHeader className="p-4 pb-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-md overflow-hidden flex items-center justify-center bg-accent/30">
              {team.logo ? (
                <img 
                  src={team.logo} 
                  alt={`${team.name} logo`} 
                  className="w-full h-full object-contain p-1" 
                />
              ) : (
                <Users className="w-10 h-10 text-primary" />
              )}
            </div>
            <div>
              <CardTitle className="text-xl">{team.name}</CardTitle>
              <div className="flex items-center mt-1 text-sm text-muted-foreground">
                <Flag className="h-3 w-3 mr-1" />
                <span>{team.country}</span>
                <Badge variant="outline" className="ml-2 text-xs">
                  #{team.rank}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="mb-3">
          <h4 className="text-sm font-medium mb-1 flex items-center">
            <Trophy className="h-3 w-3 mr-1 text-primary" />
            Основные достижения
          </h4>
          <div className="space-y-1">
            {team.achievements.slice(0, 2).map((achievement, index) => (
              <div key={index} className="text-sm text-muted-foreground flex items-center">
                <span className="text-xs bg-accent/50 rounded px-1 mr-2">{achievement.year}</span>
                <span>{achievement.title}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-1 flex items-center">
            <Users className="h-3 w-3 mr-1 text-primary" />
            Состав
          </h4>
          <div className="space-y-1">
            {team.players.slice(0, 3).map((player, index) => (
              <div key={index} className="text-sm flex items-center justify-between">
                <span className="font-medium">{player.nickname}</span>
                <span className="text-xs text-muted-foreground">{player.role}</span>
              </div>
            ))}
            {team.players.length > 3 && (
              <div className="text-xs text-muted-foreground text-right">
                И еще {team.players.length - 3} игрока(ов)
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link to={`/team/${team.id}`}>
            Подробнее
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TeamCard;
