export interface IHint {
  id: string;
  hint: string;
  type: 'location' | 'global';
  title: string;
  location: { x: number; y: number };
  image: string;
}
