'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  AboutSchema = new Schema({
    title: {
      type: String,
      required: [true, 'Укажите название']
    },
    perc: {
      type: String,
      required: [true, 'Укажите процент']
    },
    type: {
      type: String,
      required: [true, 'Укажите тип']
    }
  });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('about', AboutSchema);