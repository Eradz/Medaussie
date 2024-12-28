import React from 'react'

const privacyPolicy: {
    head?: string;
    description: string;
    list?: string[];
}[]  = [
    {head: "1. Introduction",  description: "Welcome to Medaussie. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, which provides information about medical license conversion in Nigeria and medical examination opportunities in Australia for international graduates." },
    {head: "2. Information We Collect", description:  "", list: [] },
    {head: "2.1 Personal Information", description:  "We may collect the following types of personal information:", list: ["Full name", "Email address", "Contact information", "Professional credentials", "Medical education history", "Country of origin", "Current licensing status"] },
    {head: "", description: "We do not sell, rent, or trade your personal information to third parties for marketing purposes", list: []},
    {head: "2.2 Automatically Collected Information", description: "We automatically collect certain information when you visit our website, including:", list: ["IP address", "Browser type", "Device information", "Operating system", "Pages visited", "Time and date of visits","Referring website addresses"] },
    {head: "3. How We Use Your Information", description: "We use the collected information for the following purposes:", list: ["To provide information about medical licensing processes","To send updates about examination dates and requirements","To respond to your inquiries and support requests","To improve our website content and user experience","To maintain the security and functionality of our website","To comply with legal obligations"] },
    {head: "4. Information Sharing and Disclosure", description: "We may share your information with:", list: [" Medical licensing authorities in Nigeria when requested","Australian medical examination bodies when authorized","Service providers who assist in website operation", "Legal authorities when required by law"] },
    {head: "5. Data Security", description: "We implement appropriate technical and organizational measures to protect your personal information, including:", list: ["Encryption of data in transit and at rest","Regular security assessments","Access controls and authentication measures","Secure data storage systems"] },
    {head: "6. International Data Transfers", description: "Your information may be transferred to and processed in countries other than your country of residence, particularly Nigeria and Australia. We ensure appropriate safeguards are in place for such transfers."},
    {head: "7. Your Rights", description: "You have the right to:", list: ["Access your personal information","Correct inaccurate data", "Request deletion of your data","Withdraw consent for data processing","Object to certain data processing activities","Request data portability"] },
    {head: "8. Cookies and Tracking Technologies", description: "We use cookies and similar technologies to:", list: ["Maintain session information","Remember your preferences","Analyze website usage","Improve user experience"] },
    {head: "", description: "You can modify your browser settings to control cookie behavior.", list: []},
    {head: "9. Children's Privacy", description: "Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children."},
    {head: "10. Changes to This Privacy Policy", description: "We may update this Privacy Policy periodically. We will notify you of any material changes by posting the updated policy on our website with a new \"Last Updated\" date."},
    {head: "11. Contact Information", description: "For questions or concerns about this Privacy Policy, please contact us at:", list: ["Email: privacy@medaussie.com","Address: ****","Phone: +234-1234567890"] },
    {head: "12. Jurisdiction-Specific Provisions", description: "", list: [] },
    {head: "12.1 Nigeria", description: "We comply with Nigerian data protection regulations, including the Nigeria Data Protection Regulation (NDPR).", list: [] },
    {head: "12.2 Australia", description: "We adhere to the Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth).", list: [] },
]
const page = () => {
  return (
    <div className='bg-primary flex flex-col px-[10%] py-14 mx-auto'>
        <div className='text-center'>
        <p className='font-bold text-[18px]'>Privacy Policy</p>
<p>Last Updated: December 28, 2024</p>
        </div>
{
    privacyPolicy.map(({head, description, list}, i)=>{
        return (
            <div key={i} className='leading-loose'>
                <p className='font-bold text-[16px]'>{head}</p>
                <h2>{description}</h2>
                <ol className='list-disc pl-8'>
                    {list?.map((item, i)=>{
                        return <li key={i}>{item}</li>
                    })}
                </ol>
            </div>
        )
    })
}
    </div>
  )
}

export default page