
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getTeamById } from '@/data/teams';
import TeamHeader from '@/components/TeamComponents/TeamHeader';
import TeamInfoItems from '@/components/TeamComponents/TeamInfoItems';
import PlayersList from '@/components/TeamComponents/PlayersList';
import AchievementsList from '@/components/TeamComponents/AchievementsList';
import TeamLocation from '@/components/TeamComponents/TeamLocation';
import Footer from '@/components/Layout/Footer';
import Breadcrumb from '@/components/Layout/Breadcrumb';

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
        <Breadcrumb currentPage={team.name} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="pt-6">
                <TeamHeader team={team} />
                
                <TeamInfoItems country={team.country} rank={team.rank} />
                
                <Separator className="my-6" />
                
                <PlayersList players={team.players} />
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <AchievementsList achievements={team.achievements} />
            </Card>
            
            <Card>
              <TeamLocation country={team.country} />
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TeamPage;
