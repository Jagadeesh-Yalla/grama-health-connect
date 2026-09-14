/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Stethoscope, 
  Calendar, 
  PhoneCall, 
  Phone,
  AlertCircle, 
  ChevronRight, 
  Trash2, 
  Video, 
  CheckCircle2,
  ArrowLeft,
  Heart,
  Languages,
  ChevronDown,
  LogOut,
  Database,
  MessageSquare,
  Settings,
  Bell,
  LayoutDashboard
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Language Dictionaries ---

const englishTexts = {
  appName: "Grama Health Connect",
  selectLanguage: "Select Your Language",
  welcome: "Welcome to Grama Health",
  register: "Patient Registration",
  doctors: "Find a Doctor",
  appointments: "My Appointments",
  teleConsult: "Tele-Consultation",
  emergency: "EMERGENCY",
  emergencyMsg: "Please call 108 for immediate medical emergency. Your nearest health center is 5km away.",
  home: "Home",
  profile: "Profile",
  name: "Full Name",
  mobile: "Mobile Number",
  village: "Village Name",
  healthProblem: "Describe Health Problem",
  save: "Save Details",
  bookNow: "Book Appointment",
  available: "Available",
  specialization: "Specialization",
  days: "Days",
  time: "Time",
  confirmBooking: "Confirm Booking",
  bookingSuccess: "Appointment Booked Successfully!",
  noAppointments: "No appointments found.",
  deleteConfirm: "Are you sure you want to delete this appointment?",
  startConsult: "Start Consultation",
  endConsult: "End Consultation",
  prescription: "Doctor's Notes / Prescription",
  savePrescription: "Save Prescription",
  healthTips: "Daily Health Tips",
  tip1: "Drink at least 8 glasses of water daily.",
  tip2: "Wash your hands before eating.",
  tip3: "Eat fresh fruits and vegetables.",
  tip4: "Sleep for 7-8 hours every night.",
  back: "Back",
  close: "Close",
  patientInfo: "Patient Information",
  notRegistered: "Not Registered Yet",
  registerNow: "Register Now",
  selectDate: "Select Date",
  selectTime: "Select Time",
  videoPlaceholder: "Video Connection Placeholder",
  consultationNotes: "Consultation Notes",
  delete: "Delete",
  live: "LIVE",
  namePlaceholder: "e.g. John Doe",
  mobilePlaceholder: "e.g. 9876543210",
  villagePlaceholder: "e.g. Rampur",
  problemPlaceholder: "Describe your symptoms...",
  prescriptionPlaceholder: "Enter prescription details here...",
  confirm: "Confirm",
  cancel: "Cancel",
  success: "Success",
  time1: "10:00 AM",
  time2: "11:00 AM",
  time3: "12:00 PM",
  time4: "04:00 PM",
  time5: "05:00 PM",
  tagline: "Connect with healthcare easily",
  patientLogin: "Patient Login",
  doctorLogin: "Doctor Login",
  newPatient: "New Patient",
  existingPatient: "Existing Patient",
  email: "Email",
  emailPlaceholder: "e.g. john@example.com",
  age: "Age",
  gender: "Gender",
  password: "Password",
  login: "Login",
  noAccountError: "No account found. Please register.",
  invalidCredentials: "Invalid email or password.",
  male: "Male",
  female: "Female",
  other: "Other",
  rememberMe: "Remember Me",
  forgotPassword: "Forgot Password?",
  otp: "OTP (Optional)",
  doctorDashboard: "Doctor Dashboard",
  patientDashboard: "Patient Dashboard",
  viewAppointments: "View Appointments",
  managePatients: "Manage Patients",
  bookedAppointments: "Booked Appointments",
  patientName: "Patient Name",
  problem: "Problem",
  selectSpecialization: "Select Specialization",
  state: "State",
  district: "District",
  lunchBreak: "Lunch Break",
  start: "Start",
  end: "End",
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
  updateDetails: "Update Details",
  availability: "Availability",
  manageAvailability: "Manage Availability",
  selectDays: "Select Working Days",
  workingHours: "Working Hours",
  phone: "Phone Number",
  all: "All",
  useLocation: "Use My Location",
  nearest: "Nearest",
  locationError: "Unable to get location. Please check permissions.",
  findingLocation: "Finding your location...",
  distance: "Distance",
  km: "km",
  pending: "Pending",
  patientRecords: "Patient Records",
  messages: "Messages",
  profileSettings: "Profile Settings",
  appointmentsToday: "Appointments Today",
  pendingMessages: "Pending Messages",
  notifications: "Notifications",
  enableAdvancedFeatures: "Enable Advanced Features",
  emergencyCall: "Emergency Call 108",
  chat: "Chat",
  enterOtp: "Enter OTP",
  otpSent: "OTP sent to your mobile number",
  verify: "Verify",
  spec_general: "General Medicine",
  spec_cardiology: "Cardiology (Heart Specialist)",
  spec_neurology: "Neurology (Brain & Nerves)",
  spec_orthopedics: "Orthopedics (Bones & Joints)",
  spec_pediatrics: "Pediatrics (Child Specialist)",
  spec_gynecology: "Gynecology & Obstetrics",
  spec_dermatology: "Dermatology (Skin Specialist)",
  spec_ophthalmology: "Ophthalmology (Eye Specialist)",
  spec_ent: "ENT (Ear, Nose, Throat)",
  spec_dentistry: "Dentistry",
  spec_pulmonology: "Pulmonology (Lungs)",
  spec_gastroenterology: "Gastroenterology (Digestive System)",
  spec_nephrology: "Nephrology (Kidneys)",
  spec_urology: "Urology",
  spec_endocrinology: "Endocrinology (Hormones)",
  spec_oncology: "Oncology (Cancer Specialist)",
  spec_hematology: "Hematology (Blood)",
  spec_psychiatry: "Psychiatry (Mental Health)",
  spec_psychology: "Psychology",
  spec_gen_surgery: "General Surgery",
  spec_plastic_surgery: "Plastic Surgery",
  spec_neurosurgery: "Neurosurgery",
  spec_cardiothoracic: "Cardiothoracic Surgery",
  spec_radiology: "Radiology",
  spec_anesthesiology: "Anesthesiology",
  spec_emergency_med: "Emergency Medicine",
  spec_rheumatology: "Rheumatology",
  spec_infectious: "Infectious Disease"
};

const teluguTexts = {
  appName: "గ్రామ హెల్త్ కనెక్ట్",
  selectLanguage: "మీ భాషను ఎంచుకోండి",
  welcome: "గ్రామ హెల్త్‌కు స్వాగతం",
  register: "రోగి నమోదు",
  doctors: "వైద్యుడిని కనుగొనండి",
  appointments: "నా అపాయింట్‌మెంట్‌లు",
  teleConsult: "టెలి-కన్సల్టేషన్",
  emergency: "అత్యవసర",
  emergencyMsg: "తక్షణ వైద్య అత్యవసర పరిస్థితి కోసం దయచేసి 108 కి కాల్ చేయండి. మీ సమీప ఆరోగ్య కేంద్రం 5 కిలోమీటర్ల దూరంలో ఉంది.",
  home: "హోమ్",
  profile: "ప్రొఫైల్",
  name: "పూర్తి పేరు",
  mobile: "మొబైల్ సంఖ్య",
  village: "గ్రామం పేరు",
  healthProblem: "ఆరోగ్య సమస్యను వివరించండి",
  save: "వివరాలను సేవ్ చేయండి",
  bookNow: "అపాయింట్‌మెంట్ బుక్ చేయండి",
  available: "అందుబాటులో ఉంది",
  specialization: "స్పెషలైజేషన్",
  days: "రోజులు",
  time: "సమయం",
  confirmBooking: "బుకింగ్‌ను నిర్ధారించండి",
  bookingSuccess: "అపాయింట్‌మెంట్ విజయవంతంగా బుక్ చేయబడింది!",
  noAppointments: "అపాయింట్‌మెంట్‌లు ఏవీ కనుగొనబడలేదు.",
  deleteConfirm: "మీరు ఖచ్చితంగా ఈ అపాయింట్‌మెంట్‌ను తొలగించాలనుకుంటున్నారా?",
  startConsult: "సంప్రదింపును ప్రారంభించండి",
  endConsult: "సంప్రదింపును ముగించండి",
  prescription: "వైద్యుడి నోట్స్ / ప్రిస్క్రిప్షన్",
  savePrescription: "ప్రిస్క్రిప్షన్‌ను సేవ్ చేయండి",
  healthTips: "రోజువారీ ఆరోగ్య చిట్కాలు",
  tip1: "రోజుకు కనీసం 8 గ్లాసుల నీరు త్రాగాలి.",
  tip2: "తినడానికి ముందు మీ చేతులను కడుక్కోండి.",
  tip3: "తాజా పండ్లు మరియు కూరగాయలను తినండి.",
  tip4: "ప్రతి రాత్రి 7-8 గంటలు నిద్రపోండి.",
  back: "వెనుకకు",
  close: "మూసివేయి",
  patientInfo: "రోగి సమాచారం",
  notRegistered: "ఇంకా నమోదు కాలేదు",
  registerNow: "ఇప్పుడే నమోదు చేసుకోండి",
  selectDate: "తేదీని ఎంచుకోండి",
  selectTime: "సమయాన్ని ఎంచుకోండి",
  videoPlaceholder: "వీడియో కనెక్షన్ ప్లేస్‌హోల్డర్",
  consultationNotes: "సంప్రదింపు గమనికలు",
  delete: "తొలగించు",
  live: "లైవ్",
  namePlaceholder: "ఉదా: జాన్ డో",
  mobilePlaceholder: "ఉదా: 9876543210",
  villagePlaceholder: "ఉదా: రాంపూర్",
  problemPlaceholder: "మీ లక్షణాలను వివరించండి...",
  prescriptionPlaceholder: "ప్రిస్క్రిప్షన్ వివరాలను ఇక్కడ నమోదు చేయండి...",
  confirm: "నిర్ధారించండి",
  cancel: "రద్దు చేయండి",
  success: "విజయం",
  time1: "ఉదయం 10:00",
  time2: "ఉదయం 11:00",
  time3: "మధ్యాహ్నం 12:00",
  time4: "సాయంత్రం 04:00",
  time5: "సాయంత్రం 05:00",
  tagline: "ఆరోగ్య సంరక్షణతో సులభంగా కనెక్ట్ అవ్వండి",
  patientLogin: "రోగి లాగిన్",
  doctorLogin: "వైద్యుడు లాగిన్",
  newPatient: "కొత్త రోగి",
  existingPatient: "ఇప్పటికే ఉన్న రోగి",
  email: "ఇమెయిల్",
  emailPlaceholder: "ఉదా: john@example.com",
  age: "వయస్సు",
  gender: "లింగం",
  password: "పాస్వర్డ్",
  login: "లాగిన్",
  noAccountError: "ఖాతా కనుగొనబడలేదు. దయచేసి రిజిస్టర్ చేయండి.",
  invalidCredentials: "చెల్లని ఇమెయిల్ లేదా పాస్వర్డ్.",
  male: "పురుషుడు",
  female: "స్త్రీ",
  other: "ఇతర",
  rememberMe: "నన్ను గుర్తుంచుకో",
  forgotPassword: "పాస్వర్డ్ మర్చిపోయారా?",
  otp: "OTP (ఐచ్ఛికం)",
  doctorDashboard: "వైద్యుడి డాష్‌బోర్డ్",
  patientDashboard: "రోగి డాష్‌బోర్డ్",
  viewAppointments: "అపాయింట్‌మెంట్‌లను చూడండి",
  managePatients: "రోగులను నిర్వహించండి",
  bookedAppointments: "బుక్ చేసిన అపాయింట్‌మెంట్‌లు",
  patientName: "రోగి పేరు",
  problem: "సమస్య",
  selectSpecialization: "స్పెషలైజేషన్ ఎంచుకోండి",
  state: "రాష్ట్రం",
  district: "జిల్లా",
  lunchBreak: "మధ్యాహ్న భోజన విరామం",
  start: "ప్రారంభం",
  end: "ముగింపు",
  monday: "సోమవారం",
  tuesday: "మంగళవారం",
  wednesday: "బుధవారం",
  thursday: "గురువారం",
  friday: "శుక్రవారం",
  saturday: "శనివారం",
  sunday: "ఆదివారం",
  updateDetails: "వివరాలను నవీకరించండి",
  availability: "అందుబాటు",
  manageAvailability: "అందుబాటును నిర్వహించండి",
  selectDays: "పని దినాలను ఎంచుకోండి",
  workingHours: "పని గంటలు",
  phone: "ఫోన్ నంబర్",
  all: "అన్నీ",
  useLocation: "నా స్థానాన్ని ఉపయోగించండి",
  nearest: "సమీప",
  locationError: "స్థానాన్ని పొందడం సాధ్యం కాలేదు. దయచేసి అనుమతులను తనిఖీ చేయండి.",
  findingLocation: "మీ స్థానాన్ని కనుగొంటోంది...",
  distance: "దూరం",
  km: "కి.మీ",
  pending: "పెండింగ్‌లో ఉంది",
  patientRecords: "రోగి రికార్డులు",
  messages: "సందేశాలు",
  profileSettings: "ప్రొఫైల్ సెట్టింగ్స్",
  appointmentsToday: "ఈ రోజు అపాయింట్మెంట్లు",
  pendingMessages: "పెండింగ్ సందేశాలు",
  notifications: "నోటిఫికేషన్స్",
  enableAdvancedFeatures: "అధునాతన ఫీచర్లను ప్రారంభించండి",
  emergencyCall: "అత్యవసర కాల్ 108",
  chat: "చాట్",
  enterOtp: "OTP ని నమోదు చేయండి",
  otpSent: "మీ మొబైల్ నంబర్‌కు OTP పంపబడింది",
  verify: "ధృవీకరించండి",
  spec_general: "జనరల్ మెడిసిన్",
  spec_cardiology: "కార్డియాలజీ (గుండె నిపుణుడు)",
  spec_neurology: "న్యూరాలజీ (మెదడు & నరాలు)",
  spec_orthopedics: "ఆర్థోపెడిక్స్ (ఎముకలు & కీళ్ళు)",
  spec_pediatrics: "పీడియాట్రిక్స్ (పిల్లల నిపుణుడు)",
  spec_gynecology: "గైనకాలజీ & ప్రసూతి",
  spec_dermatology: "డెర్మటాలజీ (చర్మ నిపుణుడు)",
  spec_ophthalmology: "ఆప్తాల్మాలజీ (కంటి నిపుణుడు)",
  spec_ent: "ENT (చెవి, ముక్కు, గొంతు)",
  spec_dentistry: "దంతవైద్యం",
  spec_pulmonology: "పల్మోనాలజీ (ఊపిరితిత్తులు)",
  spec_gastroenterology: "గ్యాస్ట్రోఎంటరాలజీ (జీర్ణ వ్యవస్థ)",
  spec_nephrology: "నెఫ్రాలజీ (కిడ్నీలు)",
  spec_urology: "యూరాలజీ",
  spec_endocrinology: "ఎండోక్రినాలజీ (హార్మోన్లు)",
  spec_oncology: "ఆంకాలజీ (క్యాన్సర్ నిపుణుడు)",
  spec_hematology: "హెమటాలజీ (రక్తం)",
  spec_psychiatry: "సైకియాట్రీ (మానసిక ఆరోగ్యం)",
  spec_psychology: "సైకాలజీ",
  spec_gen_surgery: "జనరల్ సర్జరీ",
  spec_plastic_surgery: "ప్లాస్టిక్ సర్జరీ",
  spec_neurosurgery: "న్యూరో సర్జరీ",
  spec_cardiothoracic: "కార్డియోథొరాసిక్ సర్జరీ",
  spec_radiology: "రేడియాలజీ",
  spec_anesthesiology: "అనస్థీషియాలజీ",
  spec_emergency_med: "ఎమర్జెన్సీ మెడిసిన్",
  spec_rheumatology: "రుమటాలజీ",
  spec_infectious: "ఇన్ఫెక్షియస్ డిసీజ్"
};

