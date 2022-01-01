const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");

const db = require("../../data/database");

router.get("/", (req, res) => {
    res.send(`
         GET: /api/tests - List Tests <br> 
        POST: /api/tests - Create Test <br> 
        POST: /api/tests/:id/edit - Update Test <br> 
        POST: /api/tests/:id/delete - Delete Test
    `);
});

router.get("/tests", async (req, res) => {
    const tests = await db.getDb().collection("test").find().toArray();

    res.json({ tests: tests });
});

router.post("/tests", async (req, res) => {
    const name = req.body.name;
    const date = new Date();

    await db
        .getDb()
        .collection("test")
        .insertOne({ name: name, createdAt: date });

    return res.status(200);
});

router.post("/tests/:id/edit", async (req, res) => {
    const TestId = ObjectId(req.params.id);
    const name = req.body.name;

    await db
        .getDb()
        .collection("test")
        .updateOne({ _id: TestId }, { $set: { name: name } });

    return res.status(200);
});

router.post("/tests/:id/delete", async (req, res) => {
    const TestId = new ObjectId(req.params.id);

    await db.getDb().collection("test").deleteOne({ _id: TestId });

    return res.status(200);
});

module.exports = router;
