# Machani Deviprasad | Cloud Portfolio

A personal portfolio website for an aspiring **AWS Cloud Engineer**, built with plain HTML, CSS, and JavaScript and deployed with **AWS Amplify**.

**Live site:** [https://staging.d1k8f7xlshiopg.amplifyapp.com/](https://staging.d1k8f7xlshiopg.amplifyapp.com/)

---

## About

I'm a BCA graduate (2022–2026) from Kurnool, Andhra Pradesh, starting my career in cloud. This portfolio shows my AWS skills, a hands-on S3 project, my course certificate, and my work experience. I'm looking for entry-level roles in **Cloud Engineering, AWS Support, or Cloud Operations**.

## Features

- Responsive, dark-themed single-page layout (desktop, tablet, mobile)
- Filterable skills grid (Compute, Storage & data, Networking & web, Security & monitoring, Git & GitHub)
- Personal project section on static website hosting with Amazon S3
- AWS course certificate (PrepInsta) with image preview, PDF view, and download
- Experience and education timeline
- Custom 404 page (`error.html`)
- Accessibility basics: skip link, semantic HTML, `aria` labels, visible focus states, reduced-motion support

## AWS Skills Showcased

| Area | Services |
| --- | --- |
| Compute & scaling | EC2, Lambda, Auto Scaling |
| Storage | Amazon EBS, Amazon S3, S3 Glacier |
| Networking & DNS | Amazon VPC, Route 53 |
| Web hosting | AWS Amplify |
| Databases | Amazon RDS |
| Identity & access | AWS IAM |
| Load balancing | Application Load Balancer |
| Monitoring | Amazon CloudWatch |
| Version control | Git, GitHub |

## Tech Stack

- **HTML5**: semantic structure
- **CSS3**: custom properties, Grid, Flexbox, responsive media queries
- **Vanilla JavaScript**: skill filter logic (no frameworks or build step)
- **AWS Amplify**: hosting and deployment

## Project Structure

```
.
├── index.html                           # Main portfolio page
├── error.html                           # Custom 404 page
├── style.css                            # All styles
├── script.js                            # Skills filter
├── certificate.png                      # Certificate preview image
├── certificate_AWS_Machani_Deviprasad.pdf  # Certificate PDF
└── README.md
```

## Run Locally

No installation is needed.

```bash
# Clone the repository
git clone <your-repository-url>
cd <repository-folder>

# Option 1: open index.html directly in your browser

# Option 2: serve it locally
python -m http.server 8000
# then visit http://localhost:8000
```

## Deployment (AWS Amplify)

1. Push this project to a GitHub repository.
2. Open the **AWS Amplify** console and choose **Host web app**.
3. Connect the GitHub repository and select the branch to deploy.
4. Keep the default settings. No build command is needed because this is a static site.
5. Save and deploy. Amplify gives you a URL like the one above, and every new push to the branch redeploys automatically.

## Certificate

**AWS Certificate of Graduation**, PrepInsta Technologies Pvt. Ltd., issued 13 October 2026.

## Contact

- Email: [machanideviprasad250@gmail.com](mailto:machanideviprasad250@gmail.com)
- LinkedIn: [Machani Deviprasad](https://www.linkedin.com/in/machani-deviprasad-8a4304286)
- Location: Kurnool, India

---

© 2026 Machani Deviprasad