const hindiTexts = {
  appName: "ग्राम हेल्थ कनेक्ट",
  selectLanguage: "अपनी भाषा चुनें",
  welcome: "ग्राम हेल्थ में आपका स्वागत है",
  register: "रोगी पंजीकरण",
  doctors: "डॉक्टर खोजें",
  appointments: "मेरे अपॉइंटमेंट",
  teleConsult: "टेली-परामर्श",
  emergency: "आपातकालीन",
  emergencyMsg: "तत्काल चिकित्सा आपात स्थिति के लिए कृपया 108 पर कॉल करें। आपका निकटतम स्वास्थ्य केंद्र 5 किमी दूर है।",
  home: "होम",
  profile: "प्रोफ़ाइल",
  name: "पूरा नाम",
  mobile: "मोबाइल नंबर",
  village: "गांव का नाम",
  healthProblem: "स्वास्थ्य समस्या का वर्णन करें",
  save: "विवरण सहेजें",
  bookNow: "अपॉइंटमेंट बुक करें",
  available: "उपलब्ध",
  specialization: "विशेषज्ञता",
  days: "दिन",
  time: "समय",
  confirmBooking: "बुकिंग की पुष्टि करें",
  bookingSuccess: "अपॉइंटमेंट सफलतापूर्वक बुक किया गया!",
  noAppointments: "कोई अपॉइंटमेंट नहीं मिला।",
  deleteConfirm: "क्या आप वाकई इस अपॉइंटमेंट को हटाना चाहते हैं?",
  startConsult: "परामर्श शुरू करें",
  endConsult: "परामर्श समाप्त करें",
  prescription: "डॉक्टर के नोट्स / पर्चे",
  savePrescription: "पर्चा सहेजें",
  healthTips: "दैनिक स्वास्थ्य सुझाव",
  tip1: "रोजाना कम से कम 8 गिलास पानी पिएं।",
  tip2: "खाने से पहले अपने हाथ धोएं।",
  tip3: "ताजे फल और सब्जियां खाएं।",
  tip4: "हर रात 7-8 घंटे सोएं।",
  back: "पीछे",
  close: "बंद करें",
  patientInfo: "रोगी की जानकारी",
  notRegistered: "अभी तक पंजीकृत नहीं है",
  registerNow: "अभी पंजीकरण करें",
  selectDate: "तारीख चुनें",
  selectTime: "समय चुनें",
  videoPlaceholder: "वीडियो कनेक्शन प्लेसहोल्डर",
  consultationNotes: "परामर्श नोट्स",
  delete: "हटाएं",
  live: "लाइव",
  namePlaceholder: "जैसे: जॉन डो",
  mobilePlaceholder: "जैसे: 9876543210",
  villagePlaceholder: "जैसे: रामपुर",
  problemPlaceholder: "अपने लक्षणों का वर्णन करें...",
  prescriptionPlaceholder: "यहां पर्चे का विवरण दर्ज करें...",
  confirm: "पुष्टि करें",
  cancel: "रद्द करें",
  success: "सफलता",
  time1: "सुबह 10:00",
  time2: "सुबह 11:00",
  time3: "दोपहर 12:00",
  time4: "शाम 04:00",
  time5: "शाम 05:00",
  tagline: "स्वास्थ्य सेवा से आसानी से जुड़ें",
  patientLogin: "रोगी लॉगिन",
  doctorLogin: "डॉक्टर लॉगिन",
  newPatient: "नया रोगी",
  existingPatient: "मौजूदा रोगी",
  email: "ईमेल",
  emailPlaceholder: "जैसे: john@example.com",
  age: "आयु",
  gender: "लिंग",
  password: "पासवर्ड",
  login: "लॉगिन",
  noAccountError: "कोई खाता नहीं मिला। कृपया पंजीकरण करें।",
  invalidCredentials: "अमान्य ईमेल या पासवर्ड।",
  male: "पुरुष",
  female: "महिला",
  other: "अन्य",
  rememberMe: "मुझे याद रखें",
  forgotPassword: "पासवर्ड भूल गए?",
  otp: "ओटीपी (वैकल्पिक)",
  doctorDashboard: "डॉक्टर डैशबोर्ड",
  patientDashboard: "रोगी डैशबोर्ड",
  viewAppointments: "अपॉइंटमेंट देखें",
  managePatients: "रोगियों का प्रबंधन करें",
  bookedAppointments: "बुक किए गए अपॉइंटमेंट",
  patientName: "रोगी का नाम",
  problem: "समस्या",
  selectSpecialization: "विशेषज्ञता चुनें",
  state: "राज्य",
  district: "जिला",
  lunchBreak: "दोपहर का भोजन अवकाश",
  start: "शुरू",
  end: "समाप्त",
  monday: "सोमवार",
  tuesday: "मंगलवार",
  wednesday: "बुधवार",
  thursday: "गुरुवार",
  friday: "शुक्रवार",
  saturday: "शनिवार",
  sunday: "रविवार",
  updateDetails: "विवरण अपडेट करें",
  availability: "उपलब्धता",
  manageAvailability: "उपलब्धता प्रबंधित करें",
  selectDays: "कार्य दिवस चुनें",
  workingHours: "कार्य के घंटे",
  phone: "फ़ोन नंबर",
  all: "सभी",
  useLocation: "मेरे स्थान का उपयोग करें",
  nearest: "निकटतम",
  locationError: "स्थान प्राप्त करने में असमर्थ। कृपया अनुमतियां जांचें।",
  findingLocation: "आपका स्थान खोजा जा रहा है...",
  distance: "दूरी",
  km: "किमी",
  pending: "लंबित",
  patientRecords: "रोगी रिकॉर्ड",
  messages: "संदेश",
  profileSettings: "प्रोफ़ाइल सेटिंग्स",
  appointmentsToday: "आज के अपॉइंटमेंट",
  pendingMessages: "लंबित संदेश",
  notifications: "सूचनाएं",
  enableAdvancedFeatures: "उन्नत सुविधाएं सक्षम करें",
  emergencyCall: "आपातकालीन कॉल 108",
  chat: "चैट",
  enterOtp: "ओटीपी दर्ज करें",
  otpSent: "आपके मोबाइल नंबर पर ओटीपी भेजा गया है",
  verify: "सत्यापित करें",
  spec_general: "सामान्य चिकित्सा",
  spec_cardiology: "हृदय रोग विशेषज्ञ",
  spec_neurology: "न्यूरोलॉजी (मस्तिष्क और नसें)",
  spec_orthopedics: "हड्डी रोग (हड्डियां और जोड़)",
  spec_pediatrics: "बाल रोग (बच्चा विशेषज्ञ)",
  spec_gynecology: "स्त्री रोग और प्रसूति",
  spec_dermatology: "त्वचा रोग (त्वचा विशेषज्ञ)",
  spec_ophthalmology: "नेत्र रोग (आंख विशेषज्ञ)",
  spec_ent: "ईएनटी (कान, नाक, गला)",
  spec_dentistry: "दंत चिकित्सा",
  spec_pulmonology: "पल्मोनोलॉजी (फेफड़े)",
  spec_gastroenterology: "गैस्ट्रोएंटरोलॉजी (पाचन तंत्र)",
  spec_nephrology: "नेफ्रोलॉजी (गुर्दे)",
  spec_urology: "यूरोलॉजी",
  spec_endocrinology: "एंडोक्रिनोलॉजी (हार्मोन)",
  spec_oncology: "ऑन्कोलॉजी (कैंसर विशेषज्ञ)",
  spec_hematology: "हेमेटोलॉजी (रक्त)",
  spec_psychiatry: "मनोरोग (मानसिक स्वास्थ्य)",
  spec_psychology: "मनोविज्ञान",
  spec_gen_surgery: "सामान्य सर्जरी",
  spec_plastic_surgery: "प्लास्टिक सर्जरी",
  spec_neurosurgery: "न्यूरोसर्जरी",
  spec_cardiothoracic: "कार्डियोथोरेसिक सर्जरी",
  spec_radiology: "रेडियोलॉजी",
  spec_anesthesiology: "एनेस्थिसियोलॉजी",
  spec_emergency_med: "आपातकालीन चिकित्सा",
  spec_rheumatology: "रुमेटोलॉजी",
  spec_infectious: "संक्रामक रोग"
};

const kannadaTexts = {
  appName: "ಗ್ರಾಮ ಹೆಲ್ತ್ ಕನೆಕ್ಟ್",
  selectLanguage: "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆರಿಸಿ",
  welcome: "ಗ್ರಾಮ ಹೆಲ್ತ್‌ಗೆ ಸ್ವಾಗತ",
  register: "ರೋಗಿಯ ನೋಂದಣಿ",
  doctors: "ವೈದ್ಯರನ್ನು ಹುಡುಕಿ",
  appointments: "ನನ್ನ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳು",
  teleConsult: "ಟೆಲಿ-ಸಮಾಲೋಚನೆ",
  emergency: "ತುರ್ತು",
  emergencyMsg: "ತಕ್ಷಣದ ವೈದ್ಯಕೀಯ ತುರ್ತುಸ್ಥಿತಿಗಾಗಿ ದಯವಿಟ್ಟು 108 ಗೆ ಕರೆ ಮಾಡಿ. ನಿಮ್ಮ ಹತ್ತಿರದ ಆರೋಗ್ಯ ಕೇಂದ್ರವು 5 ಕಿಮೀ ದೂರದಲ್ಲಿದೆ.",
  home: "ಹೋಮ್",
  profile: "ಪ್ರೊಫೈಲ್",
  name: "ಪೂರ್ಣ ಹೆಸರು",
  mobile: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
  village: "ಗ್ರಾಮದ ಹೆಸರು",
  healthProblem: "ಆರೋಗ್ಯ ಸಮಸ್ಯೆಯನ್ನು ವಿವರಿಸಿ",
  save: "ವಿವರಗಳನ್ನು ಉಳಿಸಿ",
  bookNow: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",
  available: "ಲಭ್ಯವಿದೆ",
  specialization: "ವಿಶೇಷತೆ",
  days: "ದಿನಗಳು",
  time: "ಸಮಯ",
  confirmBooking: "ಬುಕಿಂಗ್ ಖಚಿತಪಡಿಸಿ",
  bookingSuccess: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಯಶಸ್ವಿಯಾಗಿ ಬುಕ್ ಆಗಿದೆ!",
  noAppointments: "ಯಾವುದೇ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
  deleteConfirm: "ಈ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಅನ್ನು ಅಳಿಸಲು ನೀವು ಖಚಿತವಾಗಿ ಬಯಸುವಿರಾ?",
  startConsult: "ಸಮಾಲೋಚನೆ ಪ್ರಾರಂಭಿಸಿ",
  endConsult: "ಸಮಾಲೋಚನೆ ಮುಗಿಸಿ",
  prescription: "ವೈದ್ಯರ ಟಿಪ್ಪಣಿಗಳು / ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್",
  savePrescription: "ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಉಳಿಸಿ",
  healthTips: "ದೈನಂದಿನ ಆರೋಗ್ಯ ಸಲಹೆಗಳು",
  tip1: "ದಿನಕ್ಕೆ ಕನಿಷ್ಠ 8 ಲೋಟ ನೀರು ಕುಡಿಯಿರಿ.",
  tip2: "ತಿನ್ನುವ ಮೊದಲು ನಿಮ್ಮ ಕೈಗಳನ್ನು ತೊಳೆಯಿರಿ.",
  tip3: "ತಾಜಾ ಹಣ್ಣುಗಳು ಮತ್ತು ತರಕಾರಿಗಳನ್ನು ತಿನ್ನಿರಿ.",
  tip4: "ಪ್ರತಿ ರಾತ್ರಿ 7-8 ಗಂಟೆಗಳ ಕಾಲ ನಿದ್ರಿಸಿ.",
  back: "ಹಿಂದಕ್ಕೆ",
  close: "ಮುಚ್ಚಿ",
  patientInfo: "ರೋಗಿಯ ಮಾಹಿತಿ",
  notRegistered: "ಇನ್ನೂ ನೋಂದಾಯಿಸಲಾಗಿಲ್ಲ",
  registerNow: "ಈಗಲೇ ನೋಂದಾಯಿಸಿ",
  selectDate: "ದಿನಾಂಕ ಆರಿಸಿ",
  selectTime: "ಸಮಯ ಆರಿಸಿ",
  videoPlaceholder: "ವೀಡಿಯೊ ಸಂಪರ್ಕ ಪ್ಲೇಸ್‌ಹೋಲ್ಡರ್",
  consultationNotes: "ಸಮಾಲೋಚನೆ ಟಿಪ್ಪಣಿಗಳು",
  delete: "ಅಳಿಸಿ",
  live: "ಲೈವ್",
  namePlaceholder: "ಉದಾ: ಜಾನ್ ಡೋ",
  mobilePlaceholder: "ಉದಾ: 9876543210",
  villagePlaceholder: "ಉದಾ: ರಾಂಪುರ",
  problemPlaceholder: "ನಿಮ್ಮ ಲಕ್ಷಣಗಳನ್ನು ವಿವರಿಸಿ...",
  prescriptionPlaceholder: "ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ವಿವರಗಳನ್ನು ಇಲ್ಲಿ ನಮೂದಿಸಿ...",
  confirm: "ಖಚಿತಪಡಿಸಿ",
  cancel: "ರದ್ದುಮಾಡಿ",
  success: "ಯಶಸ್ಸು",
  time1: "ಬೆಳಿಗ್ಗೆ 10:00",
  time2: "ಬೆಳಿಗ್ಗೆ 11:00",
  time3: "ಮಧ್ಯಾಹ್ನ 12:00",
  time4: "ಸಂಜೆ 04:00",
  time5: "ಸಂಜೆ 05:00",
  tagline: "ಆರೋಗ್ಯ ಸೇವೆಯೊಂದಿಗೆ ಸುಲಭವಾಗಿ ಸಂಪರ್ಕಿಸಿ",
  patientLogin: "ರೋಗಿಯ ಲಾಗಿನ್",
  doctorLogin: "ವೈದ್ಯರ ಲಾಗಿನ್",
  newPatient: "ಹೊಸ ರೋಗಿ",
  existingPatient: "ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ರೋಗಿ",
  email: "ಇಮೇಲ್",
  emailPlaceholder: "ಉದಾ: john@example.com",
  age: "ವಯಸ್ಸು",
  gender: "ಲಿಂಗ",
  password: "ಪಾಸ್‌ವರ್ಡ್",
  login: "ಲಾಗಿನ್",
  noAccountError: "ಯಾವುದೇ ಖಾತೆ ಕಂಡುಬಂದಿಲ್ಲ. ದಯವಿಟ್ಟು ನೋಂದಾಯಿಸಿ.",
  invalidCredentials: "ಅಮಾನ್ಯ ಇಮೇಲ್ ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್.",
  male: "ಪುರುಷ",
  female: "ಮಹಿಳೆ",
  other: "ಇತರೆ",
  rememberMe: "ನನ್ನನ್ನು ನೆನಪಿಡಿ",
  forgotPassword: "ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿರುವಿರಾ?",
  otp: "OTP (ಐಚ್ಛಿಕ)",
  doctorDashboard: "ವೈದ್ಯರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
  patientDashboard: "ರೋಗಿಯ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
  viewAppointments: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
  managePatients: "ರೋಗಿಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
  bookedAppointments: "ಕಾಯ್ದಿರಿಸಿದ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳು",
  patientName: "ರೋಗಿಯ ಹೆಸರು",
  problem: "ಸಮಸ್ಯೆ",
  selectSpecialization: "ವಿಶೇಷತೆಯನ್ನು ಆರಿಸಿ",
  state: "ರಾಜ್ಯ",
  district: "ಜಿಲ್ಲೆ",
  lunchBreak: "ಊಟದ ವಿರಾಮ",
  start: "ಪ್ರಾರಂಭ",
  end: "ಅಂತ್ಯ",
  monday: "ಸೋಮವಾರ",
  tuesday: "ಮಂಗಳವಾರ",
  wednesday: "ಬುಧವಾರ",
  thursday: "ಗುರುವಾರ",
  friday: "ಶುಕ್ರವಾರ",
  saturday: "ಶನಿವಾರ",
  sunday: "ಭಾನುವಾರ",
  updateDetails: "ವಿವರಗಳನ್ನು ನವೀಕರಿಸಿ",
  availability: "ಲಭ್ಯತೆ",
  manageAvailability: "ಲಭ್ಯತೆಯನ್ನು ನಿರ್ವಹಿಸಿ",
  selectDays: "ಕೆಲಸದ ದಿನಗಳನ್ನು ಆರಿಸಿ",
  workingHours: "ಕೆಲಸದ ಸಮಯ",
  phone: "ಫೋನ್ ಸಂಖ್ಯೆ",
  all: "ಎಲ್ಲಾ",
  useLocation: "ನನ್ನ ಸ್ಥಳವನ್ನು ಬಳಸಿ",
  nearest: "ಹತ್ತಿರದ",
  locationError: "ಸ್ಥಳವನ್ನು ಪಡೆಯಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ಅನುಮತಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
  findingLocation: "ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಹುಡುಕಲಾಗುತ್ತಿದೆ...",
  distance: "ದೂರ",
  km: "ಕಿಮೀ",
  pending: "ಬಾಕಿ ಇದೆ",
  patientRecords: "ರೋಗಿಯ ದಾಖಲೆಗಳು",
  messages: "ಸಂದೇಶಗಳು",
  profileSettings: "ಪ್ರೊಫೈಲ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
  appointmentsToday: "ಇಂದಿನ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳು",
  pendingMessages: "ಬಾಕಿ ಇರುವ ಸಂದೇಶಗಳು",
  notifications: "ಅಧಿಸೂಚನೆಗಳು",
  enableAdvancedFeatures: "ಸುಧಾರಿತ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ",
  emergencyCall: "ತುರ್ತು ಕರೆ 108",
  chat: "ಚಾಟ್",
  enterOtp: "OTP ನಮೂದಿಸಿ",
  otpSent: "ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗೆ OTP ಕಳುಹಿಸಲಾಗಿದೆ",
  verify: "ಪರಿಶೀಲಿಸಿ",
  spec_general: "ಸಾಮಾನ್ಯ ವೈದ್ಯಕೀಯ",
  spec_cardiology: "ಹೃದಯ ರೋಗ ತಜ್ಞರು",
  spec_neurology: "ನರರೋಗ ವಿಜ್ಞಾನ (ಮೆದುಳು ಮತ್ತು ನರಗಳು)",
  spec_orthopedics: "ಮೂಳೆ ರೋಗ ತಜ್ಞರು (ಮೂಳೆಗಳು ಮತ್ತು ಕೀಲುಗಳು)",
  spec_pediatrics: "ಮಕ್ಕಳ ವೈದ್ಯರು (ಮಕ್ಕಳ ತಜ್ಞರು)",
  spec_gynecology: "ಸ್ತ್ರೀರೋಗ ಶಾಸ್ತ್ರ ಮತ್ತು ಪ್ರಸೂತಿ",
  spec_dermatology: "ಚರ್ಮ ರೋಗ ತಜ್ಞರು (ಚರ್ಮ ತಜ್ಞರು)",
  spec_ophthalmology: "ನೇತ್ರ ವಿಜ್ಞಾನ (ಕಣ್ಣಿನ ತಜ್ಞರು)",
  spec_ent: "ಇಎನ್ಟಿ (ಕಿವಿ, ಮೂಗು, ಗಂಟಲು)",
  spec_dentistry: "ದಂತ ವೈದ್ಯಕೀಯ",
  spec_pulmonology: "ಶ್ವಾಸಕೋಶದ ವಿಜ್ಞಾನ (ಶ್ವಾಸಕೋಶಗಳು)",
  spec_gastroenterology: "ಜೀರ್ಣಾಂಗ ವಿಜ್ಞಾನ (ಜೀರ್ಣಾಂಗ ವ್ಯವಸ್ಥೆ)",
  spec_nephrology: "ಮೂತ್ರಪಿಂಡ ವಿಜ್ಞಾನ (ಮೂತ್ರಪಿಂಡಗಳು)",
  spec_urology: "ಮೂತ್ರಶಾಸ್ತ್ರ",
  spec_endocrinology: "ಅಂತಃಸ್ರಾವಶಾಸ್ತ್ರ (ಹಾರ್ಮೋನುಗಳು)",
  spec_oncology: "ಕ್ಯಾನ್ಸರ್ ವಿಜ್ಞಾನ (ಕ್ಯಾನ್ಸರ್ ತಜ್ಞರು)",
  spec_hematology: "ರಕ್ತ ವಿಜ್ಞಾನ (ರಕ್ತ)",
  spec_psychiatry: "ಮನೋವೈದ್ಯಶಾಸ್ತ್ರ (ಮಾನಸಿಕ ಆರೋಗ್ಯ)",
  spec_psychology: "ಮನೋವಿಜ್ಞಾನ",
  spec_gen_surgery: "ಸಾಮಾನ್ಯ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ",
  spec_plastic_surgery: "ಪ್ಲಾಸ್ಟಿಕ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ",
  spec_neurosurgery: "ನ್ಯೂರೋ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ",
  spec_cardiothoracic: "ಹೃದಯ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ",
  spec_radiology: "ವಿಕಿರಣಶಾಸ್ತ್ರ",
  spec_anesthesiology: "ಅರಿವಳಿಕೆ ಶಾಸ್ತ್ರ",
  spec_emergency_med: "ತುರ್ತು ವೈದ್ಯಕೀಯ",
  spec_rheumatology: "ಸಂಧಿವಾತ ಶಾಸ್ತ್ರ",
  spec_infectious: "ಸಾಂಕ್ರಾಮಿಕ ರೋಗ"
};

