export interface TranslationTypes {
    Portfolio: string,
    Projects: string,
    Skills: string,
    Contacts: string,
    Page_main: {
        title: string,
        disc: string,
        CV: string
    },
    Page_skills: {
        langs: string,
        front: string,
        front_preproc: string,
        front_SPA: string,
        back: string,
        other: string,
        soft: string,
        soft_disc: string
    },
    Page_contacts: {
        phone: string,
        tgram: string,
        email: string
    },
    footer: {
        created: string
    },
    projects: {
        todo: {
            title: string
        },
        voiting: {
        title: string,
        imgDisc: {
            viewDeparts: string,
            viewUsers: string,
            addUser: string,
            viewUserInfo: string,
            login: string,
            registration: string,
            viewDocuments: string,
            addDocument: string,
            viewImage: string,
            viewPDF: string,
            addApplication: string,
            viewAppsOnReview: string,
            voiting: string,
            localization: string
        }
        },
        weather: {
            title: string
        }
    }
}