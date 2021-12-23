import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import { getMomentazos, postMomentazos } from "../../firebase/client";

export default async function momentazos(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === "GET") {
    const momentazos = await getMomentazos()
    res.status(200).json(momentazos)
  } else {
    
    const Momentazo = z.object({
      title: z.string(),
      date: z.string(),
      url: z.string(),
      description: z.string().optional(),
      author: z.string().optional()
    })

    try {
      Momentazo.parse(req.body)
      postMomentazos(req.body)
      res.status(200).json({message: "añadido con éxito"})
    } catch {
      res.status(500).json({message: "req.body no coincide con la estructura de un momentazo"})
    }
  }
}
