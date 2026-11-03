# Machani Deviprasad | Cloud Portfolio

A personal portfolio website for an aspiring **AWS Cloud Engineer**, built with plain HTML, CSS, and JavaScript and deployed with **AWS Amplify**.

**Live site:** [https://staging.d1k8f7xlshiopg.amplifyapp.com/](https://staging.d1k8f7xlshiopg.amplifyapp.com/)

---

## About

I'm a BCA graduate (2022–2026) from Kurnool, Andhra Pradesh, starting my career in cloud. This portfolio shows my AWS skills, three hands-on AWS projects, my course certificate, and my work experience. I'm looking for entry-level roles in **Cloud Engineering, AWS Support, or Cloud Operations**.

## Features

- Responsive, dark-themed single-page layout (desktop, tablet, mobile)
- Motion design: animated hero cloud diagram, scrolling AWS services ticker, scroll-reveal sections, cursor glow, scroll progress bar, and active-section navigation
- Filterable skills grid (Compute, Storage & data, Networking & web, Security & monitoring, Git & GitHub) with a cursor spotlight on each card
- Three personal projects, each with a live link:
  - Portfolio website hosted with Amazon S3 and AWS Amplify
  - Serverless To-Do Web App (S3, API Gateway, Lambda, DynamoDB)
  - Serverless Image Upload & Gallery App (S3, API Gateway, Lambda, DynamoDB, presigned URLs)
- Collapsible, animated "How it works" architecture diagrams for both serverless apps: a request flows step by step through the services, and each step can be selected to jump to it
- AWS course certificate (PrepInsta) with image preview, PDF view, and download
- Experience and education timeline
- Custom 404 page (`error.html`)
- Accessibility basics: skip link, semantic HTML, `aria` labels, visible focus states, keyboard-operable steps, and reduced-motion support (animations switch off for visitors who prefer reduced motion)

## AWS Skills Showcased

| Area | Services |
| --- | --- |
| Compute & scaling | EC2, Lambda, API Gateway, Auto Scaling |
| Storage | Amazon EBS, Amazon S3 |
| Networking & DNS | Amazon VPC, Route 53 |
| Web hosting | AWS Amplify |
| Databases | Amazon RDS, Amazon DynamoDB |
| Identity & access | AWS IAM |
| Load balancing | Application Load Balancer |
| Monitoring | Amazon CloudWatch |
| Version control | Git, GitHub |

## Projects

| Project | Services | Live |
| --- | --- | --- |
| Static website hosting | Amazon S3, AWS Amplify | [Portfolio](https://staging.d1k8f7xlshiopg.amplifyapp.com/) |
| Serverless To-Do Web App | S3, API Gateway, Lambda (Python), DynamoDB, IAM, CloudWatch Logs | [Open app](http://deviprasad-todo-app-2026.s3-website.ap-south-1.amazonaws.com) |
| Serverless Image Upload & Gallery App | S3, API Gateway, Lambda, DynamoDB, IAM, presigned URLs | [Open app](http://myapp-frontend-1246.s3-website.ap-south-1.amazonaws.com) |

The two serverless apps are hosted on S3 static website endpoints, which use HTTP. CloudFront (HTTPS with a private bucket) is the planned next step.

## Tech Stack

- **HTML5**: semantic structure
- **CSS3**: custom properties, Grid, Flexbox, keyframe animations, responsive media queries
- **Vanilla JavaScript**: skills filter, scroll reveal (IntersectionObserver), and the architecture panel logic (no frameworks or build step)
- **Inline SVG + SMIL**: animated architecture diagrams
- **AWS Amplify**: hosting and deployment

## Project Structure

```
.
├── index.html                           # Main portfolio page
├── error.html                           # Custom 404 page
├── style.css                            # All styles, including the motion layer
├── script.js                            # Skills filter, motion effects, architecture panels
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
