const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("welcome to basic express app!")
});

app.post('/echo', (req, res) => {
    const body = req.body;
    res.json({
        message: "echoing your request",
        data: body,
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})