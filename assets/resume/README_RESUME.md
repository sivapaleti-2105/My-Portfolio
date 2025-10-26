Place your resume (DOCX) here so the site can serve and allow visitors to download it.

Recommended file path and name (exact):

assets/resume/Siva_Paleti_Resume.docx

Why this path/name:
- `index.html` includes a link that points to this exact path. If you use a different name, update the link in `index.html` accordingly.

How to add your resume:
1. Copy the DOCX file from your machine into the folder `assets/resume`.
   - Example (macOS, zsh):

     cp ~/Downloads/YourResume.docx ./assets/resume/Siva_Paleti_Resume.docx

2. Commit the file to Git if you want it in the repo (optional):

     git add assets/resume/Siva_Paleti_Resume.docx
     git commit -m "Add resume DOCX"

Converting DOCX to PDF (optional):
- If you'd like a PDF fallback so visitors can view the resume in-browser, convert the DOCX to PDF and place it at `assets/resume/Siva_Paleti_Resume.pdf`.

Local conversion using LibreOffice (soffice):

- Using `soffice` (LibreOffice) on macOS:

    soffice --headless --convert-to pdf "assets/resume/Siva_Paleti_Resume.docx" --outdir "assets/resume"

- Or using `libreoffice` binary:

    libreoffice --headless --convert-to pdf "assets/resume/Siva_Paleti_Resume.docx" --outdir "assets/resume"

Notes & browser behavior:
- The `download` attribute in the link encourages browsers to download the file instead of opening it inline, but actual behavior depends on the user's browser settings.
- If you want the PDF to open in the browser first, link to `Siva_Paleti_Resume.pdf` (no `download` attribute) or provide both links.

If you'd like, I can:
- Add a visible nav item for the resume in the top navigation.
- Add a styled button for the resume (edit `style.css`).
- Create both DOCX and PDF links in `index.html` with icons.

Tell me if you want me to add any of those enhancements and whether you want me to add a placeholder file for now.