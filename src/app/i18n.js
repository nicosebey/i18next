import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "en",
        resources: {
                    en: {
                        translation: {
                            hello: "Hello {{name}} how are you this {{day}}",
                            world: "World",
                            title: " este es el titulo de mi pagina web",
                            buttons: {
                                save: "Save",
                                cancel: "Cancel",
                                login: "Login",
                            },
                    },
                },
                    fr: {
                        translation: {
                            hello: "Bonjour  {{name}} ",
                            world: "Monde",
                            buttons: {
                                save: "Save en frances",
                                cancel: "Cancel en frances",
                        },
                        }
                    }
        }
    });