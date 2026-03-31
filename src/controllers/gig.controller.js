import Gig from "../models/gig.model.js";

export const createGig = async (req, res) => {
  try {
    const { title, description, budget, category, deadline } = req.body;

    const gig = new Gig({
      title,
      description,
      budget,
      category,
      deadline,
      owner: req.user.id // from authMiddleware
    });

    await gig.save();

    res.status(201).json(gig);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};