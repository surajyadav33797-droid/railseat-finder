
const routes = {
  stations: "/stations/search",
  trains: "/routes/trains",
  seats: "/availability/seats"
};

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");

  const { kind, ...query } = req.query;

  if (req.method !== "GET" || !routes[kind]) {
    return res.status(400).json({
      error: { message: "Invalid request" }
    });
  }

  const key = process.env.RAILCORE_KEY;

  if (!key) {
    return res.status(503).json({
      error: { message: "RailCore key is missing" }
    });
  }

  const fields = {
    stations: ["q", "limit"],
    trains: ["from", "to", "date", "quota", "match"],
    seats: ["train_number", "from", "to", "date", "class", "quota"]
  };

  const params = new URLSearchParams();

  for (const field of fields[kind]) {
    if (typeof query[field] === "string") {
      params.set(field, query[field].slice(0, 90));
    }
  }

  try {
    const response = await fetch(
      "https://ir.railcore.tech/v1" +
      routes[kind] + "?" + params.toString(),
      {
        headers: { "X-RailCore-Key": key },
        signal: AbortSignal.timeout(18000)
      }
    );

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch {
    return res.status(502).json({
      error: {
        message: "RailCore connection failed"
      }
    });
  }
};
