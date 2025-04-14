import React, { useState } from 'react';
import { symptoms, diseases, inferenceRules, Symptom, Disease } from './medicalData';

const App: React.FC = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [diagnosisResults, setDiagnosisResults] = useState<{[key: string]: number}>({});
  const [isDiagnosisComplete, setIsDiagnosisComplete] = useState<boolean>(false);
  const [threshold, setThreshold] = useState<number>(20); // Default threshold 20%

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom) 
        : [...prev, symptom]
    );
  };

  const handleThresholdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setThreshold(value);
    }
  };

  const performDiagnosis = () => {
    if (selectedSymptoms.length === 0) {
      alert('Silakan pilih minimal satu gejala!');
      return;
    }

    // Reset previous results
    const results: {[key: string]: number} = {};
    
    // Initialize all diseases with 0%
    diseases.forEach(disease => {
      results[disease.id] = 0;
    });

    // Apply forward chaining inference
    inferenceRules.forEach(rule => {
      // Check how many symptoms from the rule match the selected symptoms
      const matchingSymptoms = rule.symptoms.filter(symptom => 
        selectedSymptoms.includes(symptom)
      );
      
      // Calculate percentage based on matching symptoms
      if (matchingSymptoms.length > 0) {
        const matchPercentage = (matchingSymptoms.length / rule.symptoms.length) * 100;
        
        // Update the disease confidence level
        results[rule.diseaseId] = Math.max(results[rule.diseaseId], matchPercentage);
      }
    });

    setDiagnosisResults(results);
    setIsDiagnosisComplete(true);
  };

  const resetDiagnosis = () => {
    setSelectedSymptoms([]);
    setDiagnosisResults({});
    setIsDiagnosisComplete(false);
  };

  // Get symptom name by ID
  const getSymptomNameById = (id: string): string => {
    const symptom = symptoms.find(s => s.id === id);
    return symptom ? symptom.name : id;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Component */}
      <header className="bg-blue-800 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-3 md:mb-0">
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                SisGastro
              </h1>
              <p className="text-sm text-blue-200">
                Sistem Pakar Diagnosis Infeksi Gastro-Usus
              </p>
            </div>

            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-blue-100 hover:text-white transition duration-300"
              >
                Tentang
              </a>
              <a 
                href="#" 
                className="text-blue-100 hover:text-white transition duration-300"
              >
                Info Kesehatan
              </a>
              <a 
                href="#" 
                className="text-blue-100 hover:text-white transition duration-300"
              >
                Bantuan
              </a>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">
            Sistem Pakar Diagnosis Infeksi Sistem Gastro-Usus
          </h2>
          
          <p className="mb-4 text-gray-700">
            Silakan pilih gejala-gejala yang Anda alami saat ini.
            Sistem akan menganalisis dan memberikan kemungkinan diagnosis berdasarkan gejala yang dipilih.
          </p>
          
          {!isDiagnosisComplete ? (
            <>
              {/* Threshold Setting */}
              <div className="mt-4 mb-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Pengaturan Threshold:</h3>
                <div className="flex items-center">
                  <label htmlFor="threshold" className="mr-3 text-gray-700">
                    Tampilkan penyakit dengan persentase di atas:
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      id="threshold"
                      min="0"
                      max="100"
                      value={threshold}
                      onChange={handleThresholdChange}
                      className="w-16 border border-gray-300 rounded-md px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="ml-1 text-gray-700">%</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Hanya penyakit dengan kemungkinan di atas threshold yang akan ditampilkan dalam hasil diagnosis.
                </p>
              </div>

              {/* Symptom Selector Component */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Pilih Gejala yang Anda Alami:</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {symptoms.map(symptom => (
                    <div 
                      key={symptom.id}
                      className={`
                        border rounded-lg p-3 cursor-pointer transition-all duration-300
                        ${selectedSymptoms.includes(symptom.id) 
                          ? 'bg-blue-100 border-blue-400' 
                          : 'bg-white border-gray-200 hover:bg-gray-50'}
                      `}
                      onClick={() => handleSymptomToggle(symptom.id)}
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedSymptoms.includes(symptom.id)}
                          onChange={() => {}}
                          className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label className="ml-2 block text-sm text-gray-900">
                          {symptom.name}
                        </label>
                      </div>
                      {symptom.description && (
                        <p className="text-xs text-gray-500 mt-1 ml-7">
                          {symptom.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex justify-center">
                <button
                  onClick={performDiagnosis}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                >
                  Analisis Gejala
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Diagnosis Result Component */}
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Hasil Diagnosis:</h3>

                <div className="mb-4 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-gray-700 font-medium">Threshold yang diterapkan: </span>
                    <span className="ml-1 font-bold text-blue-700">{threshold}%</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    Hanya menampilkan penyakit dengan kemungkinan di atas threshold yang dipilih.
                  </p>
                </div>

                {Object.values(diagnosisResults).every(value => value <= threshold) ? (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                    <p className="text-yellow-700">
                      Tidak ada diagnosis yang cocok dengan gejala yang Anda pilih dan threshold yang ditentukan ({threshold}%). 
                      Silakan coba lagi dengan gejala yang berbeda atau turunkan nilai threshold.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">Gejala yang Anda Pilih:</h4>
                      <ul className="list-disc pl-5 text-gray-700">
                        {selectedSymptoms.map(symptomId => (
                          <li key={symptomId} className="mb-1">
                            {getSymptomNameById(symptomId)}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      {Object.entries(diagnosisResults)
                        .sort(([, percentageA], [, percentageB]) => percentageB - percentageA)
                        .filter(([, percentage]) => percentage > threshold)
                        .map(([diseaseId, percentage]) => {
                          const disease = diseases.find(d => d.id === diseaseId);
                          if (!disease) return null;
                          
                          const thresholdExplanation = percentage >= threshold * 1.5 
                            ? `(${Math.round(percentage)}% jauh di atas threshold ${threshold}%)` 
                            : `(${Math.round(percentage)}% di atas threshold ${threshold}%)`;
                          
                          return (
                            <div 
                              key={diseaseId}
                              className="border border-gray-200 rounded-lg p-4 bg-white"
                            >
                              <div className="flex justify-between items-center mb-2">
                                <h4 className="text-lg font-medium text-gray-900">{disease.name}</h4>
                                <span className={`
                                  font-bold px-2 py-1 rounded-lg text-white
                                  ${percentage >= 70 ? 'bg-red-500' : 
                                    percentage >= 40 ? 'bg-yellow-500' : 'bg-green-500'}
                                `}>
                                  {Math.round(percentage)}%
                                </span>
                              </div>
                              
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div 
                                  className={`h-2.5 rounded-full 
                                    ${percentage >= 70 ? 'bg-red-500' : 
                                      percentage >= 40 ? 'bg-yellow-500' : 'bg-green-500'}
                                  `}
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                              
                              <div className="mt-1 text-xs text-gray-500">
                                {thresholdExplanation}
                              </div>
                              
                              {disease.description && (
                                <p className="mt-2 text-sm text-gray-600">
                                  {disease.description}
                                </p>
                              )}
                              
                              {percentage >= 60 && disease.recommendations && (
                                <div className="mt-3 pt-3 border-t border-gray-100">
                                  <h5 className="text-sm font-medium text-gray-900 mb-1">Rekomendasi:</h5>
                                  <p className="text-sm text-gray-600">{disease.recommendations}</p>
                                </div>
                              )}
                            </div>
                          );
                        })}
                    </div>

                    {Object.entries(diagnosisResults).filter(([, percentage]) => percentage > threshold).length === 0 && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                        <p className="text-yellow-700">
                          Tidak ada diagnosis yang memenuhi threshold {threshold}%. 
                          Silakan coba dengan threshold yang lebih rendah atau tambahkan gejala lain.
                        </p>
                      </div>
                    )}

                    <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-4">
                      <p className="text-blue-700 text-sm">
                        <strong>Catatan:</strong> Hasil diagnosis ini hanya berdasarkan sistem pakar dan tidak menggantikan diagnosa medis dari dokter. 
                        Silakan konsultasikan dengan tenaga medis profesional untuk diagnosis yang akurat.
                      </p>
                    </div>
                  </>
                )}
              </div>
              
              <div className="mt-6 flex justify-center">
                <button
                  onClick={resetDiagnosis}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                >
                  Diagnosa Baru
                </button>
              </div>
            </>
          )}
        </div>
      </main>
      
      {/* Footer Component */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} SisGastro. Hak Cipta Dilindungi.</p>
              <p className="text-sm text-gray-400">
                Sistem Pakar untuk Diagnosis Infeksi Gastro-Usus
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-6">
              <a href="#" className="text-gray-300 hover:text-white mb-2 md:mb-0">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-300 hover:text-white mb-2 md:mb-0">
                Syarat Penggunaan
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Kontak
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;