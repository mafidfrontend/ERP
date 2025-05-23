import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const rankingData = {
  currentRank: 7,
  silverCoins: 850,
  students: [
    { id: 1, name: 'Kamron Alimov', points: 1250, rank: 1 },
    { id: 2, name: 'Shahzoda Rahimova', points: 1150, rank: 2 },
    { id: 3, name: 'Bobur Karimov', points: 1080, rank: 3 },
    { id: 4, name: 'Nilufar Azizova', points: 950, rank: 4 },
    { id: 5, name: 'Javohir Turdiev', points: 920, rank: 5 },
    { id: 6, name: 'Malika Yusupova', points: 890, rank: 6 },
    { id: 7, name: 'Aziz Karimov', points: 850, rank: 7, isCurrentUser: true },
    { id: 8, name: 'Nodira Safarova', points: 820, rank: 8 },
    { id: 9, name: 'Umid Rustamov', points: 790, rank: 9 },
    { id: 10, name: 'Zarina Ikramova', points: 750, rank: 10 },
  ]
};

const RankingPage = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold tracking-tight">Reyting (Ranking)</h1>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Your Ranking</CardTitle>
            <CardDescription>Current position in leaderboard</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-6xl font-bold text-primary">#{rankingData.currentRank}</div>
            <p className="mt-2 text-muted-foreground">Keep up the good work!</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Silver Coins</CardTitle>
            <CardDescription>Your current balance</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-6xl font-bold">{rankingData.silverCoins}</div>
            <p className="mt-2 text-muted-foreground">Use your coins in the shop</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Student Leaderboard</CardTitle>
          <CardDescription>Top performers in your group</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Rank</TableHead>
                <TableHead>Student</TableHead>
                <TableHead className="text-right">Silver Coins</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rankingData.students.map((student) => (
                <TableRow 
                  key={student.id} 
                  className={student.isCurrentUser ? "bg-muted" : ""}
                >
                  <TableCell className="font-medium">
                    {student.rank === 1 && "🥇"}
                    {student.rank === 2 && "🥈"}
                    {student.rank === 3 && "🥉"}
                    {student.rank > 3 && `#${student.rank}`}
                  </TableCell>
                  <TableCell>
                    {student.name}
                    {student.isCurrentUser && " (You)"}
                  </TableCell>
                  <TableCell className="text-right">{student.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default RankingPage;
