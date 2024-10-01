import { Sequelize } from 'sequelize';

// PostgreSQL database configuration
const sequelize = new Sequelize('mydatabase', 'user', 'password', {
  host: 'postgres_db', // This is the Docker service name
  dialect: 'postgres',  // Specify the database dialect
});

// Function to connect to the PostgreSQL database
const connectToDatabase = async () => {
  try {
    await sequelize.authenticate(); // Attempt to authenticate the connection
    console.log("Connected to the database successfully!");

    // // Optional: You can execute a test query if needed
    // const [results, metadata] = await sequelize.query('SELECT NOW()');
    // console.log("Test Query Result:", results);

  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

// Call the function to test the connection
export default connectToDatabase;
