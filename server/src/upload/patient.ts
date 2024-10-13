import { Sex } from "@prisma/client";
import { createPatient } from "../helper/uploadHelper";

export async function uploadPatient(researcherId: string, name: string, dateOfBirth: string, sex: Sex, diagnosticInfo: string, treatmentInfo: string) {
  const dateOfBirthISO = new Date(dateOfBirth).toISOString();

  const patient = await createPatient(researcherId, name, dateOfBirthISO, sex, diagnosticInfo, treatmentInfo);
  if (patient === null) throw { status: 400, message: "Invalid researcher." };

  return {
    name: patient.name,
    dateOfBirth: patient.dateOfBirth,
    sex: patient.sex,
    diagnosticInfo: patient.diagnosticInfo,
    treatmentInfo: patient.treatmentInfo
  }
}