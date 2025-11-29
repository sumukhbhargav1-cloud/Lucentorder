/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

// Authentication
export interface LoginRequest {
  passphrase: string;
}

export interface LoginResponse {
  ok: boolean;
}

// Menu
export interface MenuItem {
  id: string;
  version: string;
  item_key: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface MenuItemInput {
  item_key: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  image?: string;
}

// Orders
export interface OrderItem {
  id: string;
  order_id: string;
  item_key: string;
  name: string;
  qty: number;
  price: number;
}

export interface OrderItemInput {
  item_key: string;
  name: string;
  qty: number;
  price: number;
}

export interface HistoryEntry {
  when: string;
  action: string;
}

export interface Order {
  id: string;
  order_no: string;
  created_at: string;
  updated_at: string;
  guest_name: string;
  room_no: string;
  notes: string;
  source: string;
  menu_version: string;
  status: "New" | "Preparing" | "Ready" | "Served" | "Completed" | "Updated";
  payment_status: "Not Paid" | "Paid" | "Partial";
  requested_time: string | null;
  history: HistoryEntry[];
  total: number;
  items: OrderItem[];
}

export interface CreateOrderRequest {
  guest_name: string;
  room_no: string;
  notes?: string;
  items: OrderItemInput[];
  menu_version: string;
}

export interface AddItemsToOrderRequest {
  items: OrderItemInput[];
}

export interface UpdateOrderRequest {
  status?: string;
  payment_status?: string;
  requested_time?: string;
  notes?: string;
}

// Response types
export interface DemoResponse {
  message: string;
}

export interface ApiResponse<T> {
  ok?: boolean;
  data?: T;
  error?: string;
  details?: string;
}
