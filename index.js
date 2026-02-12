const userInfo = {
  username: "user1",
  password: "password123"
}
const maxAttempts = 3
const attemptCount = {}
const passwordAttempt = (maxAttempts - attemptCount)

function createLoginTracker(userInfo) {
  let attemptCount = 0

  const login = (passwordAttempt) => {
    if (attemptCount >= maxAttempts) {
      return 'Account locked due to too many failed login attempts'
    }

  attemptCount++

    if (passwordAttempt === userInfo.password) {
      return 'Login successful'
    } else {
      return `Attempt ${attemptCount}: Login failed`
    }
  }

  login.getAttemptCount = () => attemptCount
    
  return login
}



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};