import ratelimit from '../config/upstash.config.js';

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit('my-rate-limit');

    if (!success) {
      return res.status(429).json({
        message: 'Too many requests, please try again later.',
        success: false,
      });
    }
    next();
  } catch (error) {
    console.error('Rate limit error', error.message);
    next(error);
  }
};

export default rateLimiter;
