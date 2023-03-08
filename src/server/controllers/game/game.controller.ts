export interface IGameController {
  joinGame: IControlFn<never, { identity: string; gameId: string }>;
  isActive: IControlFn<never, { identity: string }>;
  timeLeft: IControlFn<never, { identity: string }>;
}
