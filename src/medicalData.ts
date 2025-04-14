// Types for our medical data
export interface Symptom {
  id: string;
  name: string;
  description?: string;
}

export interface Disease {
  id: string;
  name: string;
  description?: string;
  recommendations?: string;
}

export interface InferenceRule {
  diseaseId: string;
  symptoms: string[];
  weight?: number; // How important this rule is
}

// List of symptoms related to gastro-intestinal infections
export const symptoms: Symptom[] = [
  { 
    id: "s1", 
    name: "Diare", 
    description: "Buang air besar dengan konsistensi cair atau encer (lebih dari 2 kali)" 
  },
  { 
    id: "s2", 
    name: "Muntah", 
    description: "Mengeluarkan isi lambung melalui mulut" 
  },
  { 
    id: "s3", 
    name: "Mual", 
    description: "Rasa tidak nyaman pada perut dan keinginan untuk muntah (lebih dari 1 kali)" 
  },
  { 
    id: "s4", 
    name: "Demam", 
    description: "Peningkatan suhu tubuh di atas normal (>37.5°C)" 
  },
  { 
    id: "s5", 
    name: "Nyeri Perut", 
    description: "Rasa sakit atau tidak nyaman di area perut" 
  },
  { 
    id: "s6", 
    name: "Kehilangan Nafsu Makan", 
    description: "Tidak selera makan walau sudah waktunya makan" 
  },
  { 
    id: "s7", 
    name: "Kembung", 
    description: "Perut terasa penuh dengan gas" 
  },
  { 
    id: "s8", 
    name: "Darah dalam Tinja", 
    description: "Berak berdarah atau terdapat darah pada kotoran saat buang air besar" 
  },
  { 
    id: "s9", 
    name: "Dehidrasi", 
    description: "Kekurangan cairan tubuh, sering ditandai dengan rasa haus, mulut kering, dan kulit kering" 
  },
  { 
    id: "s10", 
    name: "Kram Perut", 
    description: "Kontraksi otot perut yang menyakitkan" 
  },
  { 
    id: "s11", 
    name: "Tinja Berlendir", 
    description: "Terdapat lendir pada kotoran saat buang air besar" 
  },
  { 
    id: "s12", 
    name: "Sakit Kepala", 
    description: "Rasa nyeri atau tidak nyaman di kepala" 
  },
  { 
    id: "s13", 
    name: "Kelelahan", 
    description: "Merasa sangat lelah dan lemah" 
  },
  { 
    id: "s14", 
    name: "Nyeri Otot", 
    description: "Rasa sakit pada otot-otot tubuh" 
  },
  { 
    id: "s15", 
    name: "Penurunan Berat Badan", 
    description: "Berkurangnya berat badan tanpa disengaja" 
  },
  { 
    id: "s16", 
    name: "Lesu dan Tidak Bergairah", 
    description: "Kurangnya energi dan motivasi untuk melakukan aktivitas" 
  },
  { 
    id: "s17", 
    name: "Tekanan Darah Rendah", 
    description: "Nilai tekanan darah di bawah normal" 
  },
  { 
    id: "s18", 
    name: "Pusing", 
    description: "Perasaan berputar atau ketidakstabilan" 
  },
  { 
    id: "s19", 
    name: "Pingsan", 
    description: "Kehilangan kesadaran sementara" 
  },
  { 
    id: "s20", 
    name: "Suhu Badan Tinggi", 
    description: "Demam dengan suhu tubuh yang sangat tinggi" 
  },
  { 
    id: "s21", 
    name: "Luka di Bagian Tertentu", 
    description: "Adanya luka atau cedera pada bagian tubuh tertentu" 
  },
  { 
    id: "s22", 
    name: "Tidak Dapat Menggerakkan Anggota Badan", 
    description: "Ketidakmampuan menggerakkan anggota badan tertentu" 
  },
  { 
    id: "s23", 
    name: "Darah Rendah", 
    description: "Kadar hemoglobin yang rendah dalam darah" 
  },
  { 
    id: "s24", 
    name: "Koma", 
    description: "Kondisi tidak sadarkan diri dalam waktu yang lama" 
  },
  { 
    id: "s25", 
    name: "Septicaemia", 
    description: "Infeksi serius dalam darah yang dapat menyebar ke seluruh tubuh" 
  },
  { 
    id: "s26", 
    name: "Lumpuh", 
    description: "Kehilangan kemampuan untuk menggerakkan bagian tubuh tertentu" 
  },
  { 
    id: "s27", 
    name: "Menelan Berdarah", 
    description: "Terdapat darah saat menelan atau dari kerongkongan" 
  },
  { 
    id: "s28", 
    name: "Konsumsi Daging", 
    description: "Telah mengkonsumsi daging dalam 24 jam terakhir" 
  },
  { 
    id: "s29", 
    name: "Konsumsi Jamur", 
    description: "Telah mengkonsumsi jamur dalam 24 jam terakhir" 
  },
  { 
    id: "s30", 
    name: "Konsumsi Makanan Kaleng", 
    description: "Telah mengkonsumsi makanan kaleng dalam 24 jam terakhir" 
  },
  { 
    id: "s31", 
    name: "Konsumsi Susu", 
    description: "Telah mengkonsumsi susu dalam 24 jam terakhir" 
  },
  { 
    id: "s32", 
    name: "Mencret", 
    description: "Diare akut dengan frekuensi yang tinggi" 
  }
];

