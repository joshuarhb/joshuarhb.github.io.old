<template>
    <div class="CVPage" id="CVPage">
        <button @click="generatePDF">Download PDF</button>
        <div class="CV" id="CV">
            <header>
                <h1>Joshua Hamilton-Brown</h1>
                <p>Email: <a href="mailto:me@joshuarhb.com">me@joshuarhb.com</a> | Phone: <a
                        href="tel:+37258530563">+372
                        58530563</a> | Location: Tallinn, Estonia</p>

            </header>

            <section class="Personal Statement">
                <h2>Personal Statement</h2>
                <p>In anticipation of studying for a master’s in software engineering at the University of Tartu I am
                    eager
                    to apply strong critical thinking, technical expertise, and passion for technology in a professional
                    role alongside my studies to make an impact as part of a team and grow as an individual.</p>
                <p>My experience includes software engineering roles, focused on web and mobile application development;
                    and
                    data analytics roles, focused on tag management and user analysis. Proficiency in Java, Typescript,
                    C#,
                    and Python frameworks, and experience in agile development environments in industry allows
                    adaptability
                    to differing project demands.</p>
                <p>A purposeful approach and a strong work ethic, astute attention to detail and resilience under
                    pressure
                    characterise my professional persona. Talented at grasping new concepts quickly, and with a
                    confidence
                    in my skillset that positions me to succeed in diverse roles.</p>

            </section>
            <br>
            <section class="Expertise">
                <h2>Expertise & Key Skills</h2>
                <ul>
                    <li>Advanced programming and software engineering skills refined over eight years in education and
                        industry.</li>
                    <li>Communication and organizational skills, a proven ability to direct and collaborate with others.
                        Able to prioritize the most crucial fixes and quickly organise others to do the same where need
                        be.
                    </li>
                    <li>Analytical and risk-mitigating mindset, considering an issue holistically and operating with
                        attention and foresight towards potential reputational, financial and compliance related risk to
                        the
                        business. </li>
                    <li>Practical knowledge of computer systems, cultivated through academic, industry, and firsthand
                        experiences.</li>
                    <li>Ability to stay calm and organized, especially under pressure, while maintaining necessary
                        diligence.</li>
                    <li>Exceptional mathematical abilities, which have been remarkably useful even in seemingly
                        unrelated
                        tasks.</li>
                    <li>Succeeded in receiving a sponsorship from Vodafone to study a bachelor’s degree following an
                        in-depth selection process, interviews, and skills assessment.</li>
                </ul>
            </section>
            <br>
            <section class="Work">
                <h2>Work Experience</h2>
                <h3>Vodafone UK - Digital Degree Apprenticeship</h3>
                <h4>September 2018 - March 2024</h4>
                <p>Service Designer (January 2024 -> March 2024)</p>
                <p>Mapped customer journeys in Microsoft Visio across fixed and mobile products and services, through
                    all
                    Vodafone channels as part of a project covering 400+ journeys.</p>
                <p>Ran in-life testing of these journeys to validate the customer experience real time and managed the
                    journey library business tool whilst updating journey meta data.</p>
                <p>Located key stakeholders to validate journeys and collating pain points within the journeys, and
                    facilitated walkthroughs to incorporate these views and perspectives to capture all elements of
                    customer
                    experience.</p>

                <br>
                <p>Software Developer (September 2020 -> September 2021)</p>
                <p>Developed, and accountable for, internal tooling using Java and a low-code Pega platform for the
                    Automation & Robotics department. Implemented solutions on both cloud-based AWS and on-premises
                    platforms to align with business requirements.</p>
                <p>Operated within a large, international, scale-up environment where the work was integral to the
                    company’s
                    teams in quick responses to network faults and maintain high NPS across broadband products. </p>
                <p>Followed best Agile framework practices with regular releases managed via mature CI/CD pipelines.</p>
                <p>Gained useful insights into improving team cohesion through scrum practices and better communication
                    by
                    conducting regular knowledge transfers of each team’s expertise in planning, design, and development
                    work. </p>
                <p>Facilitated onboarding new team members who lacked experience with programming and the company’s
                    software
                    platform.</p>

                <br>
                <p>Digital Analytics Specialist (July 2019 – September 2019)</p>
                <p>Built data dashboards with Adobe Analytics and interactive data from Medallia and Decibel allowing
                    insights on marketing channels, user traffic, and spending data across Vodafone’s web and mobile
                    platform.</p>
                <p>Presented these dashboards to internal product teams to optimise and improve key user metrics.</p>
                <p>Engineered solutions for the company’s Tealium tag management platform using JavaScript, with both
                    Adobe
                    and Google Analytics producing insights and reports for internal stakeholders. </p>
                <p>Further conducted analysis on customer journeys after implementation of major code releases on the
                    customer website. </p>
                <p>Created wireframes with the UI/UX team for the newly released mobile app version to better facilitate
                    analytics of customer journeys.</p>

                <h3>Puretone Ltd - Sales and Accounts Administration</h3>
                <h4>February 2017 - May 2018</h4>
                <p>Delivered exceptional customer service and processed orders at a leading hearing aid electronics
                    company.
                </p>
                <p>Played a pivotal role in ensuring high throughput of company business, reducing bottlenecks in the
                    administration and production process where required.</p>
                <p>Managed over 60% of customer inquiries at peak times, fostering strong relationships with clientele.
                    Collaborated seamlessly with colleagues across both factory and office operations.</p>
            </section>
            <br>
            <section class="Education">
                <h2>Education</h2>
                <h3>University of Birmingham - BSc Computer Science with a Year in Industry</h3>
                <h4>September 2018 - July 2023</h4>
                <p>A demanding and fulfilling course that gave a sense of accomplishment in achieving at a renowned
                    University.</p>
                <p>Multiple team-based projects across programming and software design requiring taking on leadership
                    roles
                    along with close collaboration from project inception to final assessment.</p>
                <p>Projects developed throughout this degree used different programming languages such as Python, Java,
                    and
                    C, providing an elevated level of understanding in each language.</p>
                <p>Final year project involved developing a fully dockerized web app using a modern React frontend coded
                    in
                    Typescript, alongside a .NET backend and API coded in C# balanced via a Nginx reverse proxy and a
                    SQL
                    database following best practices for data security. Involved working with a full modern web
                    application
                    stack.</p>

                <p>Modules</p>
                <p>First Year: Artificial Intelligence | Business Organisation & Management | Data Structures &
                    Algorithms |
                    Introduction to Financial Analysis | Logic & Computation | Mathemtical Foundations of Computer
                    Science |
                    Programming In Java</p>
                <p>Second Year: Advanced Functional Programming | Mathematical Modelling & Decision Making | Security &
                    Networks | Software Engineering | Systems Programming In C/C++ | Team Project - Game Development</p>
                <p>Final Year: Advanced Networking | Computer Vision & Imaging | Machine Learning & Intelligent Data
                    Analysis | Mobile & Ubiquitous Computing</p>
            </section>
        </div>

    </div>
</template>

<script>
import html2pdf from 'html2pdf.js';

export default {
    name: 'CVPage',
    methods: {
        generatePDF() {
            const element = document.getElementById('CV');
            element.classList.add('only-pdf');
            const opt = {
                margin: [0.25, 0.5, 0.25, 0.5],
                filename: 'CV - Joshua Hamilton-Brown.pdf',
                // image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
            };

            html2pdf().from(element).set(opt).toContainer().save().finally(() => {
                element.classList.remove('only-pdf');
            });element.classList.remove('only-pdf');
        }
    }
}
</script>

<style>
@import './styles/CVPage.css'
</style>