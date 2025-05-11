const host = window.location.hostname;

  if (host.includes('blooket.com')) {
        fetch("https://cdn.jsdelivr.net/gh/Blooket-Council/Blooket-Cheats@latest/cheats/gui.min.js").then(r => r.text()).then(r => eval(r))
    } else if (host.includes('kahoot.it')) {
        fetch("https://cdn.jsdelivr.net/gh/jokeri2222/KaHack@latest/KaHack!.user.js").then(r => r.text()).then(r => eval(r))
    } else if (host.includes('edpuzzle.com')) {
        fetch("https://cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js").then(r => r.text()).then(r => eval(r))
    } else if (host.includes('quizlet.com')) {
        fetch("https://cdn.jsdelivr.net/gh/jokeri2222/Quizlet-Hack@latest/QuizletHack.user.js").then(r => r.text()).then(r => eval(r))
    } else if (host.includes('gimkit.com')) {
        fetch("https://cdn.jsdelivr.net/gh/TheLazySquid/GimkitCheat@latest/build/bundle.bookmarklet.txt").then(r => r.text()).then(r => eval(r))
    } else {
        alert('You are not on a supported website! Supported websites are:\nBlooket, Kahoot, Edpuzzle, Quizlet, Gimkit');
    }