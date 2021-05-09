const AccountsRepository = require('../repositories/AccountsRepository');

class AccountController {
  async index(request, response) {
    //Listar os registros
    const { orderBy } =  request.query;
    const accounts = await AccountsRepository.findAll(orderBy);

    response.json(accounts);
  }

  async show(request, response) {
    // Obter UM registro
    const { id } = request.params;

    const account = await AccountsRepository.findById(id);

    if (!account) {
      return response.status(404).json({ error: 'user not found' });
    }

    response.json(account);
  }

  async store(request, response) {
    //Criar novo registro
    const { name, zipcode, email, username, password} = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' })
    }

    if (!email) {
      return response.status(400).json({ error: 'email is required' })
    }

    if (!zipcode) {
      return response.status(400).json({ error: 'email is required' })
    }

    if (!username) {
      return response.status(400).json({ error: 'username is required' })
    }

    if (!password) {
      return response.status(400).json({ error: 'password is required' })
    }

    const accountExists = await AccountsRepository.findByUsername(username);
    if(accountExists) {
      return response.status(400).json({ error: 'This user is already in use' })
    }

    const account = await AccountsRepository.create({
      name, zipcode, email, username, password
    });

    response.json(account);
  }

  async update(request, response) {
    //editar um registro
    const { id } = request.params;
    const { name, zipcode, email, username, password } = request.body;

    const accountExists = await AccountsRepository.findById(id);
    if(!accountExists) {
      return response.status(404).json({ error: 'User not found'});
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' })
    }

    if (!zipcode) {
      return response.status(400).json({ error: 'Name is required' })
    }

    if (!email) {
      return response.status(400).json({ error: 'email is required' })
    }

    if (!username) {
      return response.status(400).json({ error: 'username is required' })
    }

    if (!password) {
      return response.status(400).json({ error: 'password is required' })
    }

    const accountByUsername = await AccountsRepository.findByUsername(username);
    if(accountByUsername && accountByUsername.id !== id) {
      return response.status(400).json({ error: 'This user is already in use' })
    }

    const account = await AccountsRepository.update(id, {
      name, zipcode, email, username, password
    });

    response.json(account);
  }

  async delete(request, response) {
    //deletar um registro
    const { id } = request.params;

    await AccountsRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new AccountController();