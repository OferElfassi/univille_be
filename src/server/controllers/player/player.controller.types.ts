export interface IPlayerController {
  joinGame: IControlFn<never, { identity: string; gameCode: string }>;
  getStatus: IControlFn<never, { identity: string }>;
  setAchievement: IControlFn<
    never,
    { identity: string; gameCode: string; missionId: string }
  >;
}