const tamilTexts = {
  appName: "கிராம ஹெல்த் கனெக்ட்",
  selectLanguage: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
  welcome: "கிராம ஹெல்த்திற்கு உங்களை வரவேற்கிறோம்",
  register: "நோயாளி பதிவு",
  doctors: "மருத்துவரைத் தேடுங்கள்",
  appointments: "எனது முன்பதிவுகள்",
  teleConsult: "டெலி-ஆலோசனை",
  emergency: "அவசரம்",
  emergencyMsg: "உடனடி மருத்துவ அவசரத்திற்கு தயவுசெய்து 108 ஐ அழைக்கவும். உங்கள் அருகிலுள்ள சுகாதார மையம் 5 கிமீ தொலைவில் உள்ளது.",
  home: "முகப்பு",
  profile: "சுயவிவரம்",
  name: "முழு பெயர்",
  mobile: "மொபைல் எண்",
  village: "கிராமத்தின் பெயர்",
  healthProblem: "ஆரோக்கிய பிரச்சனையை விவரிக்கவும்",
  save: "விவரங்களைச் சேமிக்கவும்",
  bookNow: "முன்பதிவு செய்யுங்கள்",
  available: "கிடைக்கக்கூடியது",
  specialization: "சிறப்பு",
  days: "நாட்கள்",
  time: "நேரம்",
  confirmBooking: "முன்பதிவை உறுதிப்படுத்தவும்",
  bookingSuccess: "முன்பதிவு வெற்றிகரமாக முடிந்தது!",
  noAppointments: "முன்பதிவுகள் எதுவும் இல்லை.",
  deleteConfirm: "இந்த முன்பதிவை நீக்க விரும்புகிறீர்களா?",
  startConsult: "ஆலோசனையைத் தொடங்குங்கள்",
  endConsult: "ஆலோசனையை முடித்துக்கொள்ளுங்கள்",
  prescription: "மருத்துவர் குறிப்புகள் / மருந்துச்சீட்டு",
  savePrescription: "மருந்துச்சீட்டைச் சேமிக்கவும்",
  healthTips: "தினசரி ஆரோக்கிய குறிப்புகள்",
  tip1: "தினமும் குறைந்தது 8 கிளாஸ் தண்ணீர் குடிக்கவும்.",
  tip2: "சாப்பிடுவதற்கு முன் கைகளைக் கழுவவும்.",
  tip3: "புதிய பழங்கள் மற்றும் காய்கறிகளை உண்ணுங்கள்.",
  tip4: "ஒவ்வொரு இரவும் 7-8 மணிநேரம் தூங்குங்கள்.",
  back: "பின்னால்",
  close: "மூடு",
  patientInfo: "நோயாளி தகவல்",
  notRegistered: "இன்னும் பதிவு செய்யப்படவில்லை",
  registerNow: "இப்போதே பதிவு செய்யுங்கள்",
  selectDate: "தேதியைத் தேர்ந்தெடுக்கவும்",
  selectTime: "நேரத்தைத் தேர்ந்தெடுக்கவும்",
  videoPlaceholder: "வீடியோ இணைப்பு பிளேஸ்ஹோல்டர்",
  consultationNotes: "ஆலோசனை குறிப்புகள்",
  delete: "நீக்கு",
  live: "லைவ்",
  namePlaceholder: "உதாரணம்: ஜான் டோ",
  mobilePlaceholder: "உதாரணம்: 9876543210",
  villagePlaceholder: "உதாரணம்: ராம்பூர்",
  problemPlaceholder: "உங்கள் அறிகுறிகளை விவரிக்கவும்...",
  prescriptionPlaceholder: "மருந்துச்சீட்டு விவரங்களை இங்கே உள்ளிடவும்...",
  confirm: "உறுதிப்படுத்து",
  cancel: "ரத்து செய்",
  success: "வெற்றி",
  time1: "காலை 10:00",
  time2: "காலை 11:00",
  time3: "மதியம் 12:00",
  time4: "மாலை 04:00",
  time5: "மாலை 05:00",
  tagline: "சுகாதார சேவையுடன் எளிதாக இணையுங்கள்",
  patientLogin: "நோயாளி உள்நுழைவு",
  doctorLogin: "மருத்துவர் உள்நுழைவு",
  newPatient: "புதிய நோயாளி",
  existingPatient: "ஏற்கனவே உள்ள நோயாளி",
  email: "மின்னஞ்சல்",
  emailPlaceholder: "உதாரணம்: john@example.com",
  age: "வயது",
  gender: "பாலினம்",
  password: "கடவுச்சொல்",
  login: "உள்நுழை",
  noAccountError: "கணக்கு எதுவும் இல்லை. தயவுசெய்து பதிவு செய்யவும்.",
  invalidCredentials: "தவறான மின்னஞ்சல் அல்லது கடவுச்சொல்.",
  male: "ஆண்",
  female: "பெண்",
  other: "மற்றவை",
  rememberMe: "என்னை நினைவில் கொள்க",
  forgotPassword: "கடவுச்சொல்லை மறந்துவிட்டீர்களா?",
  otp: "OTP (விருப்பமானது)",
  doctorDashboard: "மருத்துவர் டேஷ்போர்டு",
  patientDashboard: "நோயாளி டேஷ்போர்டு",
  viewAppointments: "முன்பதிவுகளைப் பார்க்கவும்",
  managePatients: "நோயாளிகளை நிர்வகிக்கவும்",
  bookedAppointments: "முன்பதிவு செய்யப்பட்ட சந்திப்புகள்",
  patientName: "நோயாளி பெயர்",
  problem: "பிரச்சனை",
  selectSpecialization: "சிறப்பைத் தேர்ந்தெடுக்கவும்",
  state: "மாநிலம்",
  district: "மாவட்டம்",
  lunchBreak: "மதிய உணவு இடைவேளை",
  start: "தொடக்கம்",
  end: "முடிவு",
  monday: "திங்கட்கிழமை",
  tuesday: "செவ்வாய்க்கிழமை",
  wednesday: "புதன்கிழமை",
  thursday: "வியாழக்கிழமை",
  friday: "வெள்ளிக்கிழமை",
  saturday: "சனிக்கிழமை",
  sunday: "ஞாயிற்றுக்கிழமை",
  updateDetails: "விவரங்களைப் புதுப்பிக்கவும்",
  availability: "கிடைக்கும் தன்மை",
  manageAvailability: "கிடைக்கும் தன்மையை நிர்வகிக்கவும்",
  selectDays: "வேலை நாட்களைத் தேர்ந்தெடுக்கவும்",
  workingHours: "வேலை நேரம்",
  phone: "தொலைபேசி எண்",
  all: "அனைத்தும்",
  useLocation: "எனது இருப்பிடத்தைப் பயன்படுத்தவும்",
  nearest: "அருகிலுள்ள",
  locationError: "இருப்பிடத்தைப் பெற முடியவில்லை. அனுமதிகளைச் சரிபார்க்கவும்.",
  findingLocation: "உங்கள் இருப்பிடத்தைத் தேடுகிறது...",
  distance: "தூரம்",
  km: "கிமீ",
  pending: "நிலுவையில் உள்ளது",
  patientRecords: "நோயாளி பதிவுகள்",
  messages: "செய்திகள்",
  profileSettings: "சுயவிவர அமைப்புகள்",
  appointmentsToday: "இன்றைய முன்பதிவுகள்",
  pendingMessages: "நிலுவையில் உள்ள செய்திகள்",
  notifications: "அறிவிப்புகள்",
  enableAdvancedFeatures: "மேம்பட்ட அம்சங்களை இயக்கு",
  emergencyCall: "அவசர அழைப்பு 108",
  chat: "அரட்டை",
  enterOtp: "OTP ஐ உள்ளிடவும்",
  otpSent: "உங்கள் மொபைல் எண்ணுக்கு OTP அனுப்பப்பட்டுள்ளது",
  verify: "சரிபார்க்கவும்",
  spec_general: "பொது மருத்துவம்",
  spec_cardiology: "இதய நோய் நிபுணர்",
  spec_neurology: "நரம்பியல் (மூளை மற்றும் நரம்புகள்)",
  spec_orthopedics: "எலும்பு மருத்துவம் (எலும்புகள் மற்றும் மூட்டுகள்)",
  spec_pediatrics: "குழந்தை மருத்துவம் (குழந்தை நிபுணர்)",
  spec_gynecology: "மகளிர் மருத்துவம் மற்றும் மகப்பேறியல்",
  spec_dermatology: "தோல் மருத்துவம் (தோல் நிபுணர்)",
  spec_ophthalmology: "கண் மருத்துவம் (கண் நிபுணர்)",
  spec_ent: "காது மூக்கு தொண்டை (ENT)",
  spec_dentistry: "பல் மருத்துவம்",
  spec_pulmonology: "நுரையீரல் மருத்துவம் (நுரையீரல்)",
  spec_gastroenterology: "இரைப்பை குடல் மருத்துவம் (செரிமான அமைப்பு)",
  spec_nephrology: "சிறுநீரக மருத்துவம் (சிறுநீரகங்கள்)",
  spec_urology: "சிறுநீரகவியல்",
  spec_endocrinology: "நாளமில்லா சுரப்பியல் (ஹார்மோன்கள்)",
  spec_oncology: "புற்றுநோய் மருத்துவம் (புற்றுநோய் நிபுணர்)",
  spec_hematology: "ரத்தவியல் (இரத்தம்)",
  spec_psychiatry: "மனநல மருத்துவம் (மன ஆரோக்கியம்)",
  spec_psychology: "உளவியல்",
  spec_gen_surgery: "பொது அறுவை சிகிச்சை",
  spec_plastic_surgery: "பிளாஸ்டிக் அறுவை சிகிச்சை",
  spec_neurosurgery: "நரம்பு அறுவை சிகிச்சை",
  spec_cardiothoracic: "இதய அறுவை சிகிச்சை",
  spec_radiology: "கதிரியக்கவியல்",
  spec_anesthesiology: "மயக்கவியல்",
  spec_emergency_med: "அவசர மருத்துவம்",
  spec_rheumatology: "வாதவியல்",
  spec_infectious: "தொற்று நோய்"
};

