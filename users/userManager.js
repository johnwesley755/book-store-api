const users = {};

export const registerUser = (req, res) => {
  const { username, password } = req.body;
  if (users[username]) return res.status(400).send("User exists");
  users[username] = { password };
  res.send("Registered successfully");
};

export const loginUser = (req, res) => {
  const { username, password } = req.body;
  if (users[username]?.password === password) {
    res.send("Login successful");
  } else {
    res.status(401).send("Invalid credentials");
  }
};
