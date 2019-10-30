import axios from 'axios';
import Trm from '../schemas/Trm';

class TrmController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const trm = await Trm.paginate({}, { page, limit: 30 });

    return res.json(trm);
  }

  async store() {
    try {
      const response = await axios.get(
        `https://transferwise.com/gb/currency-converter/api/historic?source=USD&target=UYU&period=30`
      );

      await Trm.create(response.data[0]);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new TrmController();
