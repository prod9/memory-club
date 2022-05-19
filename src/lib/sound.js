const sounds = {
	correct: 'yay.wav',
	wrong: 'http://www.stuffnewspaper.com/sounds/PEOPLE/boohiss.wav',
	applause: 'https://cdn.freesound.org/previews/333/333387_5884138-lq.mp3'
};

export const playCorrectSound = () => play('correct');
export const playWrongSound = () => play('wrong');
export const playApplauseSound = () => play('applause');

const play = async (sound) => {
	let audio = new Audio(sounds[sound]);
	audio.loop = false;
	audio.play();
};
