import { updatePatientData } from "../helper/updateHelper";

export async function updatePatient(researcherId: string, patientId: string, patientData: any) {
  const patient = await updatePatientData(patientId, patientData);
  if (patient === null) throw { status: 400, message: "Invalid patient." };
  if (patient.researcher.id !== researcherId) throw { status: 401, message: "This is not your patient and you are not authorised to update the patient's data." };

  return {
    id: patient.id,
    name: patient.name,
    dateOfBirth: patient.dateOfBirth,
    sex: patient.sex,
    diagnosticInfo: patient.diagnosticInfo,
    treatmentInfo: patient.treatmentInfo,
    genomicData: patient.genomicData,
    phenotypeData: patient.phenotypes,
    imagingData: patient.imagingData,
    signalData: patient.signalData
  }
}