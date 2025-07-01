export interface UserData {
  name: string;
  studentId: string;
//   avatarUrl?: string;
}

export interface NavBarProps {
  isLoggedIn: boolean;
  currentPage?: 'signin' | 'dashboard' | 'home' | string;
  userData?: UserData;
}

