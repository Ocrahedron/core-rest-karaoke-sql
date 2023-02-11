const express = require('express');
// const ReactDOMServer = require('react-dom/server');
// const React = require('react');

const Entries = require('../views/entries/Entries');
const EditEntry = require('../views/entries/EditEntry');
const NewEntry = require('../views/entries/NewEntry');
const ShowEntry = require('../views/entries/ShowEntry');
const renderTemplate = require('../lib/renderTemplate');
const { Entry } = require('../db/models');

const router = express.Router();

router.get('/entries', async (req, res) => {
  const entries = await Entry.findAll();
  renderTemplate(Entries, { entries }, res);
});

router.get('/form', async (req, res) => {
  renderTemplate(NewEntry, null, res);
});

router.post('/new-post', async (req, res) => {
  const entry = await Entry.create(req.body.entry);
  try {
    await entry.save();
    // throw Error('You shall not pass');
    res.redirect(`one-entry/${entry.id}`);
  } catch (err) {
    renderTemplate(NewEntry, { errors: [err] }, res);
  }
});

router.get('/one-entry/:id', async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  renderTemplate(ShowEntry, { entry }, res);
});

//кнопка edit
router.get('/one-entry-form/:id', async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  // renderTemplate(EditEntry, { entry }, res);
  res.sendStatus(200);
});

//кнопка update
// router.put('/entry/:id', async (req, res) => {
//   const entry = await Entry.findOne({ where: { id: req.params.id } });
//   console.log('111111', req.params.id);
//   const { singer, songTitle } = req.body.entry;
//   console.log('--------', singer);
//   entry.singer = singer;
//   entry.songTitle = songTitle;
//   entry.save();
//   return res.redirect(`/one-entry/${entry.id}`);
// });

router.delete('/entry/:id', async (req, res) => {
  await Entry.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

module.exports = router;