const malayalamTexts = {
  appName: "ഗ്രാമ ഹെൽത്ത് കണക്ട്",
  selectLanguage: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക",
  welcome: "ഗ്രാമ ഹെൽത്തിലേക്ക് സ്വാഗതം",
  register: "രോഗി രജിസ്ട്രേഷൻ",
  doctors: "ഡോക്ടറെ കണ്ടെത്തുക",
  appointments: "എന്റെ അപ്പോയിന്റ്‌മെന്റുകൾ",
  teleConsult: "ടെലി-കൺസൾട്ടേഷൻ",
  emergency: "അടിയന്തരാവസ്ഥ",
  emergencyMsg: "അടിയന്തിര മെഡിക്കൽ സഹായത്തിന് ദയവായി 108 വിളിക്കുക. നിങ്ങളുടെ അടുത്തുള്ള ആരോഗ്യ കേന്ദ്രം 5 കിലോമീറ്റർ അകലെയാണ്.",
  home: "ഹോം",
  profile: "പ്രൊഫൈൽ",
  name: "പൂർണ്ണമായ പേര്",
  mobile: "മൊബൈൽ നമ്പർ",
  village: "ഗ്രാമത്തിന്റെ പേര്",
  healthProblem: "ആരോഗ്യ പ്രശ്നം വിവരിക്കുക",
  save: "വിവരങ്ങൾ സംരക്ഷിക്കുക",
  bookNow: "അപ്പോയിന്റ്‌മെന്റ് ബുക്ക് ചെയ്യുക",
  available: "ലഭ്യമാണ്",
  specialization: "സ്പെഷ്യലൈസേഷൻ",
  days: "ദിവസങ്ങൾ",
  time: "സമയം",
  confirmBooking: "ബുക്കിംഗ് സ്ഥിരീകരിക്കുക",
  bookingSuccess: "അപ്പോയിന്റ്‌മെന്റ് വിജയകരമായി ബുക്ക് ചെയ്തു!",
  noAppointments: "അപ്പോയിന്റ്‌മെന്റുകളൊന്നും കണ്ടെത്തിയില്ല.",
  deleteConfirm: "ഈ അപ്പോയിന്റ്‌മെന്റ് ഇല്ലാതാക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നുണ്ടോ?",
  startConsult: "കൺസൾട്ടേഷൻ ആരംഭിക്കുക",
  endConsult: "കൺസൾട്ടേഷൻ അവസാനിപ്പിക്കുക",
  prescription: "ഡോക്ടറുടെ കുറിപ്പുകൾ / പ്രിസ്‌ക്രിപ്ഷൻ",
  savePrescription: "പ്രിസ്‌ക്രിപ്ഷൻ സംരക്ഷിക്കുക",
  healthTips: "ദിവസേനയുള്ള ആരോഗ്യ നുറുങ്ങുകൾ",
  tip1: "ദിവസവും കുറഞ്ഞത് 8 ഗ്ലാസ് വെള്ളം കുടിക്കുക.",
  tip2: "ഭക്ഷണം കഴിക്കുന്നതിന് മുമ്പ് കൈകൾ കഴുകുക.",
  tip3: "പുതിയ പഴങ്ങളും പച്ചക്കറികളും കഴിക്കുക.",
  tip4: "എല്ലാ രാത്രിയും 7-8 മണിക്കൂർ ഉറങ്ങുക.",
  back: "പിന്നിലേക്ക്",
  close: "അടയ്ക്കുക",
  patientInfo: "രോഗിയുടെ വിവരങ്ങൾ",
  notRegistered: "ഇതുവരെ രജിസ്റ്റർ ചെയ്തിട്ടില്ല",
  registerNow: "ഇപ്പോൾ രജിസ്റ്റർ ചെയ്യുക",
  selectDate: "തീയതി തിരഞ്ഞെടുക്കുക",
  selectTime: "സമയം തിരഞ്ഞെടുക്കുക",
  videoPlaceholder: "വീഡിയോ കണക്ഷൻ പ്ലേസ്‌ഹോൾഡർ",
  consultationNotes: "കൺസൾട്ടേഷൻ കുറിപ്പുകൾ",
  delete: "ഇല്ലാതാക്കുക",
  live: "ലൈവ്",
  namePlaceholder: "ഉദാഹരണത്തിന്: ജോൺ ഡോ",
  mobilePlaceholder: "ഉദാഹരണത്തിന്: 9876543210",
  villagePlaceholder: "ഉദാഹരണത്തിന്: രാംപൂർ",
  problemPlaceholder: "നിങ്ങളുടെ ലക്ഷണങ്ങൾ വിവരിക്കുക...",
  prescriptionPlaceholder: "പ്രിസ്‌ക്രിപ്ഷൻ വിവരങ്ങൾ ഇവിടെ നൽകുക...",
  confirm: "സ്ഥിരീകരിക്കുക",
  cancel: "റദ്ദാക്കുക",
  success: "വിജയം",
  time1: "രാവിലെ 10:00",
  time2: "രാവിലെ 11:00",
  time3: "ഉച്ചയ്ക്ക് 12:00",
  time4: "വൈകുന്നೇരം 04:00",
  time5: "വൈകുന്നೇരം 05:00",
  tagline: "ആരോഗ്യ സേവനവുമായി എളുപ്പത്തിൽ ബന്ധപ്പെടുക",
  patientLogin: "രോഗി ലോഗിൻ",
  doctorLogin: "ഡോക്ടർ ലോഗിൻ",
  newPatient: "പുതിയ രോഗി",
  existingPatient: "നിലവിലുള്ള രോഗി",
  email: "ഇമെയിൽ",
  emailPlaceholder: "ഉദാഹരണത്തിന്: john@example.com",
  age: "വയസ്സ്",
  gender: "ലിംഗം",
  password: "പാസ്‌വേഡ്",
  login: "ലോഗിൻ",
  noAccountError: "അക്കൗണ്ട് കണ്ടെത്തിയില്ല. ദയവായി രജിസ്റ്റർ ചെയ്യുക.",
  invalidCredentials: "അസാധുവായ ഇമെയിൽ അല്ലെങ്കിൽ പാസ്‌വേഡ്.",
  male: "പുരുഷൻ",
  female: "സ്ത്രീ",
  other: "മറ്റുള്ളവ",
  rememberMe: "എന്നെ ഓർക്കുക",
  forgotPassword: "പാസ്‌വേഡ് മറന്നോ?",
  otp: "OTP (ഓപ്ഷണൽ)",
  doctorDashboard: "ഡോക്ടർ ഡാഷ്‌ബോർഡ്",
  patientDashboard: "രോഗി ഡാഷ്‌ബോർഡ്",
  viewAppointments: "അപ്പോയിന്റ്‌മെന്റുകൾ കാണുക",
  managePatients: "രോഗികളെ കൈകാര്യം ചെയ്യുക",
  bookedAppointments: "ബുക്ക് ചെയ്ത അപ്പോയിന്റ്‌മെന്റുകൾ",
  patientName: "രോഗിയുടെ പേര്",
  problem: "പ്രശ്നം",
  selectSpecialization: "സ്പെഷ്യലൈസേഷൻ തിരഞ്ഞെടുക്കുക",
  state: "സംസ്ഥാനം",
  district: "ജില്ല",
  lunchBreak: "ഉച്ചഭക്ഷണ ഇടവേള",
  start: "തുടക്കം",
  end: "അവസാനം",
  monday: "തിങ്കളാഴ്ച",
  tuesday: "ചൊവ്വാഴ്ച",
  wednesday: "ബുധനാഴ്ച",
  thursday: "വ്യാഴാഴ്ച",
  friday: "വെള്ളിയാഴ്ച",
  saturday: "ശനിയാഴ്ച",
  sunday: "ഞായറാഴ്ച",
  updateDetails: "വിവരങ്ങൾ പുതുക്കുക",
  availability: "ലഭ്യത",
  manageAvailability: "ലഭ്യത നിയന്ത്രിക്കുക",
  selectDays: "ജോലി ദിവസങ്ങൾ തിരഞ്ഞെടുക്കുക",
  workingHours: "ജോലി സമയം",
  phone: "ഫോൺ നമ്പർ",
  all: "എല്ലാം",
  useLocation: "എന്റെ ലൊക്കേഷൻ ഉപയോഗിക്കുക",
  nearest: "ഏറ്റവും അടുത്തുള്ള",
  locationError: "ലൊക്കേഷൻ ലഭ്യമല്ല. അനുമതികൾ പരിശോധിക്കുക.",
  findingLocation: "നിങ്ങളുടെ ലൊക്കേഷൻ കണ്ടെത്തുന്നു...",
  distance: "ദൂരം",
  km: "കിലോമീറ്റർ",
  pending: "തീർപ്പാക്കാത്തത്",
  patientRecords: "രോഗി റെക്കോർഡുകൾ",
  messages: "സന്ദേശങ്ങൾ",
  profileSettings: "പ്രൊഫൈൽ ക്രമീകരണങ്ങൾ",
  appointmentsToday: "ഇന്നത്തെ അപ്പോയിന്റ്‌മെന്റുകൾ",
  pendingMessages: "തീർപ്പാക്കാത്ത സന്ദേശങ്ങൾ",
  notifications: "അറിയിപ്പുകൾ",
  enableAdvancedFeatures: "നൂതന സവിശേഷതകൾ പ്രവർത്തനക്ഷമമാക്കുക",
  emergencyCall: "അടിയന്തര കോൾ 108",
  chat: "ചാറ്റ്",
  enterOtp: "OTP നൽകുക",
  otpSent: "നിങ്ങളുടെ മൊബൈൽ നമ്പറിലേക്ക് OTP അയച്ചു",
  verify: "സ്ഥിരീകരിക്കുക",
  spec_general: "ജനറൽ മെഡിസിൻ",
  spec_cardiology: "ഹൃദ്രോഗ വിദഗ്ധൻ",
  spec_neurology: "ന്യൂറോളജി (തലച്ചോറും ഞരമ്പുകളും)",
  spec_orthopedics: "ഓർത്തോപീഡിക്സ് (അസ്ഥികളും സന്ധികളും)",
  spec_pediatrics: "പീഡിയാട്രിക്സ് (കുട്ടികളുടെ വിദഗ്ധൻ)",
  spec_gynecology: "ഗൈനക്കോളജി & ഒബ്‌സ്റ്റട്രിക്‌സ്",
  spec_dermatology: "ഡെർമറ്റോളജി (ചർമ്മ വിദഗ്ധൻ)",
  spec_ophthalmology: "ഒഫ്താൽമോളജി (കണ്ണ് വിദഗ്ധൻ)",
  spec_ent: "ഇഎൻടി (ചെവി, മൂക്ക്, തൊണ്ട)",
  spec_dentistry: "ദന്തചികിത്സ",
  spec_pulmonology: "പൾമണോളജി (ശ്വാസകോശം)",
  spec_gastroenterology: "ഗ്യാസ്ട്രോഎൻട്രോളജി (ദഹനവ്യവസ്ഥ)",
  spec_nephrology: "നെഫ്രോളജി (വൃക്കകൾ)",
  spec_urology: "യൂറോളജി",
  spec_endocrinology: "എൻഡോക്രൈനോളജി (ഹോർമോണുകൾ)",
  spec_oncology: "ഓങ്കോളജി (ക്യാൻസർ വിദഗ്ധൻ)",
  spec_hematology: "ഹെമറ്റോളജി (രക്തം)",
  spec_psychiatry: "സൈക്യാട്രി (മാനസികാരോഗ്യം)",
  spec_psychology: "സൈക്കോളജി",
  spec_gen_surgery: "ജനറൽ സർജറി",
  spec_plastic_surgery: "പ്ലാസ്റ്റിക് സർജറി",
  spec_neurosurgery: "ന്യൂറോ സർജറി",
  spec_cardiothoracic: "കാർഡിയോതൊറാസിക് സർജറി",
  spec_radiology: "റേഡിയോളജി",
  spec_anesthesiology: "അനസ്തേഷ്യോളജി",
  spec_emergency_med: "എമർജൻസി മെഡിസിൻ",
  spec_rheumatology: "റുമറ്റോളജി",
  spec_infectious: "ഇൻഫെക്ഷ്യസ് ഡിസീസ്"
};

// --- Static Data ---

const DOCTORS = [
  { id: 1, name: "Dr. Ramesh Babu", specialization: "spec_general", days: "Mon, Wed, Fri", time: "10:00 AM - 02:00 PM", lat: 17.3850, lng: 78.4867, state: "Andhra Pradesh", district: "Guntur", village: "Rampur" },
  { id: 2, name: "Dr. Lakshmi Devi", specialization: "spec_pediatrics", days: "Tue, Thu, Sat", time: "09:00 AM - 01:00 PM", lat: 17.4000, lng: 78.5000, state: "Telangana", district: "Hyderabad", village: "Kukatpally" },
  { id: 3, name: "Dr. Venkatesh", specialization: "spec_cardiology", days: "Mon, Thu", time: "04:00 PM - 07:00 PM", lat: 17.3500, lng: 78.4500, state: "Karnataka", district: "Bangalore", village: "Whitefield" },
  { id: 4, name: "Dr. Saritha", specialization: "spec_gynecology", days: "Wed, Sat", time: "11:00 AM - 03:00 PM", lat: 17.4200, lng: 78.5500, state: "Tamil Nadu", district: "Chennai", village: "Adyar" },
  { id: 5, name: "Dr. Anand", specialization: "spec_orthopedics", days: "Mon, Tue, Fri", time: "05:00 PM - 08:00 PM", lat: 17.3000, lng: 78.4000, state: "Kerala", district: "Kochi", village: "Aluva" },
];

const TELUGU_DOCTORS = [
  { id: 1, name: "డాక్టర్ రమేష్ బాబు", specialization: "spec_general", days: "సోమ, బుధ, శుక్ర", time: "ఉదయం 10:00 - మధ్యాహ్నం 02:00", lat: 17.3850, lng: 78.4867, state: "ఆంధ్రప్రదేశ్", district: "గుంటూరు", village: "రాంపూర్" },
  { id: 2, name: "డాక్టర్ లక్ష్మీ దేవి", specialization: "spec_pediatrics", days: "మంగళ, గురు, శని", time: "ఉదయం 09:00 - మధ్యాహ్నం 01:00", lat: 17.4000, lng: 78.5000, state: "తెలంగాణ", district: "హైదరాబాద్", village: "కూకట్‌పల్లి" },
  { id: 3, name: "డాక్టర్ వెంకటేష్", specialization: "spec_cardiology", days: "సోమ, గురు", time: "సాయంత్రం 04:00 - రాత్రి 07:00", lat: 17.3500, lng: 78.4500, state: "కర్ణాటక", district: "బెంగళూరు", village: "వైట్‌ఫీల్డ్" },
  { id: 4, name: "డాక్టర్ సరిత", specialization: "spec_gynecology", days: "బుధ, శని", time: "ఉదయం 11:00 - మధ్యాహ్నం 03:00", lat: 17.4200, lng: 78.5500, state: "తమిళనాడు", district: "చెన్నై", village: "అడయార్" },
  { id: 5, name: "డాక్టర్ ఆనంద్", specialization: "spec_orthopedics", days: "సోమ, మంగళ, శుక్ర", time: "సాయంత్రం 05:00 - రాత్రి 08:00", lat: 17.3000, lng: 78.4000, state: "కేరళ", district: "కొచ్చి", village: "అలువా" },
];

const HINDI_DOCTORS = [
  { id: 1, name: "डॉ. रमेश बाबू", specialization: "spec_general", days: "सोम, बुध, शुक्र", time: "सुबह 10:00 - दोपहर 02:00", lat: 17.3850, lng: 78.4867, state: "आंध्र प्रदेश", district: "गुंटूर", village: "रामपुर" },
  { id: 2, name: "डॉ. लक्ष्मी देवी", specialization: "spec_pediatrics", days: "मंगल, गुरु, शनि", time: "सुबह 09:00 - दोपहर 01:00", lat: 17.4000, lng: 78.5000, state: "तेलंगाना", district: "हैदराबाद", village: "कूकटपल्ली" },
  { id: 3, name: "डॉ. वेंकटेश", specialization: "spec_cardiology", days: "सोम, गुरु", time: "शाम 04:00 - रात 07:00", lat: 17.3500, lng: 78.4500, state: "कर्नाटक", district: "बेंगलुरु", village: "वाइटफील्ड" },
  { id: 4, name: "डॉ. सरिता", specialization: "spec_gynecology", days: "बुध, शनि", time: "सुबह 11:00 - दोपहर 03:00", lat: 17.4200, lng: 78.5500, state: "तमिलनाडु", district: "चेन्नई", village: "अड्यार" },
  { id: 5, name: "डॉ. आनंद", specialization: "spec_orthopedics", days: "सोम, मंगल, शुक्र", time: "शाम 05:00 - रात 08:00", lat: 17.3000, lng: 78.4000, state: "केरल", district: "कोच्चि", village: "अलुवा" },
];

