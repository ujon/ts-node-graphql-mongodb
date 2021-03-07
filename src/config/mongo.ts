import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

/*
mongoose.connection.readyState
0: disconnected
1: connected
2: connecting
3: disconnecting
99: uninitialized
*/
export const middleware = () => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const state: number = mongoose.connection.readyState;
  await connectingProcess(state);
  next();
};

const connect = async (): Promise<void> => {
  try {
    const { MONGO_URI } = process.env;
    await mongoose.connect(MONGO_URI as string, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    throw new Error(err);
  }
};

const connectingProcess = async (state: number) => {
  switch (state) {
    case 1:
      break;
    case 2:
      setTimeout(() => connectingProcess(state), 1000);
      break;
    default:
      await connect();
      break;
  }
};
