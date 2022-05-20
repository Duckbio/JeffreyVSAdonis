export default function cookie(score) {
    const cookieStorage = {
        getItem: (key) => {
            const cookies = document.cookie
                .split(';')
                .map(cookie => cookie.split('='))
                .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {})
            return cookies[key];
        },
        setItem: (key, value) => {
            document.cookie = `${key}=${value}`
        },
      }
      const storageType = cookieStorage;
      const consentPropertyName = 'vs_consent';
      const cookieValue = 'cookieValue';
      var val;
    
      const shouldShowPopUp = () => !storageType.getItem(consentPropertyName);
      const saveToStorage = () => storageType.setItem(consentPropertyName, true);
      const getValue = () => storageType.getItem(cookieValue);
      const setValue = () => storageType.setItem(cookieValue, 0);
    
      window.onload = () => {
        if (shouldShowPopUp()) {
            const consent = window.confirm('Agree to store the progress you have made?');
            if (consent) {
              saveToStorage();
            }
        } else {
            if (!getValue()) {
                setValue();
            } else {
                val = getValue();
            }
        }
    };
}
