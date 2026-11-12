# Script to generate a valid, professional PDF resume for Sindhuja
import os

def create_resume_pdf(output_path):
    # PDF generation using standard PDF 1.4 specs
    content = """%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 612 792]
  /Resources <<
    /Font <<
      /F1 4 0 R
      /F2 5 0 R
      /F3 6 0 R
    >>
  >>
  /Contents 7 0 R
>>
endobj
4 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj
5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
6 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Oblique
>>
endobj
7 0 obj
<<
  /Length {stream_length}
>>
stream
{stream_content}
endstream
endobj
xref
0 8
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000262 00000 n 
0000000336 00000 n 
0000000405 00000 n 
0000000482 00000 n 
trailer
<<
  /Size 8
  /Root 1 0 R
>>
startxref
{xref_offset}
%%EOF"""

    # We will build clean text stream operators
    # Coordinates in points: 612 x 792 (US Letter)
    stream_lines = [
        # Top banner background rectangle
        "0.08 0.09 0.16 rg",
        "0 720 612 72 re",
        "f",
        # Name
        "BT",
        "/F1 24 Tf",
        "1 1 1 rg",
        "40 752 Td",
        "(SINDHUJA) Tj",
        "ET",
        # Subtitle
        "BT",
        "/F2 10 Tf",
        "0.65 0.75 1 rg",
        "40 735 Td",
        "(B.Tech Computer Science & Engineering | Aspiring Software & DevOps Engineer) Tj",
        "ET",
        # Contact line
        "BT",
        "/F2 9 Tf",
        "0.2 0.2 0.25 rg",
        "40 700 Td",
        "(Email: sindhuja.cse2028@gmail.com   |   LinkedIn: linkedin.com/in/sindhuja-cse   |   GitHub: github.com/sindhuja-dev   |   Hyderabad, India) Tj",
        "ET",
        # Horizontal rule
        "0.8 0.8 0.85 RG",
        "1 w",
        "40 690 m 572 690 l S",
        
        # Section: CAREER OBJECTIVE
        "BT",
        "/F1 12 Tf",
        "0.35 0.2 0.75 rg",
        "40 668 Td",
        "(CAREER OBJECTIVE) Tj",
        "ET",
        "BT",
        "/F2 9.5 Tf",
        "0.2 0.2 0.2 rg",
        "40 652 Td",
        "(Motivated Computer Science Engineering student passionate about software development, full-stack engineering, and) Tj",
        "0 -13 Td",
        "(modern DevOps automation. Eager to leverage problem-solving capabilities, strong foundational skills in Python and Java,) Tj",
        "0 -13 Td",
        "(and hands-on CI/CD pipeline experience to build robust, scalable solutions in an impactful internship or engineering role.) Tj",
        "ET",

        # Section: EDUCATION
        "BT",
        "/F1 12 Tf",
        "0.35 0.2 0.75 rg",
        "40 605 Td",
        "(EDUCATION) Tj",
        "ET",
        # College
        "BT",
        "/F1 10.5 Tf",
        "0.1 0.1 0.1 rg",
        "40 588 Td",
        "(AVN Institute of Engineering and Technology, Hyderabad) Tj",
        "ET",
        "BT",
        "/F3 9.5 Tf",
        "0.3 0.3 0.3 rg",
        "40 575 Td",
        "(Bachelor of Technology (B.Tech) - Computer Science and Engineering (CSE)     |     Expected Graduation: 2028) Tj",
        "ET",
        "BT",
        "/F2 9 Tf",
        "0.25 0.25 0.25 rg",
        "40 561 Td",
        "(Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Web Technologies, Database Systems) Tj",
        "ET",

        # Section: TECHNICAL SKILLS
        "BT",
        "/F1 12 Tf",
        "0.35 0.2 0.75 rg",
        "40 535 Td",
        "(TECHNICAL SKILLS) Tj",
        "ET",
        "BT",
        "/F1 9.5 Tf",
        "0.1 0.1 0.1 rg",
        "40 518 Td",
        "(Programming Languages:) Tj",
        "ET",
        "BT",
        "/F2 9.5 Tf",
        "0.25 0.25 0.25 rg",
        "170 518 Td",
        "(Python, Java, JavaScript (ES6+), HTML5, CSS3) Tj",
        "ET",
        
        "BT",
        "/F1 9.5 Tf",
        "0.1 0.1 0.1 rg",
        "40 503 Td",
        "(DevOps & Cloud Tools:) Tj",
        "ET",
        "BT",
        "/F2 9.5 Tf",
        "0.25 0.25 0.25 rg",
        "170 503 Td",
        "(Git, GitHub, GitHub Actions (CI/CD Pipelines), GitHub Pages) Tj",
        "ET",

        "BT",
        "/F1 9.5 Tf",
        "0.1 0.1 0.1 rg",
        "40 488 Td",
        "(Core Competencies:) Tj",
        "ET",
        "BT",
        "/F2 9.5 Tf",
        "0.25 0.25 0.25 rg",
        "170 488 Td",
        "(Data Structures, OOP, Responsive UI Design, REST APIs, Automation Scripting) Tj",
        "ET",

        # Section: KEY PROJECTS
        "BT",
        "/F1 12 Tf",
        "0.35 0.2 0.75 rg",
        "40 460 Td",
        "(PROJECTS) Tj",
        "ET",
        # Project 1
        "BT",
        "/F1 10.5 Tf",
        "0.1 0.1 0.1 rg",
        "40 443 Td",
        "(AI CareerMate - AI-Powered Career Roadmap & Resume Guidance Platform) Tj",
        "ET",
        "BT",
        "/F3 9 Tf",
        "0.4 0.4 0.4 rg",
        "40 430 Td",
        "(Tech Stack: Python, NLP, JavaScript, HTML5/CSS3, Git) Tj",
        "ET",
        "BT",
        "/F2 9 Tf",
        "0.25 0.25 0.25 rg",
        "50 417 Td",
        "(- Engineered an intelligent assistant to parse resumes, identify skill gaps, and suggest customized engineering roadmaps.) Tj",
        "0 -12 Td",
        "(- Implemented algorithmic keyword matching and career trajectory predictions to support students in placement prep.) Tj",
        "ET",

        # Project 2
        "BT",
        "/F1 10.5 Tf",
        "0.1 0.1 0.1 rg",
        "40 387 Td",
        "(Automated Portfolio Deployment Pipeline with GitHub Actions & Pages) Tj",
        "ET",
        "BT",
        "/F3 9 Tf",
        "0.4 0.4 0.4 rg",
        "40 374 Td",
        "(Tech Stack: GitHub Actions, GitHub Pages, CI/CD, YAML, HTML5/CSS3/JavaScript) Tj",
        "ET",
        "BT",
        "/F2 9 Tf",
        "0.25 0.25 0.25 rg",
        "50 361 Td",
        "(- Built and configured a production-grade CI/CD pipeline triggered on every git push to the main branch.) Tj",
        "0 -12 Td",
        "(- Incorporated pre-deployment automated code validation, file integrity checks, and official GitHub Pages deployment.) Tj",
        "ET",

        # Project 3
        "BT",
        "/F1 10.5 Tf",
        "0.1 0.1 0.1 rg",
        "40 331 Td",
        "(AlgoVisualizer - Interactive Sorting & Pathfinding Algorithm Explorer) Tj",
        "ET",
        "BT",
        "/F3 9 Tf",
        "0.4 0.4 0.4 rg",
        "40 318 Td",
        "(Tech Stack: JavaScript, HTML5 Canvas, CSS3 Grid/Flexbox) Tj",
        "ET",
        "BT",
        "/F2 9 Tf",
        "0.25 0.25 0.25 rg",
        "50 305 Td",
        "(- Built real-time visual simulations for algorithms including Quick Sort, Merge Sort, and Binary Search.) Tj",
        "0 -12 Td",
        "(- Designed intuitive controls for custom array sizes, animation stepping speeds, and worst/average case comparisons.) Tj",
        "ET",

        # Section: CERTIFICATIONS & WORKSHOPS
        "BT",
        "/F1 12 Tf",
        "0.35 0.2 0.75 rg",
        "40 275 Td",
        "(CERTIFICATIONS & WORKSHOPS) Tj",
        "ET",
        "BT",
        "/F2 9 Tf",
        "0.25 0.25 0.25 rg",
        "50 258 Td",
        "(- Introduction to Git, GitHub, and DevOps Continuous Integration Workflows) Tj",
        "0 -13 Td",
        "(- Python for Problem Solving & Object-Oriented System Architecture) Tj",
        "0 -13 Td",
        "(- Responsive Web Design & Modern Frontend Development) Tj",
        "ET",

        # Section: EXTRACURRICULAR & LEADERSHIP
        "BT",
        "/F1 12 Tf",
        "0.35 0.2 0.75 rg",
        "40 213 Td",
        "(LEADERSHIP & ACTIVITIES) Tj",
        "ET",
        "BT",
        "/F2 9 Tf",
        "0.25 0.25 0.25 rg",
        "50 196 Td",
        "(- Active member of the AVN IET College Computer Science Coding & Developer Club.) Tj",
        "0 -13 Td",
        "(- Participated in college level tech hackathons and collaborative code pair programming challenges.) Tj",
        "0 -13 Td",
        "(- Mentored junior peers on basic Git commands, branching, and repository collaboration.) Tj",
        "ET"
    ]

    stream_content = "\n".join(stream_lines)
    stream_length = len(stream_content.encode('latin1'))

    # Build the PDF file with exact byte offset calculation
    obj1 = b"1 0 obj\n<<\n  /Type /Catalog\n  /Pages 2 0 R\n>>\nendobj\n"
    obj2 = b"2 0 obj\n<<\n  /Type /Pages\n  /Kids [3 0 R]\n  /Count 1\n>>\nendobj\n"
    obj3 = b"3 0 obj\n<<\n  /Type /Page\n  /Parent 2 0 R\n  /MediaBox [0 0 612 792]\n  /Resources <<\n    /Font <<\n      /F1 4 0 R\n      /F2 5 0 R\n      /F3 6 0 R\n    >>\n  >>\n  /Contents 7 0 R\n>>\nendobj\n"
    obj4 = b"4 0 obj\n<<\n  /Type /Font\n  /Subtype /Type1\n  /BaseFont /Helvetica-Bold\n>>\nendobj\n"
    obj5 = b"5 0 obj\n<<\n  /Type /Font\n  /Subtype /Type1\n  /BaseFont /Helvetica\n>>\nendobj\n"
    obj6 = b"6 0 obj\n<<\n  /Type /Font\n  /Subtype /Type1\n  /BaseFont /Helvetica-Oblique\n>>\nendobj\n"
    
    stream_bytes = stream_content.encode('latin1')
    obj7_header = f"7 0 obj\n<<\n  /Length {len(stream_bytes)}\n>>\nstream\n".encode('latin1')
    obj7_footer = b"\nendstream\nendobj\n"
    obj7 = obj7_header + stream_bytes + obj7_footer

    header = b"%PDF-1.4\n"
    offsets = [0] # 0 obj is free
    current_offset = len(header)
    
    offsets.append(current_offset)
    current_offset += len(obj1)

    offsets.append(current_offset)
    current_offset += len(obj2)

    offsets.append(current_offset)
    current_offset += len(obj3)

    offsets.append(current_offset)
    current_offset += len(obj4)

    offsets.append(current_offset)
    current_offset += len(obj5)

    offsets.append(current_offset)
    current_offset += len(obj6)

    offsets.append(current_offset)
    current_offset += len(obj7)

    xref_offset = current_offset
    xref = b"xref\n0 8\n0000000000 65535 f \n"
    for o in offsets[1:]:
        xref += f"{o:010d} 00000 n \n".encode('latin1')

    trailer = f"trailer\n<<\n  /Size 8\n  /Root 1 0 R\n>>\nstartxref\n{xref_offset}\n%%EOF\n".encode('latin1')

    pdf_data = header + obj1 + obj2 + obj3 + obj4 + obj5 + obj6 + obj7 + xref + trailer

    with open(output_path, "wb") as f:
        f.write(pdf_data)

    print(f"Created {output_path} ({len(pdf_data)} bytes)")

if __name__ == "__main__":
    for path in ["C:\\sindhuja-portfolio\\assets\\Sindhuja_Resume.pdf", "C:\\assets\\Sindhuja_Resume.pdf"]:
        os.makedirs(os.path.dirname(path), exist_ok=True)
        create_resume_pdf(path)
