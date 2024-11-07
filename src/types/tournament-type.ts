

export interface ITournament {
  id: number;
  box_price: number;
  thumb:string;
  coming_time: string;
  title: string;
  subtitle: string;
  places: number;
  team_name:string;
  status:string;
  list_items: {
      id: number;
      img: string;
      name: string;
      price: number;
  }[];
  live_link:string;
  active?: boolean;
}