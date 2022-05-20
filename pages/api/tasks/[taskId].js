import RedisClient from "../../../services/redisClient";

const logger = require("pino")();
const apiLogger = logger.child({ operation: "api-request" });

export default async function handler(req, res) {
  const stringifiedBody = JSON.stringify(req.body);
  const BODY_ATTR_STATUS = "status";
  const QUERY_ID = "taskId";

  // Validations
  if (req.method !== "PUT") {
    apiLogger.error(
      "Wrong HTTP method received, use PUT instead.",
      stringifiedBody
    );
  } else if (!req.body.hasOwnProperty(BODY_ATTR_STATUS)) {
    apiLogger.error(
      `Missing ${BODY_ATTR_STATUS} property on payload.`,
      stringifiedBody
    );
  } else if (!req.query.hasOwnProperty(QUERY_ID)) {
    apiLogger.error(`Missing query ${QUERY_ID}.`, stringifiedBody);
  }

  const status = req.body[BODY_ATTR_STATUS];
  const taskId = req.query[QUERY_ID];

  const redisClient = new RedisClient();
  const DB_KEY = "tasks";

  const tasksFromDB = await redisClient.read({
    key: DB_KEY,
    onSuccess: () => apiLogger.info("Successfully retrieved tasks."),
    onError: () => apiLogger.error("Failed to retrieve tasks."),
  });

  tasksFromDB.forEach((task) => {
    if (task.id === taskId) {
      task.status = status;
    }
  });

  redisClient.write({
    key: DB_KEY,
    payload: tasksFromDB,
    onSuccess: () => {
      apiLogger.info("Successfully persisted tasks.");
      res.status(200).json(tasksFromDB);
    },
    onError: () => {
      apiLogger.error("Failed to persist tasks.");
      res.status(400).json();
    },
  });
}
