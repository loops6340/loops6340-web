import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function momentazos(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === "GET") {
    const momentazos = await prisma.momentazo.findMany()
    res.status(200).json(momentazos)
  } else if (req.method === "POST") { 
    const result = await prisma.momentazo.create({
	data: req.body
    })
    res.status(200).json(result)
  }

 res.status(200).json({})
}
