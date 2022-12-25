export const identityQuery = (search, casing) => ({
  $or: [
    { id: search },
    {
      username: {
        $regex: `^${search}$`,
        // ^ = Starts with
        $options: casing ? '' : 'i', // i = case insensitive
      },
    },
    { fullName: search },
  ],
});
