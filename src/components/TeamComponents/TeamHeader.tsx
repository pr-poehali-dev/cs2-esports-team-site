
import { Badge } from '@/components/ui/badge';
import { CardDescription, CardTitle } from '@/components/ui/card';
import { Globe, Users } from 'lucide-react';
import { TeamProps } from '@/components/TeamCard';

interface TeamHeaderProps {
  team: TeamProps;
}

const TeamHeader = ({ team }: TeamHeaderProps) => {
  return (
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
  );
};

export default TeamHeader;
