import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const statsData = {
  totalSilverCoins: 850,
  distribution: [
    { category: 'Attendance', coins: 350, percentage: 41 },
    { category: 'Homework', coins: 280, percentage: 33 },
    { category: 'Participation', coins: 150, percentage: 18 },
    { category: 'Bonuses', coins: 70, percentage: 8 },
  ],
  weekly: [
    { week: 'Week 1', coins: 45 },
    { week: 'Week 2', coins: 60 },
    { week: 'Week 3', coins: 40 },
    { week: 'Week 4', coins: 90 },
    { week: 'Week 5', coins: 75 },
  ]
};

const StatsPage = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold tracking-tight">Ko'rsatgichlarim (Statistics)</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Silver Coins Overview</CardTitle>
          <CardDescription>How you've earned your coins</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <div className="text-5xl font-bold">{statsData.totalSilverCoins}</div>
            <div className="text-muted-foreground mt-1">Total Silver Coins Earned</div>
          </div>
          
          <div className="space-y-6">
            {statsData.distribution.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>{item.category}</span>
                  <div className="flex space-x-4">
                    <span className="text-muted-foreground">{item.coins} coins</span>
                    <span>{item.percentage}%</span>
                  </div>
                </div>
                <Progress value={item.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Earnings</CardTitle>
            <CardDescription>Your recent silver coin earnings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-end gap-2">
              {statsData.weekly.map((week, index) => {
                const maxCoins = Math.max(...statsData.weekly.map(w => w.coins));
                const height = (week.coins / maxCoins) * 100;
                
                return (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div 
                      className="w-full bg-primary rounded-t-sm transition-all hover:bg-primary/80" 
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-xs text-muted-foreground">{week.week}</span>
                    <span className="font-medium">{week.coins}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
            <CardDescription>Milestones reached this semester</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>
                </div>
                <div>
                  <div className="font-medium">Perfect Attendance</div>
                  <div className="text-muted-foreground text-sm">Two weeks of 100% attendance</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                </div>
                <div>
                  <div className="font-medium">Homework Hero</div>
                  <div className="text-muted-foreground text-sm">Completed 10 consecutive homework assignments</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                </div>
                <div>
                  <div className="font-medium">Active Participant</div>
                  <div className="text-muted-foreground text-sm">Participated actively in 5 class discussions</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </div>
                <div>
                  <div className="font-medium">Rising Star</div>
                  <div className="text-muted-foreground text-sm">Improved performance for 3 consecutive weeks</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StatsPage;
