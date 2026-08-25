export const getUsers = (req, res) => {
  res.json({
    message: "All users",
  });
};

export const getUserById = (req, res) => {
  res.json({
    message: `User ${req.params.id}`,
  });
};
