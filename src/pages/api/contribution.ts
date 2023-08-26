// pages/api/contributions.ts
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/Antares/events` // Replace with your GitHub username
    );
    const contributions = response.data.filter(
      (event: any) => event.type === "PushEvent" // Modify this based on the data you want to display
    );
    res.status(200).json(contributions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching GitHub contributions" });
  }
}
