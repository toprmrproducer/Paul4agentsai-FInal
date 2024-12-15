import { GoogleSpreadsheet } from 'google-spreadsheet';

const SPREADSHEET_ID = process.env.VITE_SPREADSHEET_ID;
const CLIENT_EMAIL = process.env.VITE_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.VITE_GOOGLE_PRIVATE_KEY;

export async function addLeadToSpreadsheet(data: any) {
  try {
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    
    await sheet.addRow({
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      businessType: data.businessType,
      servicesInterested: data.servicesInterested,
      source: data.source
    });

    return true;
  } catch (error) {
    console.error('Error adding lead to spreadsheet:', error);
    return false;
  }
}