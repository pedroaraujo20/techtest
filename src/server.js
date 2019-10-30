import cron from 'node-cron';
import app from './app';
import TrmController from './app/controllers/TrmController';

cron.schedule('0 7 * * *', () => {
  TrmController.store();
  console.log('New register added!');
});

app.listen(3333);
