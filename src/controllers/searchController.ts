import { Request, Response } from 'express';
import Restaurant from '../models/Restaurant';
import connectDB from '../utils/connectDB';

export const searchRestaurants = async (req: Request, res: Response) => {
  await connectDB();

  const { page = 1, limit = 10, query = '' } = req.query;

  try {
    const restaurants = await Restaurant.find({ name: { $regex: query, $options: 'i' } })
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    const total = await Restaurant.countDocuments({ name: { $regex: query, $options: 'i' } });

    res.json({
      page: Number(page),
      limit: Number(limit),
      total,
      restaurants
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};
