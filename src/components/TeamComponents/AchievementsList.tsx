
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Medal, Trophy } from 'lucide-react';

interface Achievement {
  title: string;
  year: number;
}

interface AchievementsListProps {
  achievements: Achievement[];
}

const AchievementsList = ({ achievements }: AchievementsListProps) => {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <Trophy className="h-5 w-5 mr-2 text-primary" />
          Достижения
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
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
    </>
  );
};

export default AchievementsList;
