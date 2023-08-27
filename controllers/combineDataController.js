
export const getCombineData = async (req, res) => {
  try {
    const selectedMonthNumber = parseInt(req.query.month);

    const StatsData = await fetch(
      `http://localhost:5100/api/v1/app/stats?month=${selectedMonthNumber}`
    );
    const totalStats = await StatsData.json()

    const pieData = await fetch(
      `http://localhost:5100/api/v1/app/pieChart?month=${selectedMonthNumber}`
    );
    const pieChart = await pieData.json();

    const barData = await fetch(
      `http://localhost:5100/api/v1/app/barChart?month=${selectedMonthNumber}`
    );
    const barChart = await barData.json();

    const combinedData = {
      totalStats,
      pieChart,
      barChart,
    };

    res.status(200).json(combinedData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
