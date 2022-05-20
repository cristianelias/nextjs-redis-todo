import { uuid } from "uuidv4";
import RedisClient from "../../../services/redisClient";

const logger = require("pino")();
const apiLogger = logger.child({ operation: "api-request" });

export default async function handler(req, res) {
  // Validations
  if (req.method !== "GET") {
    const message = "Wrong HTTP method received, use GET instead.";
    apiLogger.error(message, JSON.stringify(req.body));
    return res.status(400).json({
      message,
    });
  }

  const DB_KEY = "tasks";
  const defaultQuantity = 3;
  const quantity = req.query.quantity
    ? parseInt(req.query.quantity)
    : defaultQuantity;

  // Fetch all tasks from DB
  const redisClient = new RedisClient();
  let tasksFromDB = await redisClient.read({
    key: DB_KEY,
    onSuccess: () => apiLogger.info("Successfully retrieved tasks."),
    onError: () => apiLogger.error("Failed to retrieve tasks."),
  });

  let totalTasks;

  if (!Array.isArray(tasksFromDB)) {
    // If there are no tasks on the DB, we must create the total quantity
    totalTasks = await createTasks({
      quantity,
    });
  } else if (tasksFromDB.length < quantity) {
    // If the requested tasks are more than what the DB has stored, then we must create the difference
    let newTasks = await createTasks({
      quantity: quantity - tasksFromDB.length,
    });
    totalTasks = [...tasksFromDB, ...newTasks];
  } else {
    // If the the requested tasks are less than what the DB has stored, the we must delete the difference
    totalTasks = tasksFromDB.slice(0, quantity);
  }

  redisClient.write({
    key: DB_KEY,
    payload: totalTasks,
    onSuccess: () => apiLogger.info("Successfully persisted tasks."),
    onError: () => apiLogger.error("Failed to persist tasks."),
  });

  res.status(200).json(totalTasks);
}

const createTasks = async ({ quantity }) => {
  const DOMAIN = "https://lorem-faker.vercel.app/api";
  const response = await fetch(`${DOMAIN}?quantity=${quantity}`);
  const payload = await response.json();

  return payload.map((title) => ({
    id: uuid(),
    title,
    status: "todo",
  }));
};
