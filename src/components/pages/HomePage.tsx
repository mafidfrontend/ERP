import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Student } from "@/types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { getStudentItems } from "../services/studentService";

const HomePage = () => {
    const navigate = useNavigate();

    const [studentData, setItems] = useState<Student>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getStudentItems()
            .then(setItems)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Yuklanmoqda...</p>;

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const handleLogout = () => {
        localStorage.removeItem("authenticated");
        toast.success("Successfully logged out!");
        navigate("/login");
    };

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight">
                    Welcome back, {studentData.name}!
                </h1>
                <button
                    onClick={handleLogout}
                    className="text-sm text-red-500 hover:underline mt-4 ml-4"
                >
                    Logout
                </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle>Silver Coins</CardTitle>
                        <CardDescription>Your current balance</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">
                            {studentData.points}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle>Next Payment</CardTitle>
                        <CardDescription>Due date</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">
                            {formatDate(studentData.nextPayment.date)}
                        </div>
                        <div className="text-muted-foreground mt-1">
                            {studentData.nextPayment.amount} UZS
                        </div>
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
                            <span className="text-muted-foreground">
                                {studentData.attendance}%
                            </span>
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
                        <span className="text-muted-foreground">
                            {studentData.homework}%
                        </span>
                    </div>
                    <Progress value={studentData.homework} />
                </CardContent>
            </Card>
        </div>
    );
};

export default HomePage;
