# shopGrid - Server Side

## Project Overview
This is the server-side repository for the **shopGrid** web application. The backend is developed using **Node.js**, **Express.js**, and **MongoDB**. It manages product data with features like filtering, pagination, and product counting. The server communicates with a frontend hosted on Firebase.

## Features
- **Product Filtering**: Fetch products based on search text, brand, category, and price range.
- **Pagination**: Efficient loading of products with page navigation.
- **Product Count**: API endpoint to get the total number of products in the database.

## Installation Instructions

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/AbuRaihan32/ShopGrid-server-side.git
    cd <repository-folder>
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:
    Create a `.env` file in the root of your project with the following variables:
    ```env
    PORT=5000
    USER_DB=ShopGrid
    PASS_DB=fIocDX2z2Wi2O1Qc
    ```

## Running the Server

1. **Start the Development Server**:
    ```bash
    npm start
    ```
   The server will run on `http://localhost:5000` by default.

2. **Access API Endpoints**:
   - **Get Products**: `GET /products`
     - Query Parameters:
       - `page`: Page number for pagination (default: 0).
       - `size`: Number of products per page (default: 10).
       - `searchText`: Search term to filter products by name.
       - `brand`: Filter by brand name.
       - `category`: Filter by category.
       - `min`: Minimum price for filtering.
       - `max`: Maximum price for filtering.
     - Example: `GET /products?page=1&size=10&searchText=laptop&brand=Apple&category=Electronics&min=500&max=1500`
   - **Get Product Count**: `GET /productCount`
     - Returns the total number of products in the database.

## Database Setup

- **Database Connection**:
  The server connects to a MongoDB database using the connection string provided in the `.env` file. Ensure that your MongoDB credentials are correct and that the database `ShopGridDB` is available.

- **Dummy Data**:
  Insert at least 40 products manually into the MongoDB collection `products` or create an API to insert the data.

## Deployment

- **Deploying to a Cloud Platform**:
  - Ensure the environment variables are set up in the cloud platform's environment settings.
  - Deploy the code to the platform (e.g., Heroku, Vercel) and start the server.

## Contributing

Contributions are welcome! Please follow these guidelines:
- Write clear, concise commit messages.
- Adhere to coding standards and best practices.

## License

This project is licensed under the MIT License.

## Contact Information

For any questions or feedback, feel free to reach out:

- **Name**: Abu Raihan Mahfuz
- **Email**: abumahfuz3211@gmail.com
- **GitHub**: [AbuRaihan32](https://github.com/AbuRaihan32)
