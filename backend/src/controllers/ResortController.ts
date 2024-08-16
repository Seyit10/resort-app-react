import { Request, Response } from "express";
import Resort from "../models/resort";

const getResort = async (req: Request, res: Response) => {
  try {
    const resortId = req.params.resortId;

    const resort = await Resort.findById(resortId);

    if (!resort) {
      return res.status(404).json({ message: "resort yok" });
    }

    res.json(resort);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "bir şeyler ters gitti..." });
  }
};

const searchResort = async (req: Request, res: Response) => {
  try {
    const city = req.params.city;
    const searchQuery = (req.query.searchQuery as string) || "";
    const sortOption = (req.query.sortOption as string) || "lastUpdated";
    const page = parseInt(req.query.page as string) || 1;

    let query: any = {};

    query["city"] = new RegExp(`^${city}$`, "i");
    const cityCheck = await Resort.countDocuments(query);
    if (cityCheck === 0) {
      return res.status(404).json({
        data: [],
        pagination: {
          total: 0,
          page: 1,
          pages: 1,
        },
      });
    }

    if (searchQuery) {
      const searchRegex = new RegExp(searchQuery, "i");
      query["$or"] = [{ resorName: searchRegex }];
    }

    const pageSize = 10;
    const skip = (page - 1) * pageSize;

    const resorts = await Resort.find(query)
      .sort({ [sortOption]: 1 })
      .skip(skip)
      .limit(pageSize)
      .lean();

    const total = await Resort.countDocuments(query);

    const response = {
      data: resorts,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / pageSize),
      },
    };

    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "bir şeyler ters gitti" });
  }
};

export default {
  searchResort,
  getResort,
};
