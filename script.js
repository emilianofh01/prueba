if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Service worker registered', reg))
    .catch(err => console.warn('Service worker not registered', err))
}

// Evento para llamar la instalacion de la app
this.deferredPrompt = "";

window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  // Guardamos el evento para utilizarlo despues
  this.deferredPrompt = e;
});




// FUNCIONES O METODOS PARA ACTUALIZAR DESPUES DE UNA HORA, LA INFO DEL CLIENTE Y LAS
// NOTIFICACIONES PENDIENTES.
async function getUserData(token) {
  let res = await fetch('https://rv.devcobaja.com/api/update-info', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  return res.json();
}

loadNotifications = async ({ token = String }) => {
  let { data: res } = await axios({
    method: 'GET',
    url: 'https://rv.devcobaja.com/api/notifications',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })

  let { data } = res;
  let { length } = data.filter(e => !e.pivot.seen);

  return {
    last_request_date: Date.now(),
    pending_notifications: length
  }
}

const user = window.localStorage.usuario;
if (user) {
  let userObject = JSON.parse(user);
  const diff = new Date() - new Date(userObject.notifications.last_request_date);

  if (diff / (1000 * 60 * 60) >= 1) {
    getUserData(userObject.token).then(async ({ data: res }) => {

      Object.keys(userObject).map(attr => {
        if (attr == "token") return;
        userObject[attr] = res[attr];
      })

      const urlParam = new URLSearchParams(res.name).toString();
      userObject['notifications'] = await loadNotifications({ token: userObject.token });
      userObject['urlAvatar'] = `https://ui-avatars.com/api/?name=${urlParam}&background=1d1818&color=d9ac6c&size=128`;

      window.localStorage.clear();
      window.localStorage.setItem('usuario', JSON.stringify(userObject));

      console.log(userObject);
    });
  }
}

