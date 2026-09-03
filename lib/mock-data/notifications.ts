export type NotificationItem = {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'success' | 'warning';
};

export const notificationsSeed: NotificationItem[] = [
  {
    id: 'n1',
    title: 'Assessment published',
    message: 'Python Fundamentals Quiz is now live for students.',
    time: '2 minutes ago',
    read: false,
    type: 'success',
  },
  {
    id: 'n2',
    title: 'Skill gap alert',
    message: 'AWS proficiency is below target for 68 students in BSc-IT.',
    time: '18 minutes ago',
    read: false,
    type: 'warning',
  },
  {
    id: 'n3',
    title: 'Opportunity match',
    message: 'Nexa Labs internship matches 3 students in your cohort.',
    time: '1 hour ago',
    read: true,
    type: 'info',
  },
];

// Admin notification shape (different from academician notifications)
export type AdminNotification = {
  id: string;
  title: string;
  detail: string;
  time: string;
  unread: boolean;
  tone: 'warning' | 'success' | 'info';
};

export const notifications: AdminNotification[] = [
  {
    id: 'an1',
    title: 'New industry partner joined',
    detail: 'TechCorp Innovations has completed verification.',
    time: '5 minutes ago',
    unread: true,
    tone: 'success',
  },
  {
    id: 'an2',
    title: 'Skill gap threshold exceeded',
    detail: 'AWS proficiency below 40% for 68 students — action needed.',
    time: '20 minutes ago',
    unread: true,
    tone: 'warning',
  },
  {
    id: 'an3',
    title: 'Assessment cycle completed',
    detail: '152 students finished the Python Fundamentals Quiz.',
    time: '1 hour ago',
    unread: false,
    tone: 'info',
  },
];

