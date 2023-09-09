'use client';

import FiltersBar from '@/components/Projects/FiltersBar/FiltersBar';
import { Metadata } from 'next';
import ProjectCard from '@/components/Projects/ProjectCard/ProjectCard';

export const metadata: Metadata = {
  title: 'הפרויקטים',
  description:
    'הכירו את פרויקטי הקוד הפתוח של חברי הקהילה, ובחרו לאילו פרויקטים תרצו להצטרף',
  openGraph: {
    title: 'הפרויקטים | מעקף',
    description:
      'הכירו את פרויקטי הקוד הפתוח של חברי הקהילה, ובחרו לאילו פרויקטים תרצו להצטרף',
    url: 'https://maakaf-website.vercel.app/projects',
    siteName: 'Maakaf',
    type: 'website',
    images: [
      {
        url: 'https://maakaf-website.vercel.app/favicon.ico',
        width: 600,
        height: 600,
      },
    ],
  },
};

const ProjectsPage = () => {
  const updatedDate = new Date('2023/3/14');
  const createdDate = new Date('2023/3/14');
  const projectName = 'פרויקט אקראי 45HG';
  const description = `פסקת תיאור של הפרויקטים פה שתתן חשק לעשייה, שתדבר קצת על הפרויקט ומה
  יש בו, מה מחפשים בדיוק במפתחים שמתנדבים, איזה פונקציות קיימות ואולי
  מה הלך הרוח של הפרויקט. מה שצריך כדי לתת כמה שיותר מידע לככה הכרטיס
  מתרחב כשיש יותר מ-3 שורות. בגדול הטקסט נשאר בגבולות ה700 פיקסלים,
  אבל השפות תכנות והכפתורים יורדים למטה, כשכל השאר נשאר למעלה ותמיד
  נשאר רווח של 24 פיקסלים בין התיבת טקסט לשפות תכנות והכפתורים.`;

  return (
    <section className="h-full">
      <FiltersBar />
      <ProjectCard
        projectThumbnailSrc={'/'}
        updatedDate={updatedDate}
        createdDate={createdDate}
        projectName={projectName}
        description={description}
        tags={['Java', 'Python', 'CSS', 'CSS1', 'CSS2', 'CSS3']}
      ></ProjectCard>
    </section>
  );
};

export default ProjectsPage;
