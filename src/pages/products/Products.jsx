import { useMemo, useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import productsData from "../../data/productsData";

const Products = () => {
  const { category } = useParams();
  const [search, setSearch] = useState("");

  const products = useMemo(() => {
    let finalProducts = [...productsData];

    if (category) {
      const formattedCategory = decodeURIComponent(category)
        .replace(/-/g, " ")
        .toLowerCase();

      finalProducts = finalProducts.filter(
        (item) => item.category.toLowerCase() === formattedCategory
      );
    }

    return finalProducts;
  }, [category]);



  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const readableCategory = category
    ? category.replace(/-/g, " ")
    : "All Products";

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold" textTransform="capitalize">
          {readableCategory}
        </Typography>

        <TextField
          size="small"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ width: { xs: "100%", sm: 300 } }}
        />
      </Box>

      {filteredProducts.length === 0 ? (
        <Typography variant="h6" color="text.secondary">
          No products found
        </Typography>
      ) : (
        <Grid container spacing={3} alignItems="stretch">
          {filteredProducts.map((item) => (
            <Grid
              item
              key={item.id}
              display="flex"
              sx={{
                width: {
                  xs: "100%",
                  sm: "48%",
                  md: "32%",
                  lg: "18%",
                },
                mb: 2,
              }}
            >
              <ProductCard item={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Products;
