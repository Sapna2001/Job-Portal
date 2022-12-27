const express = require("express");
const app = express();
app.use(express.json());

const dbConnect = require("./dbConnect");
const port = process.env.PORT || 5000;
const path = require("path");
const jobsRoute = require("./routes/jobsRoute");
const userRoute = require('./routes/userRoute')
const companyRoute = require('./routes/companyRoute')

app.use('/api/jobs/' , jobsRoute)
app.use('/api/company/' , companyRoute)
app.use('/api/users/' , userRoute)

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

app.get("/", (req, res) => res.send("Job Portal"));
app.listen(port, () => console.log(`Job Portal app listening on port ${port}!`));