// List of gastro-intestinal infection diseases
export const diseases: Disease[] = [
  {
    id: "d1",
    name: "Gastroenteritis Virus",
    description: "Infeksi pada usus yang disebabkan oleh virus, seperti norovirus atau rotavirus.",
    recommendations: "Istirahat yang cukup, banyak minum untuk mencegah dehidrasi, dan makanan yang mudah dicerna."
  },
  {
    id: "d2",
    name: "Infeksi Bakteri E. coli",
    description: "Infeksi usus yang disebabkan oleh bakteri Escherichia coli.",
    recommendations: "Konsultasikan dengan dokter untuk pengobatan antibiotik yang tepat, minum banyak cairan, dan hindari makanan yang sulit dicerna."
  },
  {
    id: "d3",
    name: "Keracunan Makanan",
    description: "Kondisi yang disebabkan oleh mengonsumsi makanan yang terkontaminasi bakteri, virus, atau toksin.",
    recommendations: "Istirahat, minum banyak cairan untuk mencegah dehidrasi, dan konsumsi makanan yang mudah dicerna."
  },
  {
    id: "d4",
    name: "Giardiasis",
    description: "Infeksi usus yang disebabkan oleh parasit Giardia lamblia.",
    recommendations: "Konsultasi dengan dokter untuk pengobatan antiparasit yang tepat, hindari makanan mentah, dan jaga kebersihan diri."
  },
  {
    id: "d5",
    name: "Disentri Basiler",
    description: "Infeksi usus yang disebabkan oleh bakteri Shigella, ditandai dengan diare berdarah.",
    recommendations: "Segera konsultasi dengan dokter untuk pengobatan antibiotik, minum cairan elektrolit, dan istirahat total."
  },
  {
    id: "d6",
    name: "Kolera",
    description: "Infeksi usus akut yang disebabkan oleh bakteri Vibrio cholerae, sering menyebabkan diare encer yang parah.",
    recommendations: "Segera ke fasilitas kesehatan untuk rehidrasi dan pengobatan antibiotik."
  },
  {
    id: "d7",
    name: "Irritable Bowel Syndrome (IBS)",
    description: "Gangguan pencernaan kronis yang mempengaruhi usus besar.",
    recommendations: "Perubahan pola makan, manajemen stres, dan obat-obatan yang direkomendasikan dokter."
  },
  {
    id: "d8",
    name: "Keracunan Staphylococcus aureus",
    description: "Keracunan makanan yang disebabkan oleh toksin yang dihasilkan bakteri Staphylococcus aureus pada makanan.",
    recommendations: "Istirahat, minum banyak cairan untuk mencegah dehidrasi, dan konsultasi dengan dokter jika gejala memburuk."
  },
  {
    id: "d9",
    name: "Keracunan Jamur Beracun",
    description: "Keracunan yang terjadi akibat mengonsumsi jamur yang mengandung toksin.",
    recommendations: "Segera cari pertolongan medis, jangan induksi muntah kecuali diinstruksikan oleh tenaga medis."
  },
  {
    id: "d10",
    name: "Keracunan Salmonellae",
    description: "Infeksi usus yang disebabkan oleh bakteri Salmonella, umumnya dari makanan yang terkontaminasi.",
    recommendations: "Istirahat, minum banyak cairan, dan konsultasi dengan dokter untuk penanganan lebih lanjut."
  },
  {
    id: "d11",
    name: "Keracunan Clostridium botulinum",
    description: "Keracunan serius yang disebabkan oleh neurotoksin yang dihasilkan bakteri Clostridium botulinum, sering terdapat pada makanan kaleng yang tercemar.",
    recommendations: "Segera cari pertolongan medis darurat, kondisi ini dapat mengancam nyawa."
  },
  {
    id: "d12",
    name: "Keracunan Campylobacter",
    description: "Infeksi usus yang disebabkan oleh bakteri Campylobacter, biasanya dari daging ayam yang tidak dimasak dengan baik.",
    recommendations: "Konsultasi dengan dokter untuk pengobatan yang tepat, minum banyak cairan, dan istirahat yang cukup."
  }
];

