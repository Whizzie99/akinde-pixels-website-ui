export interface Message {
  id: string;
  text: string;
  sender: "user" | "admin";
  timestamp: Date;
}

export interface ChatState {
  isOpen: boolean;
  messages: Message[];
  currentMessage: string;
}

export interface ChatUser {
  id: string;
  name: string;
  avatar?: string;
  isOnline?: boolean;
}

export interface ChatSession {
  id: string;
  startTime: Date;
  endTime?: Date;
  userId: string;
  adminId?: string;
}
