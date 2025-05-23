import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Group } from "@/types";
import { useEffect, useState } from "react";
import { getGroupItems } from "../services/groupService";

const GroupPage = () => {
    const [groupData, setItems] = useState<Group>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getGroupItems()
            .then(setItems)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Yuklanmoqda...</p>;
    return (
        <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl font-bold tracking-tight">My Group</h1>

            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>{groupData.name}</CardTitle>
                        <CardDescription>
                            Your current study group
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="grid grid-cols-2 gap-1">
                            <span className="text-muted-foreground">
                                Students:
                            </span>
                            <span>{groupData.students}</span>

                            <span className="text-muted-foreground">
                                Start Date:
                            </span>
                            <span>
                                {new Date(
                                    groupData.startDate
                                ).toLocaleDateString()}
                            </span>

                            <span className="text-muted-foreground">
                                End Date:
                            </span>
                            <span>
                                {new Date(
                                    groupData.endDate
                                ).toLocaleDateString()}
                            </span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Teacher Information</CardTitle>
                        <CardDescription>Your group instructor</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="grid grid-cols-2 gap-1">
                            <span className="text-muted-foreground">Name:</span>
                            <span>{groupData.teacher.name}</span>

                            <span className="text-muted-foreground">
                                Email:
                            </span>
                            <span>{groupData.teacher.email}</span>

                            <span className="text-muted-foreground">
                                Phone:
                            </span>
                            <span>{groupData.teacher.phone}</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Class Schedule</CardTitle>
                    <CardDescription>Weekly timetable</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Day</TableHead>
                                <TableHead>Time</TableHead>
                                <TableHead>Location</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {groupData.schedule.map((session, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">
                                        {session.day}
                                    </TableCell>
                                    <TableCell>{session.time}</TableCell>
                                    <TableCell>{session.room}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

export default GroupPage;
