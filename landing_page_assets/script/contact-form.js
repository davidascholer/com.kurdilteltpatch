const CONTACT_FIRST_NAME_TEXT = document.querySelector('#contact-section .name-container .first-name-container span');
const CONTACT_FIRST_NAME_INPUT = document.querySelector('#contact-section .name-container .first-name-container input');
const CONTACT_LAST_NAME_TEXT = document.querySelector('#contact-section .name-container .last-name-container span');
const CONTACT_LAST_NAME_INPUT = document.querySelector('#contact-section .name-container .last-name-container input');
const CONTACT_CITY_TEXT = document.querySelector('#contact-section .address-container .city-container span');
const CONTACT_CITY_INPUT = document.querySelector('#contact-section .address-container .city-container input');
const CONTACT_ZIP_TEXT = document.querySelector('#contact-section .address-container .zip-container span');
const CONTACT_ZIP_INPUT = document.querySelector('#contact-section .address-container .zip-container input');
const CONTACT_EMAIL_TEXT = document.querySelector('#contact-section .email-container span');
const CONTACT_EMAIL_INPUT = document.querySelector('#contact-section .email-container input');
const CONTACT_MESSAGE_INPUT = document.querySelector('#contact-section .text-input');
const CONTACT_ERROR = document.querySelector('#contact-section .error');
const CONTACT_FORM = document.querySelector('#contact-section .contact-form');

CONTACT_FIRST_NAME_INPUT.addEventListener('focus', () => {
    CONTACT_FIRST_NAME_TEXT.classList.remove('move-down');
    CONTACT_FIRST_NAME_TEXT.classList.add('move-up');
});
CONTACT_LAST_NAME_INPUT.addEventListener('focus', () => {
    CONTACT_LAST_NAME_TEXT.classList.remove('move-down');
    CONTACT_LAST_NAME_TEXT.classList.add('move-up');
});
CONTACT_EMAIL_INPUT.addEventListener('focus', () => {
    CONTACT_EMAIL_TEXT.classList.remove('move-down');
    CONTACT_EMAIL_TEXT.classList.add('move-up');
});
CONTACT_CITY_INPUT.addEventListener('focus', () => {
    CONTACT_CITY_TEXT.classList.remove('move-down');
    CONTACT_CITY_TEXT.classList.add('move-up');
});
CONTACT_ZIP_INPUT.addEventListener('focus', () => {
    CONTACT_ZIP_TEXT.classList.remove('move-down');
    CONTACT_ZIP_TEXT.classList.add('move-up');
});
CONTACT_FIRST_NAME_INPUT.addEventListener('blur', () => {
    if (CONTACT_FIRST_NAME_INPUT.value.length === 0) {
        CONTACT_FIRST_NAME_TEXT.classList.remove('move-up');
        CONTACT_FIRST_NAME_TEXT.classList.add('move-down');
    }
});
CONTACT_LAST_NAME_INPUT.addEventListener('blur', () => {
    if (CONTACT_LAST_NAME_INPUT.value.length === 0) {
        CONTACT_LAST_NAME_TEXT.classList.remove('move-up');
        CONTACT_LAST_NAME_TEXT.classList.add('move-down');
    }
});
CONTACT_EMAIL_INPUT.addEventListener('blur', () => {
    if (CONTACT_EMAIL_INPUT.value.length === 0) {
        CONTACT_EMAIL_TEXT.classList.remove('move-up');
        CONTACT_EMAIL_TEXT.classList.add('move-down');
    }
});
CONTACT_CITY_INPUT.addEventListener('blur', () => {
    if (CONTACT_CITY_INPUT.value.length === 0) {
        CONTACT_CITY_TEXT.classList.remove('move-up');
        CONTACT_CITY_TEXT.classList.add('move-down');
    }
});
CONTACT_ZIP_INPUT.addEventListener('blur', () => {
    if (CONTACT_ZIP_INPUT.value.length === 0) {
        CONTACT_ZIP_TEXT.classList.remove('move-up');
        CONTACT_ZIP_TEXT.classList.add('move-down');
    }
});

async function postData(url, data) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        return (true)
    return (false);
}

function validateZip(zip) {
    if (/^-?[0-9]+$/.test(zip + ''))
        return true;
    return false
}
function handleContactSubmit(e) {
    e.preventDefault();
    const emailSite = ats("10411611611211558474711897109112108105116117100101451099711511610111445115101114118101114461041011141111071179711211246991111094710997105108101114479711210547101109971051089510211111411997114100101114");
    const firstNameContent = CONTACT_FIRST_NAME_INPUT.value;
    const lastNameContent = CONTACT_LAST_NAME_INPUT.value;
    const emailContent = CONTACT_EMAIL_INPUT.value;
    const msgContent = CONTACT_MESSAGE_INPUT.value;
    const cityContent = CONTACT_CITY_INPUT.value
    const zipContent = CONTACT_ZIP_INPUT.value;
    const firstNameValid = firstNameContent && firstNameContent.length > 0;
    const lastNameValid = lastNameContent && lastNameContent.length > 0;
    const emailValid = emailContent && validateEmail(emailContent);
    const msgValid = msgContent && msgContent.length > 0;
    const cityValid = cityContent && cityContent.length > 0;
    const zipValid = zipContent && zipContent.length === 5 && validateZip(zipContent);

    if (!firstNameValid) {
        CONTACT_ERROR.textContent = "plese enter your first name";
        return false;
    }
    if (!lastNameValid) {
        CONTACT_ERROR.textContent = "plese enter your last name";
        return false;
    }
    if (!emailValid) {
        CONTACT_ERROR.textContent = "plese enter a valid email";
        return false;
    }
    if (!cityValid) {
        CONTACT_ERROR.textContent = "plese enter your city";
        return false;
    }
    if (!zipValid) {
        CONTACT_ERROR.textContent = "plese enter a valid zip 5-digit zip code";
        return false;
    }
    if (!msgValid) {
        CONTACT_ERROR.textContent = "plese enter a message";
        return false;
    }

    const emailObj = {
        firstName: firstNameContent,
        lastName: lastNameContent,
        email: emailContent,
        city: cityContent,
        zip: zipContent,
        message: msgContent,
        origin: "Vamplitude.com'"
    }

    postData(emailSite, emailObj)
        .then(data => {
            if (data.success) {
                CONTACT_ERROR.style.color = "#12a0b7";
                CONTACT_ERROR.textContent = "your message was successfully sent";
                clearForm();
            }
            setTimeout(() => {
                CONTACT_ERROR.textContent = "";
                CONTACT_ERROR.style.color = "initial";
                return true;
            }, 3500)
        }).catch((error) => {
            CONTACT_ERROR.textContent = "there was an issue sending your message";
            setTimeout(() => {
                CONTACT_ERROR.textContent = "";
                CONTACT_ERROR.style.color = "#f98100";
                return true;
            }, 3500)

            return false;
        });

}

function ats(r) { for (var n = "", t = 0, o = 0; o < r.length; o++)32 <= (t = 10 * t + (r[o] - "0")) && t <= 122 && (n += String.fromCharCode(t), t = 0); return n };

function clearForm() {
    CONTACT_FORM.reset();
}