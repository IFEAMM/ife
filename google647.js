// <script type="module">
  // Import the functions you need from the SDKs you need
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // const firebaseConfig = {
    // apiKey: "AIzaSyAj-4AetF8u1s8vkEEKN-oJci3fwThjHIQ",
    // authDomain: "amm-reference.firebaseapp.com",
    // projectId: "amm-reference",
    // storageBucket: "amm-reference.firebasestorage.app",
    // messagingSenderId: "325326300875",
    // appId: "1:325326300875:web:1af30bfefc9e3015079d4e"
  // };

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
// </script>


// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAj-4AetF8u1s8vkEEKN-oJci3fwThjHIQ",
    authDomain: "amm-reference.firebaseapp.com",
    projectId: "amm-reference",
    storageBucket: "amm-reference.firebasestorage.app",
    messagingSenderId: "325326300875",
    appId: "1:325326300875:web:1af30bfefc9e3015079d4e"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// دالة جلب البيانات
function fetchCloudData(callbackSuccess, callbackError) {
    const dataRef = ref(db, 'data/'); // المسار في قاعدة بياناتك
    onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            callbackSuccess(data);
        } else {
            callbackError("لا توجد بيانات");
        }
    }, (error) => {
        callbackError(error.message);
    });
}