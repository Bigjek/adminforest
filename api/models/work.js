'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  WorkSchema = new Schema({
    title: {
      type: String,
      required: [true, 'Укажите название проекта']
    },
    tech: {
      type: String,
      required: [true, 'Укажите технологию']
    },
    link: {
      type: String,
      required: [true, 'Укажите ссылку']
    },
    file: {
      type: String,
      required: [true, 'Загрузите файл']
    },
  });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('work', WorkSchema);