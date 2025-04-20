
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, MapPin } from 'lucide-react';

interface TeamLocationProps {
  country: string;
}

const TeamLocation = ({ country }: TeamLocationProps) => {
  return (
    <>
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
            <p>{country}</p>
          </div>
        </div>
      </CardContent>
    </>
  );
};

export default TeamLocation;
