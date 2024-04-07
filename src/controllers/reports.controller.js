import Report from '../models/report.model.js';
import { enviarCorreo } from '../utils/emails.js';

export async function createReport(req, res) {

    const report = new Report(req.body);
    
    const reportSave = await report.save();

    enviarCorreo(reportSave);

    res.status(201).json({
        message: "Reporte enviado!",
        data: reportSave
    })

}
