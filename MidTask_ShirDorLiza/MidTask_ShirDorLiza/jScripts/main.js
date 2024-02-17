// רשימה של הסגנונות
const jsonData = {
    "itemsContainer": [
        {
            "id": 1,
            "title": "מצויירים",
            "image":"images/Mezoyar.png",
            "content": "יכולים להיות דיי אקראיים, לא מתוכננים ולא הגיוניים.",
            "fullcontent":"בעבר ציירו ציורים ידניים על דף שניסו לייצר אשליה אופטית ולהיראות תלת ממדיים. על מנת לצייר בטכניקה הזאת צריך לדעת לצייר בצורה ריאליסטית (יחסית) ולהבין בפרספקטיבה – חשוב להבין שזוהי מיומנות שנרכשת עם התמדה לשנים וזמן קעקועים ארוך מאוד. לכן משמעות וותק המקעקע היא חשובה מאוד כמו כן יכולות הציור שלו, אם החלטתם לבחור בקעקוע ריאליסטי תבקשו קודם לראות ציורים של המקעקע.",
            "tag": "Popular"
            
        },
        {
            "id": 2,
            "title": "גרפי",
            "image":"images/Graphi.png",
            "content": "אלמנטים עיצוביים שונים כגון, קווים, צורות, ערכות צבעים וקומפוזיציות.",
            "fullcontent":"לקעקוע גרפיים יש יתרון גדול בייחודיות, בסטייל ובנראות והעובדה שהם 'מזדקנים' טוב יותר מקעקועים אחרים בזכות הקווים החזקים והאווריריות הם שומרים על היצירה שלכם לאורך שנים וגם אם הקעקוע גרפי  ידהה בעתיד בקלילות מרעננים אותו עם קצת דיו חדש פה ושם. לקעקועים בסגנון גרפי יתרון נוסף, זמן ביצוע קצר יחסית ומשמעותו רמת כאב כללית נמוכה יותר.",
            "tag": "Popular"
        },
        {
            "id": 3,
            "title": "ריאליסטי",
            "image":"images/Realisti.png",
            "content": "מתמקד בהעברת תמונה אמיתית על העור ומדויק ככל שניתן.",
            "fullcontent":"מדובר ביצירת קעקועים בטכניקה מדהימה שמאפשרת לקעקוע להראות אמיתי כמו תמונה. לרוב כוללת נופים טבעיים, בעלי חיים או פורטרטים. הסגנון הריאליסטי מתמקד בהעברת תמונה אמיתית על העור במדויק ככל שניתן. האלמנט שהכי קשה למקעקעים בסגנון ריאליסטי לקעקע הוא פורטרטים משום שזה מחייב את המקעקע לקלוע לדימיון ואופיו של האדם, וזו אומנות. קעקועים בסגנון ריאליסטי יכולים להיות בשחור ואפור בלבד או עם צבעים. מקובל להשתמש בטכניקת הקו הדק.",
            "tag": "Popular"

        },
        {
            "id": 4,
            "title": "טראש פולקה",
            "image":"images/TrashPolke.png",
            "content": "פלטת הצבעים בסיסית למדי ומשלבת בעיקר אדום, אפור ושחור.",
            "fullcontent":"זהו סגנון שהחל בבואנה ויסטה טאטו קלאב בוורצבורג גרמניה על ידי סימון פיאף ווולקו מרשקי. סגנון זה משלב תמונות ריאליסטיות עם מריחות, כתמים ותחושת תנועתיות המשווה ליצירה הרגשה כאוטית וחסרת סדר. לעיתים משולבות ביצירה מילים. קעקועי טראש פולקה נעשים רק בדיו אדומה או שחורה. לדברי וולקו, הסגנון הזה הוא - שילוב של ריאליזם וטראש, הטבעי והאבסטרקטי, טכנולוגיה ואנושיות, עבר, הווה ועתיד, ניגודים המאולצים להתאחד בריקוד יצירתי לכדי הרמוניה וקצב המסונכרנים עם הגוף.",
            "tag": "unPopular"
        },
        {
            "id": 5,
            "title": "טרייבל",
            "image":"images/Triibel.png",
            "content": "מאופיינים בדיו שחור ודפוסים עבים וכהים שמכסים חלקים גדולים בגוף.",
            "fullcontent":"אחד מסגנונות הקעקועים העתיקים ביותר שקיימים היום. מקורו בתרבות הפולנזית, שם השתמשו בקעקועים מסוג זה כדי לסמל זהויות, אישיות, מעמדות חברתיות וכדומה. קעקועים בסגנון זה מאופיינים בדיו שחור ודפוסים עבים וכהים שלעיתים מכסים חלקים גדולים בגוף. פולנזים רבים עדיין מתקעקעים בכלים מסורתיים אך פרשנויות מודרניות לסגנון זה מיושמות עם אקדח קעקועים.",
            "tag": "unPopular"
        },
        {
            "id": 6,
            "title": "גיאומטרי",
            "image":"images/Geometri.png",
            "content": "משלבים בתוכם טקסטורות שונות בינהם נקודות, הצללות ותלת מימד.",
            "fullcontent":"קעקועים גיאומטרים מאופיינים בסימטריה והרמוניה. אנשים שבוחרים קעקועים אלה הם אנשים שרואים בהם משמעות סמלית. צורות שונות מייצגות אלמנטים שונים בטבע. לדוגמא, ארבעת יסודות החיים -אדמה, רוח אש ומים מיוצגות (בין היתר) על ידי משולשים דו מימדים וקעקוע שלהם מסמל את החיבור בין האדם לטבע.",
            "tag": "Popular"
        },
        {
            "id": 7,
            "title": "ניאוטרדישיונאל",
            "image":"images/NeoTraditional.png",
            "content": "הקעקועים משלבים קריקטורות, גרפיטי, פרופורציות מוגזמות ועיצוב מקורי.",
            "fullcontent":"הניו-סקול הוא סגנון קעקועים מודרני שהתפתח במחצית השניה של המאה ה-20. קווי מתאר חיצוניים עבים הם אלמנט שנשאר מסגנון האולד-סקול אך חוץ מזה, סגנון זה חורג משורשיו המוכרים. הצבעים יותר מגוונים והקעקועים אינם מוגבלים לז'אנרים המסורתיים. הקעקועים משלבים קריקטורות, גרפיטי, פרופורציות מוגזמות ועיצוב מקורי. הסגנון מאפשר לאמנים לפתוח את הראש ולהביע יצירתיות וחדשנות.",
            "tag": "unPopular"
        },
        {
            "id": 8,
            "title": "צבעי מים",
            "image":"images/WaterColor.png",
            "content": "מכיל כמה שפחות קווי מתאר עבים ושחורים.",
            "fullcontent":"ככל שעולם הקעקועים התקדם טכנולוגית, סגנונות אומנות שונים החלו להיות פופולריים. סגנון צבעי-מים הוא סגנון ייחודי ומרהיב. כאשר קעקוע בסגנון צבעי מים מבוצע בצורה מקצועית, זה נראה כמו יצירה שהמקעקע יצר עם מברשת, כשלמעשה זה בוצע על ידי מחט. מדובר בקעקוע עם מראה אסתטי ומרשים והוא מכיל כמה שפחות קווי מתאר עבים ושחורים.",
            "tag": "Popular"
        },
        {
            "id": 9,
            "title": "אולד סקול",
            "image":"images/OldSchool.png",
            "content": "פלטת צבעים מוגבלת, קווי מתאר שחורים ועבים, מעט או ללא הצללה.",
            "fullcontent":"סגנון האולד-סקול הוא סגנון הקעקועים המפורסם והידוע ביותר. יש לו כללים ברורים כמו פלטת צבעים מוגבלת, קווי מתאר שחורים ועבים, מעט או ללא הצללה, תמונות חדות ולפעמים דו-מימדיות. כוללים בין היתר ספינות, עוגנים, כרזות, ציפורים וכדומה.",
            "tag": "unPopular"
        },
        {
            "id": 10,
            "title": "דוט וורק",
            "image":"images/DotWork.png",
            "content": "הטכניקה מתבצעת על ידי נקודות זעירות ובודדות היוצרות עיצוב עדין ומפורט.",
            "fullcontent":"מדובר ביצירת קעקועים בטכניקה מדהימהמדובר בסגנון יחסית חדש של קעקועים שחייבים להתבצע על ידי מקעקעים ממושמעים וסבלניים. הטכניקה מתבצעת על ידי נקודות זעירות בודדות היוצרות עיצוב עדין מצד אחד, ומפורט מצד שני. מקעקעים רבים המתממחים בסגנון זה משתמשים בטכניקה של מחט אחת ולא אקדח קעקועים מסורתי. אם אתם מתעניינים בקעקועים בנקודות, חשוב לבחור סטודיו שיודע לעבוד בטכניקה המיוחדת הזאת. בסטודיו לקעקועים אופס טאטו בחיפה, תוכלו למצוא מקעקעים שמתמחים בשיטה זו ומכירים את הטכניקה. קעקועים מסוג זה דורשים סבלנות וסיבולת גם של המקועקע. אפשר לשלב סגנונות שונים בסגנון של קעקועים בנקודות. כמו למשל קעקועים גאומטריים שהם בעצם צורות גאומטריות שבימים קדומים הייתה להם משמעות דתית (כמו למשל משולשים, מעויינים, מנדלות ועוד) והיום ניתן לשלבם בתוך סגנונות אחרים. שמאפשרת לקעקוע להראות אמיתי כמו תמונה. לרוב כוללת נופים טבעיים, בעלי חיים או פורטרטים. הסגנון הריאליסטי מתמקד בהעברת תמונה אמיתית על העור במדויק ככל שניתן. האלמנט שהכי קשה למקעקעים בסגנון ריאליסטי לקעקע הוא פורטרטים משום שזה מחייב את המקעקע לקלוע לדימיון ואופיו של האדם, וזו אומנות. קעקועים בסגנון ריאליסטי יכולים להיות בשחור ואפור בלבד או עם צבעים. מקובל להשתמש בטכניקת הקו הדק.",
            "tag": "Popular"
        },
        
    ]
}

//לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {
    createItems();
    createModal();
});

function toggleNav(){
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}

//פונקציה שיוצרת את כל הסגנונות בעמוד
function createItems() {
    const listContainer = document.getElementById("itemsContainer");
    const list = document.createElement("ul");
    list.setAttribute("id", "itemsContainer");

    // יצירת אלמנט לכל סגנון
    jsonData.itemsContainer.forEach((d) => {
        const listItem = document.createElement("li");
        listItem.setAttribute("id", `li_${d.id}`);
        listItem.setAttribute("data-title", d.title.toLowerCase());

        const conceptPic = document.createElement("img");
        conceptPic.setAttribute("src", d.image);
        listItem.appendChild(conceptPic);

        const liTitle = document.createElement("h2");
        liTitle.appendChild(document.createTextNode(d.title));
        listItem.appendChild(liTitle);

        const liContent = document.createElement("p");
        liContent.appendChild(document.createTextNode(d.content));
        listItem.appendChild(liContent);

        const moreInfoButton = document.createElement("button");
        moreInfoButton.appendChild(document.createTextNode("קרא עוד"));
        moreInfoButton.addEventListener("click", () => clickedTopic(d.id)); // כפתור המיועד לפתיחת פופ אפ עם מידע נוסף
        listItem.appendChild(moreInfoButton);

        list.appendChild(listItem);

    });

    listContainer.appendChild(list);
}

