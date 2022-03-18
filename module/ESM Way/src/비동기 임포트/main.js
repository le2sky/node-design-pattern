const SUPPORTED_LANGUAGES = ["en", "es", "it", "kr"];
const selectedLanguage = process.argv[2];

if (!SUPPORTED_LANGUAGES.includes(selectedLanguage)) {
  console.error("the specified language is not supported");
  process.exit(1);
}

const translationModule = `./strings-${selectedLanguage}.js`;
import(translationModule).then((strings) => {
  console.log(strings.HELLO);
});
