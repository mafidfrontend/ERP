import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const studentData = {
  name: 'Aziz Karimov',
  password: "pas123",
  points: 850,
  nextPayment: {
    date: '2025-06-15',
    amount: '250000'
  },
  attendance: 85,
  homework: 92
};

const HomePage = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, {studentData.name}!</h1>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Silver Coins</CardTitle>
            <CardDescription>Your current balance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{studentData.points}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Next Payment</CardTitle>
            <CardDescription>Due date</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{formatDate(studentData.nextPayment.date)}</div>
            <div className="text-muted-foreground mt-1">{studentData.nextPayment.amount} UZS</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Attendance</CardTitle>
            <CardDescription>Current semester</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Progress</span>
              <span className="text-muted-foreground">{studentData.attendance}%</span>
            </div>
            <Progress value={studentData.attendance} />
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Homework Completion</CardTitle>
          <CardDescription>Current semester progress</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between">
            <span>Progress</span>
            <span className="text-muted-foreground">{studentData.homework}%</span>
          </div>
          <Progress value={studentData.homework} />
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
