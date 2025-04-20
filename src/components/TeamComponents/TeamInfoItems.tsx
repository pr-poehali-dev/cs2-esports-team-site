
import { Flag, Trophy, Calendar } from 'lucide-react';

interface TeamInfoItemsProps {
  country: string;
  rank: number;
}

const TeamInfoItems = ({ country, rank }: TeamInfoItemsProps) => {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      <div className="flex items-center text-sm">
        <Flag className="h-4 w-4 mr-1 text-primary" />
        <span className="font-medium mr-2">Страна:</span>
        <span>{country}</span>
      </div>
      <div className="flex items-center text-sm">
        <Trophy className="h-4 w-4 mr-1 text-primary" />
        <span className="font-medium mr-2">Мировой рейтинг:</span>
        <span>#{rank}</span>
      </div>
      <div className="flex items-center text-sm">
        <Calendar className="h-4 w-4 mr-1 text-primary" />
        <span className="font-medium mr-2">Следующий матч:</span>
        <span>Скоро</span>
      </div>
    </div>
  );
};

export default TeamInfoItems;
