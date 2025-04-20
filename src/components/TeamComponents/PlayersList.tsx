
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Users } from 'lucide-react';

interface Player {
  name: string;
  nickname: string;
  role: string;
}

interface PlayersListProps {
  players: Player[];
}

const PlayersList = ({ players }: PlayersListProps) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Users className="h-5 w-5 mr-2 text-primary" />
        Текущий состав
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {players.map((player, index) => (
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
  );
};

export default PlayersList;
