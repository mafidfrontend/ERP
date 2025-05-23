import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const paymentsData = {
  nextPayment: {
    date: '2025-06-15',
    amount: '250000',
    status: 'Upcoming'
  },
  history: [
    { id: 1, date: '2025-05-15', amount: '250000', status: 'Paid' },
    { id: 2, date: '2025-04-15', amount: '250000', status: 'Paid' },
    { id: 3, date: '2025-03-15', amount: '250000', status: 'Paid' },
    { id: 4, date: '2025-02-15', amount: '250000', status: 'Paid' },
    { id: 5, date: '2025-01-15', amount: '250000', status: 'Paid' },
  ]
};

const PaymentsPage = () => {
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
      <h1 className="text-3xl font-bold tracking-tight">To'lovlarim (Payments)</h1>
      
      <Card className="border-2 border-primary">
        <CardHeader>
          <CardTitle>Next Payment</CardTitle>
          <CardDescription>Upcoming payment information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Due Date:</span>
              <span className="font-medium">{formatDate(paymentsData.nextPayment.date)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Amount:</span>
              <span className="font-bold text-xl">{paymentsData.nextPayment.amount} UZS</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Status:</span>
              <span className="text-orange-500 font-medium">{paymentsData.nextPayment.status}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
          <CardDescription>Record of your past payments</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Receipt ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentsData.history.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">#{payment.id}</TableCell>
                  <TableCell>{formatDate(payment.date)}</TableCell>
                  <TableCell>{payment.amount} UZS</TableCell>
                  <TableCell className="text-green-500">{payment.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentsPage;
