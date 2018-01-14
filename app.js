const feathers = require('@feathersjs/feathers');
const app = feathers();

app.use('todo', {
  get(name){
    return Promise.resolve(
      {
        name
      }
    )
  }
});

function getTodo(name) {
  const service = app.service('todo');
  service.get(name).then(
    message => {
      console.log(message.name);
  });
}

getTodo('donut');
