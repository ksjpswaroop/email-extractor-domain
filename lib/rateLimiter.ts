```typescript
import { RateLimiterMemory } from 'rate-limiter-flexible';

// Define rate limit rules
const rateLimiter = new RateLimiterMemory({
  points: 10, // 10 requests
  duration: 1, // per 1 second by IP
});

export async function rateLimit(req, res, next) {
  try {
    await rateLimiter.consume(req.ip); // consume 1 point per request
    next();
  } catch (error) {
    res.status(429).send('Too Many Requests');
  }
}
```