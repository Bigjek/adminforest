const mongoose = require('mongoose');

module.exports.getAbouts = function (req, res) {
  // res.json('GET');
  const about = mongoose.model('about');

  about.find().then(items => {
    res.status(200).json({abouts: items});
  })
}

module.exports.createAbout = function (req, res) {
  //создаем новую запись блога и передаем в нее поля из формы
  const Model = mongoose.model('about');

  let item = new Model({
    name: req.body.name,
    percents: req.body.percents,
    type: req.body.type
  });
  //сохраняем запись в базе
  item
    .save()
    .then(item => {
      return res
        .status(201)
        .json({status: 'Запись успешно добавлена'});
    }, err => {
      //если есть ошибки, то получаем их список и так же передаем
      const error = Object
        .keys(err.errors)
        .map(key => err.errors[key].message)
        .join(', ');

      //обрабатываем  и отправляем
      res
        .status(404)
        .json({
          status: 'При добавление записи произошла ошибка: ' + error
        });
    });
}

module.exports.editAbout = function (req, res) {
  const id = req.params.id;

  let data = {
    name: req.body.name,
    percents: req.body.percents,
    type: req.body.type
  };

  const Model = mongoose.model('about');

  Model
    .findByIdAndUpdate(id, {$set: data} )
    .then((item) => {
      if (!!item) {
        res
          .status(200)
          .json({status: 'Запись успешно обновлена'});
      } else {
        res
          .status(404)
          .json({status: 'Запись в БД не обнаружена'});
      }
    })
    .catch((err) => {
      res
        .status(404)
        .json({
          status: 'При обновлении записи произошла ошибка: ' + err
        });
    });
}

module.exports.deleteAbout = function (req, res) {
  const id = req.params.id;
  const Model = mongoose.model('about');

  Model
    .findByIdAndRemove(id)
    .then((item) => {
      if (!!item) {
        res.status(200).json({status: 'Запись успешно удалена'});
      } else {
        res.status(404).json({status: 'Запись в БД не обнаружена'});
      }
    }, (err) => {
      res.status(404).json({
        status: 'При удалении записи произошла ошибка: ' + err
      });
    });
}