const KANNADA_DOCTORS = [
  { id: 1, name: "ಡಾ. ರಮೇಶ್ ಬಾಬು", specialization: "spec_general", days: "ಸೋಮ, ಬುಧ, ಶುಕ್ರ", time: "ಬೆಳಿಗ್ಗೆ 10:00 - ಮಧ್ಯಾಹ್ನ 02:00", lat: 17.3850, lng: 78.4867, state: "ಆಂಧ್ರಪ್ರದೇಶ", district: "ಗುಂಟೂರು", village: "ರಾಂಪುರ" },
  { id: 2, name: "ಡಾ. ಲಕ್ಷ್ಮಿ ದೇವಿ", specialization: "spec_pediatrics", days: "ಮಂಗಳ, ಗುರು, ಶನಿ", time: "ಬೆಳಿಗ್ಗೆ 09:00 - ಮಧ್ಯಾಹ್ನ 01:00", lat: 17.4000, lng: 78.5000, state: "ತೆಲಂಗಾಣ", district: "ಹೈದರಾಬಾದ್", village: "ಕೂಕಟ್‌ಪಲ್ಲಿ" },
  { id: 3, name: "ಡಾ. ವೆಂಕಟೇಶ್", specialization: "spec_cardiology", days: "ಸೋಮ, ಗುರು", time: "ಸಂಜೆ 04:00 - ರಾತ್ರಿ 07:00", lat: 17.3500, lng: 78.4500, state: "ಕರ್ನಾಟಕ", district: "ಬೆಂಗಳೂರು", village: "ವೈಟ್‌ಫೀಲ್ಡ್" },
  { id: 4, name: "ಡಾ. ಸರಿತಾ", specialization: "spec_gynecology", days: "ಬುಧ, ಶನಿ", time: "ಬೆಳಿಗ್ಗೆ 11:00 - ಮಧ್ಯಾಹ್ನ 03:00", lat: 17.4200, lng: 78.5500, state: "ತಮಿಳುನಾಡು", district: "ಚೆನ್ನೈ", village: "ಅಡ್ಯಾರ್" },
  { id: 5, name: "ಡಾ. ಆನಂದ್", specialization: "spec_orthopedics", days: "ಸೋಮ, ಮಂಗಳ, ಶುಕ್ರ", time: "ಸಂಜೆ 05:00 - ರಾತ್ರಿ 08:00", lat: 17.3000, lng: 78.4000, state: "ಕೇರಳ", district: "ಕೊಚ್ಚಿ", village: "ಅಲುವಾ" },
];

const TAMIL_DOCTORS = [
  { id: 1, name: "டாக்டர் ரமேஷ் பாபு", specialization: "spec_general", days: "திங்கள், புதன், வெள்ளி", time: "காலை 10:00 - மதியம் 02:00", lat: 17.3850, lng: 78.4867, state: "ஆந்திரப் பிரதேசம்", district: "குண்டூர்", village: "ராம்பூர்" },
  { id: 2, name: "டாக்டர் லட்சுமி தேவி", specialization: "spec_pediatrics", days: "செவ்வாய், வியாழன், சனி", time: "காலை 09:00 - மதியம் 01:00", lat: 17.4000, lng: 78.5000, state: "தெலுங்கானா", district: "ஹைதராபாத்", village: "குகட்பள்ளி" },
  { id: 3, name: "டாக்டர் வெங்கடேஷ்", specialization: "spec_cardiology", days: "திங்கள், வியாழன்", time: "மாலை 04:00 - இரவு 07:00", lat: 17.3500, lng: 78.4500, state: "கர்நாடகா", district: "பெங்களூரு", village: "ஒயிட்ஃபீல்ட்" },
  { id: 4, name: "டாக்டர் சரிதா", specialization: "spec_gynecology", days: "புதன், சனி", time: "காலை 11:00 - மதியம் 03:00", lat: 17.4200, lng: 78.5500, state: "தமிழ்நாடு", district: "சென்னை", village: "அடையார்" },
  { id: 5, name: "டாக்டர் ஆனந்த்", specialization: "spec_orthopedics", days: "திங்கள், செவ்வாய், வெள்ளி", time: "மாலை 05:00 - இரவு 08:00", lat: 17.3000, lng: 78.4000, state: "கேரளா", district: "கொச்சி", village: "அலுவா" },
];

const MALAYALAM_DOCTORS = [
  { id: 1, name: "ഡോ. രമേഷ് ബാബു", specialization: "spec_general", days: "തിങ്കൾ, ബുധൻ, വെള്ളി", time: "രാവിലെ 10:00 - ഉച്ചയ്ക്ക് 02:00", lat: 17.3850, lng: 78.4867, state: "ആന്ധ്രാപ്രദേശ്", district: "ഗുണ്ടൂർ", village: "രാംപൂർ" },
  { id: 2, name: "ഡോ. ലക്ഷ്മി ദേവി", specialization: "spec_pediatrics", days: "ചൊവ്വ, വ്യാഴം, ശനി", time: "രാവിലെ 09:00 - ഉച്ചയ്ക്ക് 01:00", lat: 17.4000, lng: 78.5000, state: "തെലങ്കാന", district: "ഹൈദരാബാദ്", village: "കൂക്കട്പള്ളി" },
  { id: 3, name: "ഡോ. വെങ്കിടേഷ്", specialization: "spec_cardiology", days: "തിങ്കൾ, വ്യാഴം", time: "വൈകുന്നേരം 04:00 - രാത്രി 07:00", lat: 17.3500, lng: 78.4500, state: "കർണാടക", district: "ബാംഗ്ലൂർ", village: "വൈറ്റ്ഫീൽഡ്" },
  { id: 4, name: "ഡോ. സരിത", specialization: "spec_gynecology", days: "ബുധൻ, ശനി", time: "രാവിലെ 11:00 - ഉച്ചയ്ക്ക് 03:00", lat: 17.4200, lng: 78.5500, state: "തമിഴ്‌നാട്", district: "ചെന്നൈ", village: "അഡയാർ" },
  { id: 5, name: "ഡോ. ആനന്ദ്", specialization: "spec_orthopedics", days: "തിങ്കൾ, ചൊവ്വ, വെള്ളി", time: "വൈകുന്നേരം 05:00 - രാത്രി 08:00", lat: 17.3000, lng: 78.4000, state: "കേരളം", district: "കൊച്ചി", village: "അലുവ" },
];

type View = 'LANGUAGE_SELECT' | 'LANDING' | 'PATIENT_LOGIN_OPTIONS' | 'PATIENT_REGISTER' | 'PATIENT_LOGIN' | 'DOCTOR_LOGIN' | 'HOME' | 'REGISTRATION' | 'DOCTOR_LIST' | 'BOOKING' | 'MY_APPOINTMENTS' | 'TELE_CONSULT' | 'DOCTOR_PROFILE' | 'DOCTOR_APPOINTMENTS' | 'PATIENT_RECORDS' | 'MESSAGES' | 'NOTIFICATIONS' | 'CHATBOT';

type LanguageCode = 'EN' | 'TE' | 'HI' | 'KN' | 'TA' | 'ML';

const dictionaries: Record<LanguageCode, any> = {
  EN: englishTexts,
  TE: teluguTexts,
  HI: hindiTexts,
  KN: kannadaTexts,
  TA: tamilTexts,
  ML: malayalamTexts
};

