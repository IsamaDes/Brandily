export interface User {
    id: string;
    email: string;
    password: string;
    username: string;
    role: 'HRM' | 'Security' | 'Receptionist' | 'Viewer';
}