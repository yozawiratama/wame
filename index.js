exports.generate = function (phoneNo, msg) {
  let formatted = msg;

  //REMOVE NEWLINE
  formatted = sub(formatted, /\n/gm, '');

  //REMOVE OTHER HTML TAG
  formatted = sub(formatted, /<h1>/gm, '');
  formatted = sub(formatted, /<\/h1>/gm, '');
  formatted = sub(formatted, /<h2>/gm, '');
  formatted = sub(formatted, /<\/h2>/gm, '');
  formatted = sub(formatted, /<h3>/gm, '');
  formatted = sub(formatted, /<\/h3>/gm, '');
  formatted = sub(formatted, /<h4>/gm, '');
  formatted = sub(formatted, /<\/h4>/gm, '');
  formatted = sub(formatted, /<h5>/gm, '');
  formatted = sub(formatted, /<\/h5>/gm, '');
  formatted = sub(formatted, /<h6>/gm, '');
  formatted = sub(formatted, /<\/h6>/gm, '');
  formatted = sub(formatted, /<div>/gm, '');
  formatted = sub(formatted, /<\/div>/gm, '');
  formatted = sub(formatted, /<span>/gm, '');
  formatted = sub(formatted, /<\/span>/gm, '');

  //List
  formatted = sub(formatted, /<ul>/gm, '');
  formatted = sub(formatted, /<\/ul>/gm, '%0A');
  formatted = sub(formatted, /<ol>/gm, '');
  formatted = sub(formatted, /<\/ol>/gm, '%0A');
  formatted = sub(formatted, /<li>/gm, '-%20');
  formatted = sub(formatted, /<\/li>/gm, '%0A');

  //BOLD
  formatted = sub(formatted, /<b>/gm, '*');
  formatted = sub(formatted, /<\/b>/gm, '*');
  formatted = sub(formatted, /<strong>/gm, '*');
  formatted = sub(formatted, /<\/strong>/gm, '*');

  //ITALIC
  formatted = sub(formatted, /<i>/gm, '_');
  formatted = sub(formatted, /<\/i>/gm, '_');
  formatted = sub(formatted, /<em>/gm, '_');
  formatted = sub(formatted, /<\/em>/gm, '_');

  //STRIKETROUGH
  formatted = sub(formatted, /<s>/gm, '~');
  formatted = sub(formatted, /<\/s>/gm, '~');
  formatted = sub(formatted, /<strike>/gm, '~');
  formatted = sub(formatted, /<\/strike>/gm, '~');

  //BREAK
  formatted = sub(formatted, /<br>/gm, '%0A');
  formatted = sub(formatted, /<br \/>/gm, '%0A');

  //PARAGRAPH
  formatted = sub(formatted, /<p>/gm, '');
  formatted = sub(formatted, /<\/p>/gm, '%0A');

  //CODE and PRE
  formatted = sub(formatted, /<code>/gm, '```');
  formatted = sub(formatted, /<\/code>/gm, '```%0A');
  formatted = sub(formatted, /<pre>/gm, '```');
  formatted = sub(formatted, /<\/pre>/gm, '```%0A');

  //SPACE 
  formatted = sub(formatted, /( )/gm, '%20');

  return `https://api.whatsapp.com/send?phone=${phoneNo}&text=${formatted}`
};

const sub = (str, regex, subtitute) => str.replace(regex, subtitute);