export default function App() {
  const [language, setLanguage] = useState<LanguageCode | null>(null);
  const [currentView, setCurrentView] = useState<View>('LANGUAGE_SELECT');
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [userType, setUserType] = useState<'patient' | 'doctor' | null>(null);
  const [patientsList, setPatientsList] = useState<any[]>([]);
  const [registeredDoctors, setRegisteredDoctors] = useState<any[]>([]);
  const [appointments, setAppointments] = useState<any[]>([]);
  const [prescriptions, setPrescriptions] = useState<any[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [showEmergency, setShowEmergency] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [filterSpecialization, setFilterSpecialization] = useState<string>('All');
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showAdvancedFeatures, setShowAdvancedFeatures] = useState(false);
  const [otpSentTo, setOtpSentTo] = useState<string | null>(null);
  const [otpInput, setOtpInput] = useState('');
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);

  // Chat (doctor <-> patient messaging)
  const [activeChat, setActiveChat] = useState<{ doctorId: string; patientId: string; doctorName: string; patientName: string } | null>(null);
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [isSendingChat, setIsSendingChat] = useState(false);

  // Sahayak chatbot
  const [chatbotMessages, setChatbotMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([]);
  const [chatbotInput, setChatbotInput] = useState('');
  const [isChatbotThinking, setIsChatbotThinking] = useState(false);

  const t = dictionaries[language || 'EN'];
  
  // Full list of specialization keys from dictionary
  const allSpecializationKeys = [
    'spec_general', 'spec_cardiology', 'spec_neurology', 'spec_orthopedics', 'spec_pediatrics',
    'spec_gynecology', 'spec_dermatology', 'spec_ophthalmology', 'spec_ent', 'spec_dentistry',
    'spec_pulmonology', 'spec_gastroenterology', 'spec_nephrology', 'spec_urology', 'spec_endocrinology',
    'spec_oncology', 'spec_hematology', 'spec_psychiatry', 'spec_psychology', 'spec_gen_surgery',
    'spec_plastic_surgery', 'spec_neurosurgery', 'spec_cardiothoracic', 'spec_radiology', 'spec_anesthesiology',
    'spec_emergency_med', 'spec_rheumatology', 'spec_infectious'
  ];

  const specializations = ['All', ...allSpecializationKeys];

  // Calculate distance between two points (km)
  const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      alert(t.locationError);
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setIsLocating(false);
      },
      () => {
        alert(t.locationError);
        setIsLocating(false);
      }
    );
  };

  const allDoctors = [
    ...(language === 'TE' ? TELUGU_DOCTORS :
    language === 'HI' ? HINDI_DOCTORS :
    language === 'KN' ? KANNADA_DOCTORS :
    language === 'TA' ? TAMIL_DOCTORS :
    language === 'ML' ? MALAYALAM_DOCTORS : DOCTORS),
    ...registeredDoctors
  ].map((doc, idx) => {
      let distance = null;
      if (userLocation && doc.lat && doc.lng) {
        distance = getDistance(userLocation.lat, userLocation.lng, doc.lat, doc.lng);
      }
      return { ...doc, distance, id: doc.id || `reg-${idx}` };
    });

  const filteredDoctors = allDoctors.filter(doc => filterSpecialization === 'All' || doc.specialization === filterSpecialization);

  // Find the nearest doctor if location is available
  const nearestDoctorId = userLocation 
    ? [...allDoctors].sort((a, b) => (a.distance || Infinity) - (b.distance || Infinity))[0]?.id 
    : null;

  // Load data from API
  useEffect(() => {
    const savedLang = localStorage.getItem('ghc_lang');
    const savedUser = localStorage.getItem('ghc_user');
    const savedUserType = localStorage.getItem('ghc_user_type');

    if (savedLang) {
      setLanguage(savedLang as LanguageCode);
      if (savedUser && savedUserType) {
        const user = JSON.parse(savedUser);
        setCurrentUser(user);
        setUserType(savedUserType as 'patient' | 'doctor');
        setCurrentView('HOME');
      } else {
        setCurrentView('LANDING');
      }
    }

    // Fetch all doctors
    fetch('/api/doctors')
      .then(res => res.json())
      .then(data => setRegisteredDoctors(data));
  }, []);

  // Near real-time updates via polling
  useEffect(() => {
    if (!currentUser) return;

    const fetchAppointments = async () => {
      const endpoint = userType === 'patient' 
        ? `/api/appointments/patient/${currentUser.id}` 
        : `/api/appointments/doctor/${currentUser.id}`;
      
      try {
        const res = await fetch(endpoint);
        if (res.ok) {
          const data = await res.json();
          setAppointments(data);
        }
      } catch (err) {
        console.error("Failed to fetch appointments", err);
      }
    };

    fetchAppointments(); // Initial fetch
    const interval = setInterval(fetchAppointments, 10000); // Poll every 10s
    return () => clearInterval(interval);
  }, [currentUser, userType]);

  const saveLanguage = (lang: LanguageCode) => {
    setLanguage(lang);
    localStorage.setItem('ghc_lang', lang);
    if (!currentUser) {
      setCurrentView('LANDING');
    } else {
      setCurrentView('HOME');
    }
    setShowLangDropdown(false);
  };

  const handlePatientRegister = async (data: any) => {
    try {
      const res = await fetch('/api/patients/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        const resData = await res.json();
        const fullUser = { ...data, id: resData.id || data.id };
        setCurrentUser(fullUser);
        setUserType('patient');
        localStorage.setItem('ghc_user', JSON.stringify(fullUser));
        localStorage.setItem('ghc_user_type', 'patient');
        setCurrentView('HOME');
      } else {
        const err = await res.json();
        alert(err.error || "Registration failed");
      }
    } catch (err) {
      alert("Registration failed");
    }
  };

  const handlePatientLogin = async (mobile: string) => {
    try {
      const res = await fetch(`/api/patients/${mobile}`);
      if (res.ok) {
        const data = await res.json();
        setCurrentUser(data);
        setUserType('patient');
        localStorage.setItem('ghc_user', JSON.stringify(data));
        localStorage.setItem('ghc_user_type', 'patient');
        setOtpSentTo(null);
        setOtpInput('');
        setCurrentView('HOME');
        
        // Fetch appointments
        const appRes = await fetch(`/api/appointments/patient/${data.id}`);
        const appData = await appRes.json();
        setAppointments(appData);
      } else {
        alert(t.noAccountError);
        setOtpSentTo(null);
        setOtpInput('');
      }
    } catch (err) {
      alert("Login failed");
    }
  };

  const handleDoctorLogin = async (phone: string) => {
    try {
      const res = await fetch(`/api/doctors/${phone}`);
      if (res.ok) {
        const data = await res.json();
        setCurrentUser(data);
        setUserType('doctor');
        localStorage.setItem('ghc_user', JSON.stringify(data));
        localStorage.setItem('ghc_user_type', 'doctor');
        setCurrentView('HOME');

        // Fetch appointments
        const appRes = await fetch(`/api/appointments/doctor/${data.id}`);
        const appData = await appRes.json();
        setAppointments(appData);
      } else {
        // New doctor - start with empty profile but with phone
        const newDoc = { id: `doc-${Date.now()}`, phone, name: '', state: '', district: '', village: '', specialization: 'spec_general', availability: {} };
        setCurrentUser(newDoc);
        setUserType('doctor');
        setCurrentView('DOCTOR_PROFILE');
      }
    } catch (err) {
      alert("Login failed");
    }
  };

  const saveDoctorProfile = async (data: any) => {
    try {
      const res = await fetch('/api/doctors/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setCurrentUser(data);
        setUserType('doctor');
        localStorage.setItem('ghc_user', JSON.stringify(data));
        localStorage.setItem('ghc_user_type', 'doctor');
        setCurrentView('HOME');
        
        // Refresh doctors list
        const docsRes = await fetch('/api/doctors');
        const docsData = await docsRes.json();
        setRegisteredDoctors(docsData);
      }
    } catch (err) {
      alert("Failed to save profile");
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setUserType(null);
    localStorage.removeItem('ghc_user');
    localStorage.removeItem('ghc_user_type');
    setCurrentView('LANDING');
  };

  const savePatient = async (data: any) => {
    const updatedUser = { ...currentUser, ...data };
    try {
      const res = await fetch(`/api/patients/${currentUser.mobile}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setCurrentUser(updatedUser);
        localStorage.setItem('ghc_user', JSON.stringify(updatedUser));
        alert(t.success);
      }
    } catch (err) {
      alert("Failed to update profile");
    }
  };

  const bookAppointment = async (doctor: any, date: string, time: string) => {
    const newAppointment = {
      id: `app-${Date.now()}`,
      doctorId: doctor.id,
      doctorName: doctor.name,
      specialization: doctor.specialization,
      patientId: currentUser.id,
      patientName: currentUser.name,
      patientMobile: currentUser.mobile,
      patientEmail: currentUser.email,
      patientState: currentUser.state,
      patientDistrict: currentUser.district,
      patientVillage: currentUser.village,
      problem: currentUser.problem,
      date,
      time,
      status: 'pending'
    };

    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAppointment)
      });
      if (res.ok) {
        setAppointments([...appointments, newAppointment]);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          setCurrentView('MY_APPOINTMENTS');
        }, 2000);
      }
    } catch (err) {
      alert("Booking failed");
    }
  };

  const deleteAppointment = async (id: string) => {
    if (window.confirm(t.deleteConfirm)) {
      try {
        const res = await fetch(`/api/appointments/${id}`, {
          method: 'DELETE'
        });
        if (res.ok) {
          setAppointments(appointments.filter(app => app.id !== id));
        }
      } catch (err) {
        alert("Failed to delete appointment");
      }
    }
  };

  // Poll messages for the active chat conversation
  useEffect(() => {
    if (!activeChat) return;

    const fetchMessages = async () => {
      try {
        const res = await fetch(`/api/messages/${activeChat.doctorId}/${activeChat.patientId}`);
        if (res.ok) {
          const data = await res.json();
          setChatMessages(data);
        }
      } catch (err) {
        console.error("Failed to fetch messages", err);
      }
    };

    fetchMessages();
    const interval = setInterval(fetchMessages, 4000);
    return () => clearInterval(interval);
  }, [activeChat]);

  const openChat = (doctorId: string, patientId: string, doctorName: string, patientName: string) => {
    setActiveChat({ doctorId, patientId, doctorName, patientName });
    setChatMessages([]);
    setCurrentView('MESSAGES');
  };

  const sendChatMessage = async () => {
    if (!chatInput.trim() || !activeChat || !userType) return;
    const text = chatInput.trim();
    setChatInput('');
    setIsSendingChat(true);
    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          doctorId: activeChat.doctorId,
          patientId: activeChat.patientId,
          senderType: userType,
          text
        })
      });
      if (res.ok) {
        const saved = await res.json();
        setChatMessages(prev => [...prev, saved]);
      }
    } catch (err) {
      console.error("Failed to send message", err);
    } finally {
      setIsSendingChat(false);
    }
  };

  const sendChatbotMessage = async (textOverride?: string) => {
    const text = (textOverride ?? chatbotInput).trim();
    if (!text || isChatbotThinking) return;
    const history = chatbotMessages;
    setChatbotMessages(prev => [...prev, { role: 'user', text }]);
    setChatbotInput('');
    setIsChatbotThinking(true);
    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history })
      });
      const data = await res.json();
      if (res.ok) {
        setChatbotMessages(prev => [...prev, { role: 'model', text: data.reply }]);
      } else {
        setChatbotMessages(prev => [...prev, { role: 'model', text: data.error || "Sorry, something went wrong. Please try again." }]);
      }
    } catch (err) {
      setChatbotMessages(prev => [...prev, { role: 'model', text: "Sorry, something went wrong. Please try again." }]);
    } finally {
      setIsChatbotThinking(false);
    }
  };

  const savePrescription = (notes: string) => {
    const newPrescription = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      notes
    };
    const updated = [...prescriptions, newPrescription];
    setPrescriptions(updated);
    localStorage.setItem('ghc_prescriptions', JSON.stringify(updated));
    alert(t.savePrescription);
    setCurrentView('HOME');
  };

  // --- UI Components ---

  const Navbar = () => {
    // Logic: If user is a doctor and on the Home (Dashboard) view, 
    // we hide "Find a Doctor" and "Appointments" tabs.
    const isDoctorDashboard = userType === 'doctor' && currentView === 'HOME';

    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-3 px-2 z-50">
        {/* Home Tab - Always visible */}
        <button 
          onClick={() => setCurrentView('HOME')}
          className={cn("flex flex-col items-center gap-1", currentView === 'HOME' ? "text-emerald-600" : "text-gray-500")}
        >
          <Home size={24} />
          <span className="text-[10px] font-medium">{t.home}</span>
        </button>

        {/* Find a Doctor Tab - Hidden on Doctor Dashboard */}
        {!isDoctorDashboard && (
          <button 
            onClick={() => setCurrentView('DOCTOR_LIST')}
            className={cn("flex flex-col items-center gap-1", currentView === 'DOCTOR_LIST' || currentView === 'BOOKING' ? "text-emerald-600" : "text-gray-500")}
          >
            <Stethoscope size={24} />
            <span className="text-[10px] font-medium">{t.doctors}</span>
          </button>
        )}

        {/* Appointments Tab - Hidden on Doctor Dashboard */}
        {!isDoctorDashboard && (
          <button 
            onClick={() => setCurrentView(userType === 'doctor' ? 'DOCTOR_APPOINTMENTS' : 'MY_APPOINTMENTS')}
            className={cn("flex flex-col items-center gap-1", (currentView === 'MY_APPOINTMENTS' || currentView === 'DOCTOR_APPOINTMENTS') ? "text-emerald-600" : "text-gray-500")}
          >
            <Calendar size={24} />
            <span className="text-[10px] font-medium">{t.appointments}</span>
          </button>
        )}

        {/* Chatbot Tab - Visible for Patients */}
        {userType === 'patient' && (
          <button 
            onClick={() => setCurrentView('CHATBOT')}
            className={cn("flex flex-col items-center gap-1", currentView === 'CHATBOT' ? "text-emerald-600" : "text-gray-500")}
          >
            <MessageSquare size={24} />
            <span className="text-[10px] font-medium">Sahayak</span>
          </button>
        )}

        {/* Profile Tab - Always visible */}
        <button 
          onClick={() => setCurrentView(userType === 'doctor' ? 'DOCTOR_PROFILE' : 'REGISTRATION')}
          className={cn("flex flex-col items-center gap-1", (currentView === 'REGISTRATION' || currentView === 'DOCTOR_PROFILE') ? "text-emerald-600" : "text-gray-500")}
        >
          <User size={24} />
          <span className="text-[10px] font-medium">{t.profile}</span>
        </button>
      </div>
    );
  };

  const Header = ({ title, showBack = false, showLanguageToggle = false, showLogout = false }: { title: string, showBack?: boolean, showLanguageToggle?: boolean, showLogout?: boolean }) => (
    <div className="bg-emerald-600 text-white p-4 sticky top-0 z-40 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-3">
        {showBack && (
          <button onClick={() => {
            if (currentView === 'PATIENT_LOGIN_OPTIONS') setCurrentView('LANDING');
            else if (currentView === 'PATIENT_REGISTER' || currentView === 'PATIENT_LOGIN') setCurrentView('PATIENT_LOGIN_OPTIONS');
            else if (currentView === 'DOCTOR_LOGIN') setCurrentView('LANDING');
            else if (currentView === 'DOCTOR_PROFILE' || currentView === 'DOCTOR_APPOINTMENTS' || currentView === 'PATIENT_RECORDS' || currentView === 'MESSAGES' || currentView === 'NOTIFICATIONS' || currentView === 'CHATBOT') setCurrentView('HOME');
            else setCurrentView('HOME');
          }} className="p-1">
            <ArrowLeft size={24} />
          </button>
        )}
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        {showLogout && (
          <button 
            onClick={logout}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all active:scale-90"
            title={t.logout}
          >
            <LogOut size={20} />
          </button>
        )}
        {showLanguageToggle && (
          <div className="relative">
            <button 
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 border border-white/10 active:scale-95"
            >
              <Languages size={18} />
              <span>
                {language === 'EN' ? 'EN' : 
                 language === 'TE' ? 'TE' : 
                 language === 'HI' ? 'HI' : 
                 language === 'KN' ? 'KN' : 
                 language === 'TA' ? 'TA' : 'ML'}
              </span>
              <ChevronDown size={14} className={cn("transition-transform duration-200", showLangDropdown && "rotate-180")} />
            </button>
            {showLangDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden z-[60] animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-4 py-2 bg-emerald-50 border-b border-emerald-100">
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">{t.selectLanguage}</p>
                </div>
                <div className="py-1">
                  {[
                    { code: 'EN', label: 'English' },
                    { code: 'TE', label: 'తెలుగు' },
                    { code: 'HI', label: 'हिंदी' },
                    { code: 'KN', label: 'ಕನ್ನಡ' },
                    { code: 'TA', label: 'தமிழ்' },
                    { code: 'ML', label: 'മലയാളം' }
                  ].map((lang) => (
                    <button 
                      key={lang.code}
                      onClick={() => saveLanguage(lang.code as LanguageCode)} 
                      className={cn(
                        "w-full text-left px-4 py-3 text-sm transition-colors flex items-center justify-between",
                        language === lang.code ? "bg-emerald-50 text-emerald-700 font-bold" : "text-gray-700 hover:bg-emerald-50/50 font-medium"
                      )}
                    >
                      {lang.label}
                      {language === lang.code && <CheckCircle2 size={14} className="text-emerald-500" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  if (currentView === 'LANGUAGE_SELECT') {
    return (
      <div className="min-h-screen bg-emerald-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border border-emerald-100">
          <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="text-emerald-600" size={40} fill="currentColor" />
          </div>
          <h1 className="text-3xl font-bold text-emerald-800 mb-2">Grama Health</h1>
          <p className="text-emerald-600 mb-8">{language === 'TE' ? teluguTexts.tagline : englishTexts.tagline}</p>
          
          <h2 className="text-xl font-semibold text-gray-700 mb-6 flex items-center justify-center gap-2">
            <Languages size={24} className="text-emerald-600" />
            Select Your Language / మీ భాషను ఎంచుకోండి
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { code: 'EN', label: 'English' },
              { code: 'TE', label: 'తెలుగు' },
              { code: 'HI', label: 'हिंदी' },
              { code: 'KN', label: 'ಕನ್ನಡ' },
              { code: 'TA', label: 'தமிழ்' },
              { code: 'ML', label: 'മലയാളം' }
            ].map((lang) => (
              <button 
                key={lang.code}
                onClick={() => saveLanguage(lang.code as LanguageCode)}
                className="py-4 bg-white text-emerald-600 border-2 border-emerald-100 rounded-2xl text-lg font-bold shadow-sm hover:border-emerald-600 hover:bg-emerald-50 transition-all active:scale-95 flex flex-col items-center gap-1 group"
              >
                <span className="group-hover:scale-110 transition-transform">{lang.label}</span>
                <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'LANDING') {
    return (
      <div className="min-h-screen bg-emerald-50 flex flex-col">
        <Header title={t.appName} showLanguageToggle />
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center space-y-4">
              <div className="bg-white w-24 h-24 rounded-3xl shadow-xl flex items-center justify-center mx-auto rotate-3 hover:rotate-0 transition-transform duration-300">
                <Heart className="text-emerald-600" size={48} fill="currentColor" />
              </div>
              <h1 className="text-4xl font-black text-emerald-900 tracking-tight">{t.appName}</h1>
              <p className="text-emerald-700 font-medium text-lg">{t.tagline}</p>
            </div>
            
            <div className="grid gap-4">
              <button 
                onClick={() => setCurrentView('PATIENT_LOGIN_OPTIONS')}
                className="group relative overflow-hidden w-full py-6 bg-emerald-600 text-white rounded-3xl text-xl font-bold shadow-2xl shadow-emerald-200 hover:bg-emerald-700 transition-all active:scale-95 flex items-center justify-center gap-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <User size={28} />
                {t.patientLogin}
              </button>
              <button 
                onClick={() => setCurrentView('DOCTOR_LOGIN')}
                className="w-full py-6 bg-white text-emerald-600 border-2 border-emerald-600 rounded-3xl text-xl font-bold shadow-xl hover:bg-emerald-50 transition-all active:scale-95 flex items-center justify-center gap-4"
              >
                <Stethoscope size={28} />
                {t.doctorLogin}
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 pt-8">
              <div className="h-px flex-1 bg-emerald-200" />
              <p className="text-emerald-400 text-xs font-black uppercase tracking-widest">{t.emergency}</p>
              <div className="h-px flex-1 bg-emerald-200" />
            </div>
            
            <a 
              href="tel:108"
              className="w-full py-6 bg-red-600 text-white rounded-3xl text-2xl font-black shadow-2xl shadow-red-200 hover:bg-red-700 transition-all active:scale-95 flex items-center justify-center gap-4 animate-pulse"
            >
              <Phone size={32} />
              {t.emergencyCall}
            </a>
            
            <button 
              onClick={() => setShowEmergency(true)}
              className="w-full py-4 bg-red-50 text-red-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-red-100 transition-colors"
            >
              <AlertCircle size={20} />
              {t.emergencyMsg.split('.')[0]}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'PATIENT_LOGIN_OPTIONS') {
    return (
      <div className="min-h-screen bg-emerald-50 flex flex-col">
        <Header title={t.patientLogin} showBack showLanguageToggle />
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl w-full max-w-md border border-emerald-100 space-y-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <User className="text-emerald-600" size={32} />
              </div>
              <h2 className="text-2xl font-black text-gray-800">{t.patientLogin}</h2>
            </div>
            
            <div className="space-y-4">
              <button 
                onClick={() => setCurrentView('PATIENT_REGISTER')}
                className="w-full py-5 bg-emerald-600 text-white rounded-2xl text-xl font-bold shadow-lg hover:bg-emerald-700 transition-all active:scale-95 flex items-center justify-between px-8"
              >
                <span>{t.newPatient}</span>
                <ChevronRight size={24} />
              </button>
              <button 
                onClick={() => setCurrentView('PATIENT_LOGIN')}
                className="w-full py-5 bg-white text-emerald-600 border-2 border-emerald-600 rounded-2xl text-xl font-bold shadow-lg hover:bg-emerald-50 transition-all active:scale-95 flex items-center justify-between px-8"
              >
                <span>{t.existingPatient}</span>
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'PATIENT_REGISTER') {
    return (
      <div className="min-h-screen bg-emerald-50 flex flex-col">
        <Header title={t.newPatient} showBack showLanguageToggle />
        <div className="p-6 max-w-md mx-auto w-full">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              handlePatientRegister({
                id: `patient-${Date.now()}`,
                name: formData.get('name'),
                mobile: formData.get('mobile'),
                email: formData.get('email'),
                age: formData.get('age'),
                gender: formData.get('gender'),
                state: formData.get('state'),
                district: formData.get('district'),
                village: formData.get('village'),
              });
            }}
            className="space-y-5 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-emerald-100"
          >
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-1">{t.name}</label>
              <input name="name" required className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none transition-all" placeholder={t.namePlaceholder} />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-1">{t.mobile}</label>
              <input name="mobile" type="tel" required pattern="[0-9]{10}" className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none transition-all" placeholder={t.mobilePlaceholder} />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-1">{t.email}</label>
              <input name="email" type="email" required className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none transition-all" placeholder="e.g. john@example.com" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-1">{t.age}</label>
                <input name="age" type="number" required min="0" max="120" className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none transition-all" placeholder="25" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-1">{t.gender}</label>
                <div className="relative">
                  <select name="gender" required className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none appearance-none transition-all">
                    <option value="male">{t.male}</option>
                    <option value="female">{t.female}</option>
                    <option value="other">{t.other}</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-600 pointer-events-none" size={20} />
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-1">{t.state}</label>
              <input name="state" required className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none transition-all" placeholder="e.g. Telangana" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-1">{t.district}</label>
                <input name="district" required className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none transition-all" placeholder="e.g. Hyderabad" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-1">{t.village}</label>
                <input name="village" required className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none transition-all" placeholder="e.g. Rampur" />
              </div>
            </div>
            <button type="submit" className="w-full py-5 bg-emerald-600 text-white rounded-2xl text-xl font-bold shadow-xl shadow-emerald-100 mt-4 active:scale-95 transition-transform">
              {t.register}
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (currentView === 'PATIENT_LOGIN') {
    return (
      <div className="min-h-screen bg-emerald-50 flex flex-col">
        <Header title={t.existingPatient} showBack showLanguageToggle />
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl w-full max-w-md border border-emerald-100 space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-black text-gray-800">{t.login}</h2>
              <p className="text-gray-500 mt-2">{t.existingPatient}</p>
            </div>
            
            {!otpSentTo ? (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const mobile = formData.get('mobile') as string;
                  // Simulate OTP sending
                  setOtpSentTo(mobile);
                }}
                className="space-y-6"
              >
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-1">{t.mobile}</label>
                  <input name="mobile" type="tel" required className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none transition-all" placeholder={t.mobilePlaceholder} />
                </div>
                <button type="submit" className="w-full py-5 bg-emerald-600 text-white rounded-2xl text-xl font-bold shadow-xl shadow-emerald-100 active:scale-95 transition-transform">
                  {t.login}
                </button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-700 text-sm font-medium">
                  {t.otpSent}: <span className="font-black">{otpSentTo}</span>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-1">{t.enterOtp}</label>
                  <input 
                    value={otpInput}
                    onChange={(e) => setOtpInput(e.target.value)}
                    type="text" 
                    maxLength={6}
                    className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none transition-all text-center text-2xl tracking-[1em] font-black" 
                    placeholder="000000" 
                  />
                </div>
                <button 
                  onClick={() => handlePatientLogin(otpSentTo)}
                  className="w-full py-5 bg-emerald-600 text-white rounded-2xl text-xl font-bold shadow-xl shadow-emerald-100 active:scale-95 transition-transform"
                >
                  {t.verify}
                </button>
                <button 
                  onClick={() => setOtpSentTo(null)}
                  className="w-full text-emerald-600 font-bold text-sm hover:underline"
                >
                  {t.back}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'DOCTOR_LOGIN') {
    return (
      <div className="min-h-screen bg-emerald-50 flex flex-col">
        <Header title={t.doctorLogin} showBack showLanguageToggle />
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl w-full max-w-md border border-emerald-100 space-y-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 rotate-6">
                <Stethoscope className="text-emerald-600" size={40} />
              </div>
              <h2 className="text-3xl font-black text-gray-800">{t.doctorLogin}</h2>
            </div>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                handleDoctorLogin(formData.get('phone') as string);
              }}
              className="space-y-5"
            >
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-1">{t.phone}</label>
                <input name="phone" type="tel" required pattern="[0-9]{10}" className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none transition-all" placeholder={t.mobilePlaceholder} />
              </div>
              <button type="submit" className="w-full py-5 bg-emerald-600 text-white rounded-2xl text-xl font-bold shadow-xl shadow-emerald-100 active:scale-95 transition-transform">
                {t.login}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'DOCTOR_PROFILE') {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    return (
      <div className="min-h-screen bg-emerald-50 flex flex-col pb-20">
        <Header title={t.profile} showBack showLanguageToggle showLogout />
        <div className="p-6 max-w-2xl mx-auto w-full space-y-6">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const availability: any = {};
              const start = formData.get('start_time');
              const end = formData.get('end_time');
              const lStart = formData.get('lunch_start');
              const lEnd = formData.get('lunch_end');
              
              days.forEach(day => {
                if (formData.get(`day_${day}`)) {
                  availability[day] = { start, end, lunchStart: lStart, lunchEnd: lEnd };
                }
              });

              saveDoctorProfile({
                id: currentUser?.id || `doctor-${Date.now()}`,
                phone: currentUser.phone,
                name: formData.get('name'),
                state: formData.get('state'),
                district: formData.get('district'),
                village: formData.get('village'),
                specialization: formData.get('specialization'),
                availability
              });
            }}
            className="space-y-8"
          >
            {/* Basic Info */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-emerald-100 space-y-5">
              <h3 className="text-xl font-black text-emerald-900 border-b border-emerald-50 pb-4">{t.doctorLogin}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-1">{t.name}</label>
                  <input name="name" required defaultValue={currentUser?.name} className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 outline-none" placeholder={t.namePlaceholder} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-1">{t.specialization}</label>
                  <select name="specialization" defaultValue={currentUser?.specialization} className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 outline-none">
                    {allSpecializationKeys.map(key => (
                      <option key={key} value={key}>{t[key]}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-1">{t.state}</label>
                  <input name="state" required defaultValue={currentUser?.state} className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 outline-none" placeholder="e.g. Telangana" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-1">{t.district}</label>
                  <input name="district" required defaultValue={currentUser?.district} className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 outline-none" placeholder="e.g. Hyderabad" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-1">{t.village}</label>
                  <input name="village" required defaultValue={currentUser?.village} className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 outline-none" placeholder={t.villagePlaceholder} />
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-emerald-100 space-y-6">
              <h3 className="text-xl font-black text-emerald-900 border-b border-emerald-50 pb-4">{t.manageAvailability}</h3>
              
              <div className="space-y-4">
                <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-1">{t.selectDays}</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {days.map(day => (
                    <label key={day} className="flex items-center gap-3 p-3 bg-emerald-50 rounded-2xl border border-emerald-100 cursor-pointer active:scale-95 transition-all">
                      <input 
                        type="checkbox" 
                        name={`day_${day}`} 
                        defaultChecked={!!currentUser?.availability?.[day]} 
                        className="w-5 h-5 accent-emerald-600 rounded-md" 
                      />
                      <span className="text-xs font-bold text-emerald-800 capitalize">{t[day]}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-emerald-50">
                <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-1">{t.workingHours}</label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-500 uppercase">{t.start}</label>
                    <input 
                      name="start_time" 
                      type="time" 
                      required
                      defaultValue={(Object.values(currentUser?.availability || {})[0] as any)?.start} 
                      className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 outline-none" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-500 uppercase">{t.end}</label>
                    <input 
                      name="end_time" 
                      type="time" 
                      required
                      defaultValue={(Object.values(currentUser?.availability || {})[0] as any)?.end} 
                      className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 outline-none" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-500 uppercase">{t.lunchBreak} {t.start}</label>
                    <input 
                      name="lunch_start" 
                      type="time" 
                      defaultValue={(Object.values(currentUser?.availability || {})[0] as any)?.lunchStart} 
                      className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 outline-none" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-500 uppercase">{t.lunchBreak} {t.end}</label>
                    <input 
                      name="lunch_end" 
                      type="time" 
                      defaultValue={(Object.values(currentUser?.availability || {})[0] as any)?.lunchEnd} 
                      className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 outline-none" 
                    />
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className="w-full py-6 bg-emerald-600 text-white rounded-3xl text-2xl font-black shadow-2xl shadow-emerald-200 active:scale-95 transition-all">
              {t.updateDetails}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      {/* Success Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-6">
          <div className="bg-white rounded-3xl p-8 flex flex-col items-center gap-4 text-center animate-in fade-in zoom-in duration-300">
            <CheckCircle2 size={80} className="text-emerald-500" />
            <h2 className="text-2xl font-bold text-gray-800">{t.bookingSuccess}</h2>
          </div>
        </div>
      )}

      {/* Emergency Modal */}
      {showEmergency && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-6">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border-4 border-red-500">
            <div className="flex justify-center mb-4">
              <AlertCircle size={60} className="text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-red-600 text-center mb-4">{t.emergency}</h2>
            <p className="text-gray-700 text-lg text-center mb-6 leading-relaxed">
              {t.emergencyMsg}
            </p>
            <button 
              onClick={() => setShowEmergency(false)}
              className="w-full py-4 bg-red-600 text-white rounded-2xl text-xl font-bold shadow-lg active:scale-95"
            >
              {t.close}
            </button>
          </div>
        </div>
      )}

      {currentView === 'HOME' && (
        <>
          <Header title={userType === 'doctor' ? t.doctorDashboard : t.appName} showLanguageToggle showLogout />
          <div className="p-4 space-y-6">
            {/* User Card */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-emerald-50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative flex items-center justify-between mb-6">
                <div className="bg-emerald-100 p-4 rounded-2xl">
                  {userType === 'doctor' ? <Stethoscope className="text-emerald-600" size={32} /> : <User className="text-emerald-600" size={32} />}
                </div>
              </div>
              {currentUser ? (
                <div className="relative space-y-2">
                  <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">{userType === 'doctor' ? t.doctorLogin : t.patientInfo}</p>
                  <p className="text-3xl font-black text-emerald-900">{currentUser.name}</p>
                  <div className="flex items-center gap-4 text-gray-500 font-medium">
                    <p>{currentUser.village || currentUser.email}</p>
                    {currentUser.mobile && (
                      <>
                        <div className="w-1 h-1 bg-gray-300 rounded-full" />
                        <p>{currentUser.mobile}</p>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-gray-500 mb-4">{t.notRegistered}</p>
                  <button 
                    onClick={() => setCurrentView('LANDING')}
                    className="px-8 py-3 bg-emerald-600 text-white rounded-full font-bold shadow-lg"
                  >
                    {t.login}
                  </button>
                </div>
              )}
            </div>

            {/* Quick Stats (Hidden initially) */}
            {userType === 'doctor' && showAdvancedFeatures && (
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-emerald-50 text-center">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{t.appointmentsToday}</p>
                  <p className="text-2xl font-black text-emerald-600">8</p>
                </div>
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-emerald-50 text-center">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{t.pendingMessages}</p>
                  <p className="text-2xl font-black text-blue-600">3</p>
                </div>
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-emerald-50 text-center">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{t.notifications}</p>
                  <p className="text-2xl font-black text-orange-600">5</p>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              {userType === 'patient' ? (
                <>
                  <button 
                    onClick={() => setCurrentView('DOCTOR_LIST')}
                    className="bg-emerald-600 text-white p-8 rounded-[2rem] flex flex-col items-center gap-4 shadow-xl shadow-emerald-100 active:scale-95 transition-all hover:brightness-110"
                  >
                    <div className="bg-white/20 p-3 rounded-2xl">
                      <Stethoscope size={32} />
                    </div>
                    <span className="font-black text-lg">{t.doctors}</span>
                  </button>
                  <button 
                    onClick={() => setCurrentView('TELE_CONSULT')}
                    className="bg-blue-600 text-white p-8 rounded-[2rem] flex flex-col items-center gap-4 shadow-xl shadow-blue-100 active:scale-95 transition-all hover:brightness-110"
                  >
                    <div className="bg-white/20 p-3 rounded-2xl">
                      <PhoneCall size={32} />
                    </div>
                    <span className="font-black text-lg">{t.teleConsult}</span>
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => setCurrentView('DOCTOR_APPOINTMENTS')}
                    className="bg-emerald-600 text-white p-8 rounded-[2rem] flex flex-col items-center gap-4 shadow-xl shadow-emerald-100 active:scale-95 transition-all hover:brightness-110"
                  >
                    <div className="bg-white/20 p-3 rounded-2xl">
                      <Calendar size={32} />
                    </div>
                    <span className="font-black text-lg text-center leading-tight">{t.viewAppointments}</span>
                  </button>
                  <button 
                    onClick={() => setCurrentView('DOCTOR_PROFILE')}
                    className="bg-blue-600 text-white p-8 rounded-[2rem] flex flex-col items-center gap-4 shadow-xl shadow-blue-100 active:scale-95 transition-all hover:brightness-110"
                  >
                    <div className="bg-white/20 p-3 rounded-2xl">
                      <User size={32} />
                    </div>
                    <span className="font-black text-lg text-center leading-tight">{t.profile}</span>
                  </button>

                  {/* Hidden Sidebar/Menu items (visible when advanced features enabled) */}
                  {showAdvancedFeatures && (
                    <>
                      <button 
                        className="bg-white text-emerald-600 p-8 rounded-[2rem] flex flex-col items-center gap-4 shadow-lg border border-emerald-50 active:scale-95 transition-all hover:bg-emerald-50"
                      >
                        <div className="bg-emerald-100 p-3 rounded-2xl">
                          <Database size={32} />
                        </div>
                        <span className="font-black text-lg text-center leading-tight">{t.patientRecords}</span>
                      </button>
                      <button 
                        className="bg-white text-blue-600 p-8 rounded-[2rem] flex flex-col items-center gap-4 shadow-lg border border-blue-50 active:scale-95 transition-all hover:bg-blue-50"
                      >
                        <div className="bg-blue-100 p-3 rounded-2xl">
                          <MessageSquare size={32} />
                        </div>
                        <span className="font-black text-lg text-center leading-tight">{t.messages}</span>
                      </button>
                      <button 
                        className="bg-white text-orange-600 p-8 rounded-[2rem] flex flex-col items-center gap-4 shadow-lg border border-orange-50 active:scale-95 transition-all hover:bg-orange-50"
                      >
                        <div className="bg-orange-100 p-3 rounded-2xl">
                          <Bell size={32} />
                        </div>
                        <span className="font-black text-lg text-center leading-tight">{t.notifications}</span>
                      </button>
                      <button 
                        className="bg-white text-gray-600 p-8 rounded-[2rem] flex flex-col items-center gap-4 shadow-lg border border-gray-100 active:scale-95 transition-all hover:bg-gray-50"
                      >
                        <div className="bg-gray-100 p-3 rounded-2xl">
                          <Settings size={32} />
                        </div>
                        <span className="font-black text-lg text-center leading-tight">{t.profileSettings}</span>
                      </button>
                    </>
                  )}
                </>
              )}
            </div>

            {/* Emergency Button */}
            {userType === 'patient' && (
              <button 
                onClick={() => setShowEmergency(true)}
                className="w-full bg-red-600 text-white p-8 rounded-[2rem] flex items-center justify-center gap-6 shadow-2xl shadow-red-100 active:scale-95 transition-all hover:bg-red-700"
              >
                <AlertCircle size={40} />
                <span className="text-3xl font-black tracking-tighter uppercase">{t.emergency}</span>
              </button>
            )}

            {/* Health Tips / Doctor Stats */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-emerald-50">
              <h2 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-3">
                <Heart size={24} className="text-emerald-500" fill="currentColor" />
                {userType === 'doctor' ? t.managePatients : t.healthTips}
              </h2>
              <ul className="space-y-6">
                {(userType === 'doctor' ? [t.tip1, t.tip2] : [t.tip1, t.tip2, t.tip3, t.tip4]).map((tip, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-700">
                    <div className="bg-emerald-100 text-emerald-700 rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0 font-black text-sm">
                      {i + 1}
                    </div>
                    <span className="font-medium leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Advanced Features Toggle for Doctors */}
            {userType === 'doctor' && (
              <button 
                onClick={() => setShowAdvancedFeatures(!showAdvancedFeatures)}
                className="w-full py-4 bg-white border-2 border-emerald-100 text-emerald-600 rounded-[2rem] font-bold flex items-center justify-center gap-3 shadow-sm active:scale-95 transition-all hover:bg-emerald-50"
              >
                <LayoutDashboard size={24} />
                {t.enableAdvancedFeatures}
              </button>
            )}
          </div>
        </>
      )}

      {currentView === 'REGISTRATION' && (
        <>
          <Header title={t.profile} showBack showLanguageToggle showLogout />
          <div className="p-6 space-y-6 pb-24">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                savePatient({
                  name: formData.get('name'),
                  mobile: formData.get('mobile'),
                  email: formData.get('email'),
                  state: formData.get('state'),
                  district: formData.get('district'),
                  village: formData.get('village'),
                  problem: formData.get('problem'),
                });
              }}
              className="space-y-6 bg-white p-6 rounded-3xl shadow-sm border border-emerald-50"
            >
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 uppercase tracking-wide">{t.name}</label>
                <input 
                  name="name" 
                  required 
                  defaultValue={currentUser?.name}
                  className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 outline-none text-lg" 
                  placeholder={t.namePlaceholder}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 uppercase tracking-wide">{t.mobile}</label>
                <input 
                  name="mobile" 
                  type="tel" 
                  required 
                  defaultValue={currentUser?.mobile}
                  className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 outline-none text-lg" 
                  placeholder={t.mobilePlaceholder}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 uppercase tracking-wide">{t.email}</label>
                <input 
                  name="email" 
                  type="email" 
                  required 
                  defaultValue={currentUser?.email}
                  className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 outline-none text-lg" 
                  placeholder={t.emailPlaceholder}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 uppercase tracking-wide">{t.state}</label>
                <input 
                  name="state" 
                  required 
                  defaultValue={currentUser?.state}
                  className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 outline-none text-lg" 
                  placeholder="e.g. Telangana"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 uppercase tracking-wide">{t.district}</label>
                <input 
                  name="district" 
                  required 
                  defaultValue={currentUser?.district}
                  className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 outline-none text-lg" 
                  placeholder="e.g. Hyderabad"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 uppercase tracking-wide">{t.village}</label>
                <input 
                  name="village" 
                  required 
                  defaultValue={currentUser?.village}
                  className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 outline-none text-lg" 
                  placeholder={t.villagePlaceholder}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 uppercase tracking-wide">{t.healthProblem}</label>
                <textarea 
                  name="problem" 
                  rows={3}
                  defaultValue={currentUser?.problem}
                  className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 outline-none text-lg" 
                  placeholder={t.problemPlaceholder}
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-emerald-600 text-white rounded-2xl text-xl font-bold shadow-lg active:scale-95 transition-transform mt-4"
              >
                {t.save}
              </button>
            </form>
          </div>
        </>
      )}

      {currentView === 'DOCTOR_LIST' && (
        <>
          <Header title={t.doctors} showBack showLanguageToggle />
          <div className="p-4 space-y-4">
            {/* Filter and Location */}
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-emerald-50 space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t.selectSpecialization}</label>
                <select 
                  value={filterSpecialization}
                  onChange={(e) => setFilterSpecialization(e.target.value)}
                  className="w-full p-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-emerald-500 outline-none text-sm font-medium"
                >
                  {specializations.map(specKey => (
                    <option key={specKey} value={specKey}>
                      {specKey === 'All' ? t.all : (t as any)[specKey] || specKey}
                    </option>
                  ))}
                </select>
              </div>
              
              <button 
                onClick={handleUseLocation}
                disabled={isLocating}
                className="w-full py-3 bg-emerald-100 text-emerald-700 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
              >
                <AlertCircle size={18} />
                {isLocating ? t.findingLocation : t.useLocation}
              </button>
            </div>

            {filteredDoctors.map((doc) => (
              <div key={doc.id} className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-50 flex flex-col gap-4 relative overflow-hidden">
                {doc.id === nearestDoctorId && (
                  <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 rounded-bl-2xl text-xs font-bold">
                    {t.nearest}
                  </div>
                )}
                
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800">{doc.name}</h3>
                    <p className="text-emerald-600 font-medium">{(t as any)[doc.specialization]}</p>
                    <p className="text-xs text-gray-500 mt-1 font-bold">
                      {doc.village}, {doc.district}, {doc.state}
                    </p>
                    {doc.distance !== null && (
                      <p className="text-xs text-gray-500 mt-1 font-bold">
                        {t.distance}: {doc.distance.toFixed(1)} {t.km}
                      </p>
                    )}
                  </div>
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <Stethoscope className="text-emerald-600" />
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600 bg-gray-50 p-4 rounded-2xl">
                  <div className="flex justify-between">
                    <span className="font-bold">{t.days}:</span>
                    <span>{doc.days || Object.keys(doc.availability || {}).map(d => t[d]).join(', ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">{t.time}:</span>
                    <span>{doc.time || (Object.values(doc.availability || {})[0] ? `${(Object.values(doc.availability || {})[0] as any).start} - ${(Object.values(doc.availability || {})[0] as any).end}` : '')}</span>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    setSelectedDoctor(doc);
                    setCurrentView('BOOKING');
                  }}
                  className="w-full py-3 bg-emerald-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 active:scale-95"
                >
                  {t.bookNow}
                  <ChevronRight size={20} />
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {currentView === 'BOOKING' && selectedDoctor && (
        <>
          <Header title={t.bookNow} showBack />
          <div className="p-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-emerald-50 mb-6">
              <h3 className="text-xl font-bold text-emerald-800">{selectedDoctor.name}</h3>
              <p className="text-emerald-600">{(t as any)[selectedDoctor.specialization] || selectedDoctor.specialization}</p>
              <div className="mt-4 pt-4 border-t border-emerald-50 space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span className="font-bold">{t.days}:</span>
                  <span>{selectedDoctor.days || Object.keys(selectedDoctor.availability || {}).map(d => t[d]).join(', ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">{t.time}:</span>
                  <span>{selectedDoctor.time || (Object.values(selectedDoctor.availability || {})[0] ? `${(Object.values(selectedDoctor.availability || {})[0] as any).start} - ${(Object.values(selectedDoctor.availability || {})[0] as any).end}` : '')}</span>
                </div>
              </div>
            </div>
            
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                bookAppointment(
                  selectedDoctor,
                  formData.get('date') as string,
                  formData.get('time') as string
                );
              }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 uppercase tracking-wide">{t.selectDate}</label>
                <input 
                  name="date" 
                  type="date" 
                  required 
                  className="w-full p-4 bg-white border-2 border-gray-100 rounded-2xl focus:border-emerald-500 outline-none text-lg"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 uppercase tracking-wide">{t.selectTime}</label>
                <select 
                  name="time" 
                  required 
                  className="w-full p-4 bg-white border-2 border-gray-100 rounded-2xl focus:border-emerald-500 outline-none text-lg appearance-none"
                >
                  <option value={t.time1}>{t.time1}</option>
                  <option value={t.time2}>{t.time2}</option>
                  <option value={t.time3}>{t.time3}</option>
                  <option value={t.time4}>{t.time4}</option>
                  <option value={t.time5}>{t.time5}</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-emerald-600 text-white rounded-2xl text-xl font-bold shadow-lg active:scale-95 transition-transform"
              >
                {t.confirmBooking}
              </button>
            </form>
          </div>
        </>
      )}

      {currentView === 'MY_APPOINTMENTS' && (
        <>
          <Header title={t.appointments} showBack showLanguageToggle />
          <div className="p-4 space-y-4 pb-24">
            {appointments.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-emerald-50">
                <Calendar size={48} className="text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">{t.noAppointments}</p>
                <button 
                  onClick={() => setCurrentView('DOCTOR_LIST')}
                  className="mt-6 px-8 py-3 bg-emerald-600 text-white rounded-full font-bold shadow-md"
                >
                  {t.bookNow}
                </button>
              </div>
            ) : (
              appointments.map((app) => {
                const doc = allDoctors.find(d => d.id === app.doctorId);
                return (
                  <div key={app.id} className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-50">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-emerald-800">{doc?.name || app.doctorName}</h3>
                        <p className="text-emerald-600 text-sm">{doc ? (t as any)[doc.specialization] : app.specialization}</p>
                      </div>
                      <button 
                        onClick={() => deleteAppointment(app.id)}
                        className="p-2 text-red-500 bg-red-50 rounded-xl"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <div className="flex gap-4 text-sm font-medium text-gray-600 mb-4">
                      <div className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-lg">
                        <Calendar size={14} />
                        {app.date}
                      </div>
                      <div className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-lg">
                        <PhoneCall size={14} />
                        {app.time}
                      </div>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-2xl mb-4 space-y-2">
                      <p className="text-xs font-black text-emerald-600 uppercase tracking-widest">{t.problem}</p>
                      <p className="text-sm text-gray-700 font-medium">{app.problem}</p>
                      <p className="text-[10px] text-emerald-500 font-bold mt-2">
                        {app.patientVillage}, {app.patientDistrict}, {app.patientState}
                      </p>
                    </div>
                    <button 
                      onClick={() => openChat(app.doctorId, app.patientId, doc?.name || app.doctorName, currentUser?.name)}
                      className="w-full py-3 bg-emerald-100 text-emerald-700 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95"
                    >
                      <MessageSquare size={18} />
                      {t.chat}
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </>
      )}

      {currentView === 'DOCTOR_APPOINTMENTS' && (
        <>
          <Header title={t.bookedAppointments} showBack showLanguageToggle />
          <div className="p-4 space-y-4 pb-24">
            {appointments.filter(app => app.doctorId === currentUser?.id).length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-emerald-100">
                <Calendar size={48} className="mx-auto text-emerald-200 mb-4" />
                <p className="text-gray-500 font-medium">{t.noAppointments}</p>
              </div>
            ) : (
              appointments.filter(app => app.doctorId === currentUser?.id).map((app) => (
                <div key={app.id} className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-50">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">{t.patientName}</p>
                      <h3 className="text-lg font-bold text-emerald-800">{app.patientName}</h3>
                      <p className="text-emerald-600 text-sm font-bold">{app.patientMobile}</p>
                      <p className="text-emerald-500 text-xs font-medium">{app.patientEmail}</p>
                      <p className="text-[10px] text-gray-500 font-bold">
                        {app.patientVillage}, {app.patientDistrict}, {app.patientState}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold">
                        {app.time}
                      </div>
                      <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {t.pending}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                      <Calendar size={14} className="text-emerald-500" />
                      {app.date}
                    </div>
                    {app.problem && (
                      <div className="bg-gray-50 p-3 rounded-xl">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{t.problem}</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{app.problem}</p>
                      </div>
                    )}
                    <div className="flex gap-2 pt-2">
                      <button 
                        onClick={() => openChat(app.doctorId, app.patientId, currentUser?.name, app.patientName)}
                        className="flex-1 py-2 bg-emerald-100 text-emerald-700 rounded-xl text-xs font-bold flex items-center justify-center gap-1 active:scale-95"
                      >
                        <MessageSquare size={14} />
                        {t.chat}
                      </button>
                      <button 
                        onClick={() => setCurrentView('PATIENT_RECORDS')}
                        className="flex-1 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-bold active:scale-95"
                      >
                        {t.patientRecords}
                      </button>
                      <button 
                        onClick={() => setCurrentView('TELE_CONSULT')}
                        className="flex-1 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold active:scale-95"
                      >
                        {t.startConsult}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}

      {currentView === 'PATIENT_RECORDS' && (
        <>
          <Header title={t.patientRecords} showBack showLanguageToggle />
          <div className="p-4 space-y-6 pb-24">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-emerald-50">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Ramesh Kumar</h3>
                  <p className="text-sm text-gray-500 font-medium">Age: 45 | Male</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-black text-emerald-600 uppercase tracking-widest mb-3">{t.medicalHistory}</h4>
                  <div className="bg-gray-50 p-4 rounded-2xl text-sm text-gray-700 leading-relaxed">
                    Hypertension diagnosed in 2021. Regular follow-ups for seasonal allergies.
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-black text-red-600 uppercase tracking-widest mb-3">{t.allergies}</h4>
                    <div className="bg-red-50 p-4 rounded-2xl text-sm text-red-700 font-medium">
                      Penicillin, Dust
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-3">{t.medications}</h4>
                    <div className="bg-blue-50 p-4 rounded-2xl text-sm text-blue-700 font-medium">
                      Amlodipine 5mg
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-black text-gray-800 uppercase tracking-widest mb-3">{t.prescription}</h4>
                  <div className="space-y-3">
                    {prescriptions.map((p) => (
                      <div key={p.id} className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm">
                        <p className="text-[10px] font-bold text-gray-400 mb-1">{p.date}</p>
                        <p className="text-sm text-gray-700">{p.notes}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {currentView === 'MESSAGES' && (
        <>
          <Header title={activeChat ? (userType === 'patient' ? activeChat.doctorName : activeChat.patientName) || t.messages : t.messages} showBack showLanguageToggle />
          <div className="flex flex-col h-[calc(100vh-140px)] pb-24">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {!activeChat ? (
                <p className="text-center text-gray-400 text-sm mt-10">{t.noAppointments}</p>
              ) : chatMessages.length === 0 ? (
                <p className="text-center text-gray-400 text-sm mt-10">Say hello to start the conversation.</p>
              ) : (
                chatMessages.map((m) => {
                  const isMine = m.senderType === userType;
                  return (
                    <div key={m.id} className={cn("flex flex-col gap-1 max-w-[80%]", isMine && "self-end items-end")}>
                      <div className={cn(
                        "p-4 rounded-2xl shadow-sm",
                        isMine ? "bg-emerald-600 text-white rounded-tr-none shadow-md" : "bg-white border border-gray-100 rounded-tl-none"
                      )}>
                        <p className={cn("text-sm", isMine ? "text-white" : "text-gray-700")}>{m.text}</p>
                      </div>
                      <span className={cn("text-[10px] text-gray-400 font-bold", isMine ? "mr-1" : "ml-1")}>
                        {new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  );
                })
              )}
            </div>
            
            <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') sendChatMessage(); }}
                disabled={!activeChat}
                placeholder={t.typeMessage}
                className="flex-1 bg-gray-50 border-2 border-gray-100 rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 transition-all disabled:opacity-50"
              />
              <button
                onClick={sendChatMessage}
                disabled={!activeChat || !chatInput.trim() || isSendingChat}
                className="bg-emerald-600 text-white p-3 rounded-2xl shadow-lg active:scale-90 transition-all disabled:opacity-50"
              >
                <ChevronRight size={24} className="rotate-0" />
              </button>
            </div>
          </div>
        </>
      )}

      {currentView === 'NOTIFICATIONS' && (
        <>
          <Header title={t.notifications} showBack showLanguageToggle />
          <div className="p-4 space-y-4 pb-24">
            {[
              { id: 1, title: t.appointmentReminder, msg: "Your appointment with Ramesh Kumar is in 30 minutes.", time: "30m ago", type: 'appointment' },
              { id: 2, title: "New Message", msg: "You have a new message from Sarita Devi.", time: "2h ago", type: 'message' },
              { id: 3, title: "Health Alert", msg: "High pollution levels reported in your area. Stay indoors.", time: "5h ago", type: 'alert' }
            ].map((n) => (
              <div key={n.id} className="bg-white p-5 rounded-3xl shadow-sm border border-emerald-50 flex gap-4">
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0",
                  n.type === 'appointment' ? "bg-emerald-100 text-emerald-600" : 
                  n.type === 'message' ? "bg-blue-100 text-blue-600" : "bg-orange-100 text-orange-600"
                )}>
                  {n.type === 'appointment' ? <Calendar size={24} /> : 
                   n.type === 'message' ? <MessageSquare size={24} /> : <AlertCircle size={24} />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-gray-800">{n.title}</h4>
                    <span className="text-[10px] font-bold text-gray-400">{n.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{n.msg}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {currentView === 'CHATBOT' && (
        <>
          <Header title={t.chatbotName} showBack showLanguageToggle />
          <div className="flex flex-col h-[calc(100vh-140px)] pb-24">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                  <Heart size={20} fill="currentColor" />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-emerald-50">
                  <p className="text-sm text-gray-700">{t.chatbotGreeting}</p>
                </div>
              </div>

              {chatbotMessages.length === 0 && (
                <div className="flex flex-col gap-2 ml-13">
                  {[
                    "How to book an appointment?",
                    "What are the symptoms of fever?",
                    "Find nearest hospital"
                  ].map((q) => (
                    <button
                      key={q}
                      onClick={() => sendChatbotMessage(q)}
                      className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl text-xs font-bold w-fit active:scale-95"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {chatbotMessages.map((m, i) => (
                m.role === 'user' ? (
                  <div key={i} className="flex flex-col gap-1 max-w-[80%] self-end items-end ml-auto">
                    <div className="bg-emerald-600 p-4 rounded-2xl rounded-tr-none shadow-md text-white">
                      <p className="text-sm">{m.text}</p>
                    </div>
                  </div>
                ) : (
                  <div key={i} className="flex gap-3 max-w-[85%]">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                      <Heart size={20} fill="currentColor" />
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-emerald-50">
                      <p className="text-sm text-gray-700 whitespace-pre-wrap">{m.text}</p>
                    </div>
                  </div>
                )
              ))}

              {isChatbotThinking && (
                <div className="flex gap-3 max-w-[85%]">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                    <Heart size={20} fill="currentColor" />
                  </div>
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-emerald-50">
                    <p className="text-sm text-gray-400">...</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <input 
                type="text" 
                value={chatbotInput}
                onChange={(e) => setChatbotInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') sendChatbotMessage(); }}
                placeholder={t.askMeAnything}
                className="flex-1 bg-gray-50 border-2 border-gray-100 rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 transition-all"
              />
              <button
                onClick={() => sendChatbotMessage()}
                disabled={!chatbotInput.trim() || isChatbotThinking}
                className="bg-emerald-600 text-white p-3 rounded-2xl shadow-lg active:scale-90 transition-all disabled:opacity-50"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </>
      )}

      {currentView === 'TELE_CONSULT' && (
        <>
          <Header title={t.teleConsult} showBack showLanguageToggle />
          <div className="p-6 space-y-6">
            <div className="relative aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-xl flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <Video size={64} className="text-white/20" />
              <p className="absolute bottom-4 left-4 text-white font-bold">{t.videoPlaceholder}</p>
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="text-white text-xs font-bold uppercase tracking-widest">{t.live}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 py-4 bg-emerald-600 text-white rounded-2xl font-bold shadow-md active:scale-95">
                {t.startConsult}
              </button>
              <button className="flex-1 py-4 bg-red-600 text-white rounded-2xl font-bold shadow-md active:scale-95">
                {t.endConsult}
              </button>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-emerald-50 space-y-4">
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-emerald-500" />
                {t.consultationNotes}
              </h3>
              <textarea 
                id="consult-notes"
                rows={5}
                className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-emerald-500 outline-none text-lg"
                placeholder={t.prescriptionPlaceholder}
              />
              <button 
                onClick={() => {
                  const notes = (document.getElementById('consult-notes') as HTMLTextAreaElement).value;
                  savePrescription(notes);
                }}
                className="w-full py-3 bg-emerald-100 text-emerald-700 rounded-2xl font-bold active:scale-95"
              >
                {t.savePrescription}
              </button>
            </div>
          </div>
        </>
      )}

      {currentUser && <Navbar />}
    </div>
  );
}