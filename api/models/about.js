'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  AboutSchema = new Schema({
    name: {
      type: String,
      required: [true, 'Укажите название']
    },
    percents: {
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