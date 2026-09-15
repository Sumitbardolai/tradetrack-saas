export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          theme: 'light' | 'dark';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          theme?: 'light' | 'dark';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          theme?: 'light' | 'dark';
          created_at?: string;
          updated_at?: string;
        };
      };
      trades: {
        Row: {
          id: string;
          user_id: string;
          entry_price: number;
          exit_price: number | null;
          position_size: number;
          stop_loss: number;
          take_profit: number;
          strategy: string;
          market: string;
          timeframe: string;
          direction: 'long' | 'short';
          profit_loss: number | null;
          emotion: string | null;
          notes: string | null;
          screenshot_url: string | null;
          status: 'open' | 'closed';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          entry_price: number;
          exit_price?: number | null;
          position_size: number;
          stop_loss: number;
          take_profit: number;
          strategy: string;
          market: string;
          timeframe: string;
          direction: 'long' | 'short';
          profit_loss?: number | null;
          emotion?: string | null;
          notes?: string | null;
          screenshot_url?: string | null;
          status?: 'open' | 'closed';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          entry_price?: number;
          exit_price?: number | null;
          position_size?: number;
          stop_loss?: number;
          take_profit?: number;
          strategy?: string;
          market?: string;
          timeframe?: string;
          direction?: 'long' | 'short';
          profit_loss?: number | null;
          emotion?: string | null;
          notes?: string | null;
          screenshot_url?: string | null;
          status?: 'open' | 'closed';
          created_at?: string;
          updated_at?: string;
        };
      };
      strategies: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          description: string | null;
          win_rate: number;
          profit_factor: number;
          expectancy: number;
          total_trades: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          description?: string | null;
          win_rate?: number;
          profit_factor?: number;
          expectancy?: number;
          total_trades?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          description?: string | null;
          win_rate?: number;
          profit_factor?: number;
          expectancy?: number;
          total_trades?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