// Inference rules that connect symptoms to diseases
export const inferenceRules: InferenceRule[] = [
  // Gastroenteritis Virus
  {
    diseaseId: "d1",
    symptoms: ["s1", "s2", "s3", "s4", "s5", "s6", "s9"]
  },
  
  // E. coli Infection
  {
    diseaseId: "d2",
    symptoms: ["s1", "s5", "s8", "s9", "s10", "s13"]
  },
  
  // Food Poisoning
  {
    diseaseId: "d3",
    symptoms: ["s1", "s2", "s3", "s5", "s10", "s12"]
  },
  
  // Giardiasis
  {
    diseaseId: "d4",
    symptoms: ["s1", "s5", "s7", "s11", "s13", "s15"]
  },
  
  // Bacillary Dysentery
  {
    diseaseId: "d5",
    symptoms: ["s1", "s4", "s5", "s8", "s9", "s10", "s11"]
  },
  
  // Cholera
  {
    diseaseId: "d6",
    symptoms: ["s1", "s2", "s9", "s10"]
  },
  
  // IBS
  {
    diseaseId: "d7",
    symptoms: ["s1", "s5", "s7", "s10", "s13"]
  },
  
  // Keracunan Staphylococcus aureus
  {
    diseaseId: "d8",
    symptoms: ["s1", "s2", "s3", "s5", "s10", "s16", "s28"]
  },
  
  // Keracunan Jamur Beracun
  {
    diseaseId: "d9",
    symptoms: ["s1", "s2", "s3", "s4", "s5", "s18", "s21", "s22", "s24", "s29"]
  },
  
  // Keracunan Salmonellae
  {
    diseaseId: "d10",
    symptoms: ["s1", "s2", "s4", "s5", "s13", "s16", "s17", "s28"]
  },
  
  // Keracunan Clostridium botulinum
  {
    diseaseId: "d11",
    symptoms: ["s2", "s3", "s16", "s18", "s19", "s22", "s24", "s26", "s30"]
  },
  
  // Keracunan Campylobacter
  {
    diseaseId: "d12",
    symptoms: ["s1", "s2", "s4", "s5", "s8", "s13", "s16", "s28"]
  }
];