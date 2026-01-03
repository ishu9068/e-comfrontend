import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  // ===== Dummy Data =====
  const stats = {
    totalUsers: 400,
    totalSellers: 65,
    totalProducts: 1150,
    totalOrders: 870,
    ordersStatus: {
      processing: 130,
      onHold: 75,
      delivered: 580,
      cancelled: 85
    },
  };

  const salesTrend = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [120, 190, 300, 500, 420, 650],
        borderColor: "#0d47a1",
        backgroundColor: "rgba(13, 71, 161, 0.4)",
        tension: 0.3
      }
    ]
  };

  const ordersStatusData = {
    labels: ["Processing", "On Hold", "Delivered", "Cancelled"],
    datasets: [
      {
        label: "Orders",
        data: [
          stats.ordersStatus.processing,
          stats.ordersStatus.onHold,
          stats.ordersStatus.delivered,
          stats.ordersStatus.cancelled
        ],
        backgroundColor: ["#0288d1", "#f57c00", "#2e7d32", "#d32f2f"]
      }
    ]
  };

  const userPieData = {
    labels: ["Users", "Sellers"],
    datasets: [
      {
        data: [stats.totalUsers, stats.totalSellers],
        backgroundColor: ["#1976d2", "#0288d1"]
      }
    ]
  };

  const cardStyle = {
    color: "#fff",
    p: 2,
    borderRadius: 2,
    textAlign: "center",
    fontWeight: "bold"
  };

  return (
    <Box sx={{ p: 3, backgroundColor: "#e3f2fd", minHeight: "100vh" }}>
      <Typography variant="h4" fontWeight="bold" color="#0d47a1" mb={4}>
        Admin Dashboard
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ ...cardStyle, bgcolor: "#1565c0" }}>
            <Typography>Total Users</Typography>
            <Typography variant="h5">{stats.totalUsers}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ ...cardStyle, bgcolor: "#0d47a1" }}>
            <Typography>Total Sellers</Typography>
            <Typography variant="h5">{stats.totalSellers}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ ...cardStyle, bgcolor: "#1976d2" }}>
            <Typography>Total Products</Typography>
            <Typography variant="h5">{stats.totalProducts}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ ...cardStyle, bgcolor: "#0d47a1" }}>
            <Typography>Total Orders</Typography>
            <Typography variant="h5">{stats.totalOrders}</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Orders Status Cards */}
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Orders Status
      </Typography>
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ ...cardStyle, bgcolor: "#0288d1" }}>
            <Typography>Processing</Typography>
            <Typography variant="h5">{stats.ordersStatus.processing}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ ...cardStyle, bgcolor: "#f57c00" }}>
            <Typography>On Hold</Typography>
            <Typography variant="h5">{stats.ordersStatus.onHold}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ ...cardStyle, bgcolor: "#2e7d32" }}>
            <Typography>Delivered</Typography>
            <Typography variant="h5">{stats.ordersStatus.delivered}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ ...cardStyle, bgcolor: "#d32f2f" }}>
            <Typography>Cancelled</Typography>
            <Typography variant="h5">{stats.ordersStatus.cancelled}</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Sales Trend
            </Typography>
            <Line data={salesTrend} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Orders Status
            </Typography>
            <Bar data={ordersStatusData} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h12" fontWeight="bold" mb={2}>
              Users vs Sellers
            </Typography>
            <Pie data={userPieData} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
