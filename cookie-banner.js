(function () {
  var storageKey = 'ak-cookie-notice-accepted';

  try {
    if (window.localStorage.getItem(storageKey) === 'true') {
      return;
    }
  } catch (error) {
    // If localStorage is unavailable, the notice still appears for this visit.
  }

  var banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-live', 'polite');
  banner.setAttribute('aria-label', 'Cookie-Hinweis');
  banner.innerHTML =
    '<p>Diese Website verwendet technisch notwendige Cookies bzw. lokale Speicherfunktionen. Auf der Kontaktseite kann durch die Google-Maps-Einbindung eine Datenuebertragung an Google erfolgen. Weitere Informationen finden Sie im <a href="datenschutz.html">Datenschutz</a>.</p>' +
    '<button type="button">Verstanden</button>';

  var button = banner.querySelector('button');
  button.addEventListener('click', function () {
    try {
      window.localStorage.setItem(storageKey, 'true');
    } catch (error) {
      // Ignore storage errors and close the notice for the current page.
    }

    banner.remove();
  });

  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(banner);
  });
})();
