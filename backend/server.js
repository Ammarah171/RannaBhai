require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ta3nq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

//express app
const app = express()

//middleware
app.use(express.json())



app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
// app.use('/api/workouts', workoutRoutes)




async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const UserCollection = client.db("rannabhai").collection("users");
    const CategoryCollection = client.db("rannabhai").collection("categories");

    app.get('/categories', async(req, res)=>{
        const data = await CategoryCollection.find().toArray()
        res.send(data)
    })

    app.post('/categories', async (req, res) => {
        try {
            const categories = req.body; // Expecting an array of categories from the request body
            if (!Array.isArray(categories) || categories.length === 0) {
                return res.status(400).json({ message: 'Invalid input. Expected a non-empty array of categories.' });
            }
    
            const result = await CategoryCollection.insertMany(categories);
            res.status(201).json({
                message: `${result.insertedCount} categories added successfully!`,
                insertedIds: result.insertedIds
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to add categories', error: error.message });
        }
    });
    





    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000!!!')
})

app.get("/",(req, res)=> {
    res.send('Hello RannaBhai');
})