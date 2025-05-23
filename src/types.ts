export interface MenuItem {
    id: number;
    path: string;
    title: string;
}

export interface Settings {
    id: number;
    theme: "light" | "dark";
    font: "sans" | "serif" | string;
    notifications: string[];
}

export interface StatCategory {
    category: string;
    coins: number;
    percentage: number;
}

export interface WeeklyStat {
    week: string;
    coins: number;
}

export interface Stats {
    id: number;
    totalSilverCoins: number;
    distribution: StatCategory[];
    weekly: WeeklyStat[];
}

export interface ShopItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export interface Shop {
    silverCoins: number;
    items: ShopItem[];
}

export interface RankingStudent {
    id: number;
    name: string;
    points: number;
    rank: number;
    isCurrentUser?: boolean;
}

export interface Ranking {
    currentRank: number;
    silverCoins: number;
    students: RankingStudent[];
}

export interface Profile {
    id: number;
    name: string;
    email: string;
    phone: string;
    group: string;
    address: string;
    birthday: string;
    parentPhone: string;
    joinDate: string;
    profileImage: string;
}

export interface PaymentHistory {
    id: number;
    date: string;
    amount: string;
    status: "Paid" | "Upcoming" | string;
}

export interface Payments {
    nextPayment: {
        date: string;
        amount: string;
        status: "Upcoming" | string;
    };
    history: PaymentHistory[];
}

export interface Student {
    name: string;
    password: string;
    points: number;
    nextPayment: {
        date: string;
        amount: string;
    };
    attendance: number;
    homework: number;
}

export interface Teacher {
    name: string;
    email: string;
    phone: string;
}

export interface GroupSchedule {
    day: string;
    time: string;
    room: string;
}

export interface Group {
    name: string;
    teacher: Teacher;
    schedule: GroupSchedule[];
    students: number;
    startDate: string;
    endDate: string;
}

export interface RootData {
    menuItems: MenuItem[];
    settings: Settings;
    stats: Stats;
    shop: Shop;
    ranking: Ranking;
    profile: Profile;
    payments: Payments;
    student: Student;
    group: Group;
}