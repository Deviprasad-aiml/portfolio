# Machani Deviprasad | Cloud Portfolio

A personal portfolio website for an aspiring **AWS Cloud Engineer**, built with plain HTML, CSS, and JavaScript and hosted on **Amazon S3** and delivered through **Amazon CloudFront**.

**Live site:** [https://d27uhqlte1g5pd.cloudfront.net/](https://d27uhqlte1g5pd.cloudfront.net/)

---

## About

I'm a BCA graduate (2022–2026) from Kurnool, Andhra Pradesh, starting my career in cloud. This portfolio shows my AWS skills, three hands-on AWS projects, my course certificate, and my work experience. I'm looking for entry-level roles in **Cloud Engineering, AWS Support, or Cloud Operations**.

## Features

- Responsive, dark-themed single-page layout (desktop, tablet, mobile)
- Motion design: animated hero cloud diagram, scrolling AWS services ticker, scroll-reveal sections, cursor glow, scroll progress bar, and active-section navigation
- Filterable skills grid (Compute, Storage & data, Networking & web, Security & monitoring, Git & GitHub) with a cursor spotlight on each card
- Three personal projects, each with a live link:
  - Portfolio website hosted with Amazon S3 and Amazon CloudFront
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
| Web hosting | Amazon S3, Amazon CloudFront |
| Databases | Amazon RDS, Amazon DynamoDB |
| Identity & access | AWS IAM |
| Load balancing | Application Load Balancer |
| Monitoring | Amazon CloudWatch |
| Version control | Git, GitHub |

## Projects

| Project | Services | Live |
| --- | --- | --- |
| Static website hosting | Amazon S3, Amazon CloudFront | [Portfolio](https://d27uhqlte1g5pd.cloudfront.net/) |
| Serverless To-Do Web App | S3, CloudFront, API Gateway, Lambda (Python), DynamoDB, IAM, CloudWatch Logs | [Open app](https://d14zu7pv5esdgr.cloudfront.net/) |
| Serverless Image Upload & Gallery App | S3, CloudFront, API Gateway, Lambda, DynamoDB, IAM, presigned URLs | [Open app](https://dxq9xaxo17d4s.cloudfront.net/) |

All three projects are served over HTTPS through Amazon CloudFront, with private S3 buckets secured using Origin Access Control (OAC).

## Tech Stack

- **HTML5**: semantic structure
- **CSS3**: custom properties, Grid, Flexbox, keyframe animations, responsive media queries
- **Vanilla JavaScript**: skills filter, scroll reveal (IntersectionObserver), and the architecture panel logic (no frameworks or build step)
- **Inline SVG + SMIL**: animated architecture diagrams
- **Amazon S3 + CloudFront**: hosting and HTTPS delivery

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

## Deployment (Amazon S3 + CloudFront)

1. Create an S3 bucket and upload the project files (`index.html`, `error.html`, `style.css`, `script.js`, `certificate.png`, and the certificate PDF). Keep the bucket private.
2. Create a CloudFront distribution with the bucket as the origin and use Origin Access Control (OAC) so only CloudFront can read it.
3. Set the default root object to `index.html` and add a custom error response that serves `error.html`.
4. Deploy. CloudFront gives you an HTTPS URL like the one above. After updating files, upload them to the bucket and create a CloudFront invalidation to refresh the cache.

## Certificate

**AWS Certificate of Graduation**, PrepInsta Technologies Pvt. Ltd., issued 13 October 2026.

## Contact

- Email: [machanideviprasad250@gmail.com](mailto:machanideviprasad250@gmail.com)
- LinkedIn: [Machani Deviprasad](https://www.linkedin.com/in/machani-deviprasad-8a4304286)
- Location: Kurnool, India

---

© 2026 Machani Deviprasad
