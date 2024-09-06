import { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'

function Hello(req:NextApiRequest,res:NextApiResponse) {
   res.status(200).json({name:"john doe"})
}

export default Hello