//פונקציה המבצעת את החיפוש סגנונות
function searchConcepts() {
    const searchInput = document.getElementById("searchInput");
    const searchQuery = searchInput.value.toLowerCase();

    const itemsContainer = document.querySelectorAll("#itemsContainer li");

    itemsContainer.forEach((concept) => {
        const conceptTitle = concept.getAttribute("data-title");

        if (conceptTitle.includes(searchQuery)) {
            concept.style.display = "flex";
        } else {
            concept.style.display = "none";
        }
    });
}

//פונקציה המבצעת את פעולת הסינון - סגנון פופולרי
function toggleStyleFilter() {
    const searchInput = document.getElementById("searchInput");
    searchInput.value = ""; // Clear the search input
    const itemsContainer = document.querySelectorAll("#itemsContainer li");

    const popularCheckbox = document.getElementById("styleCheckbox");
    const showPopularStyles = popularCheckbox.checked;

    itemsContainer.forEach((concept) => {
        const conceptId = concept.id.replace("li_", "");
        const conceptTag = jsonData.itemsContainer.find((d) => d.id.toString() === conceptId).tag;

        if (showPopularStyles && (conceptTag === "Popular")) {
            concept.style.display = "flex";
        } else if (!showPopularStyles) {
            concept.style.display = "flex";
        } else {
            concept.style.display = "none";
        }
    });
}

    

//פונקציה ליצירת המודולים שיצרו לנו את הפופ-אפים
function createModal() {
    const modalContainer = document.createElement("div");
    modalContainer.setAttribute("class", "modal fade");
    modalContainer.setAttribute("id", "myModal");
    modalContainer.setAttribute("tabindex", "-1");
    modalContainer.setAttribute("aria-labelledby", "exampleModalLabel");
    modalContainer.setAttribute("aria-hidden", "true");

    const modalDialog = document.createElement("div");
    modalDialog.setAttribute("class", "modal-dialog");

    const modalContent = document.createElement("div");
    modalContent.setAttribute("class", "modal-content");

    const modalBody = document.createElement("div");
    modalBody.setAttribute("class", "modal-body");
    modalBody.setAttribute("id", "modalContent");

    const closeButton = document.createElement("button");
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("class", "btn-close");
    closeButton.setAttribute("data-bs-dismiss", "modal");
    closeButton.setAttribute("aria-label", "Close");

    modalContent.appendChild(modalBody);
    modalContent.appendChild(closeButton);
    modalDialog.appendChild(modalContent);
    modalContainer.appendChild(modalDialog);

    document.body.appendChild(modalContainer);
}


// פונקציה לפתיחת המודול עם המידע של הנושא שלחצנו עליו
function openModal(title, content, fullcontent) {
    const modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = `
        <h2>${title}</h2>
        <h4>${content}</h4>
        <p>${fullcontent}</p>
    `;

    const myModal = new bootstrap.Modal(document.getElementById("myModal"));
    myModal.show();
}

// פונקציה לפתיחת פופאפ למידע נוסף
function clickedTopic(id) {
    const concept = jsonData.itemsContainer.find(d => d.id === id);
    if (concept) {
        openModal(concept.title, concept.content, concept.fullcontent);
    }
}


