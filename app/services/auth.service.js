const auth = require("../../configs/jwt");
const authenticateToken = (req, res, next) => {
  // Get token from Authorization header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Format: "Bearer token"

  if (token == null) return res.sendStatus(401); // No token

  try {
    // Verify the token and extract user information
    const user = auth.verifyToken(token, process.env.KEY_TOKEN);
    req.user = user; // Attach user info to request object
    next(); // Pass control to the next handler
  } catch (error) {
    res.sendStatus(403); // Forbidden if token is invalid or expired
  }
};

module.exports = authenticateToken;
