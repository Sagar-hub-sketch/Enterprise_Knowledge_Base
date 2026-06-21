const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a document title'],
        },
        content: {
            type: String, // Extracted text from the PDF/File for basic search
        },
        fileUrl: {
            type: String,
            required: [true, 'Please provide the file path or URL'],
        },
        uploadedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // References the User who uploaded this document (usually an Admin)
            required: true,
        },
        isProcessed: {
            type: Boolean,
            default: false, // Will turn true after LangChain chunks and embeds the document
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Document', documentSchema);