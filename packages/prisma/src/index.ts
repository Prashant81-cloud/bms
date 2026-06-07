import dotenv from 'dotenv';

dotenv.config();
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from '@prisma/adapter-pg';
import pg from "pg";



if (!process.env.DATABASE_URL) {
  throw new Error("Initialization Error: DATABASE_URL variable is missing from runtime scope.");
}

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)

export const prismaClient = new PrismaClient({adapter});

