import React, { useState } from 'react';
import { BookOpen, Clipboard, Gavel, Info, Search, Shield, User, Users } from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Container from '@/components/ui/container';
import RightsSearch from '@/components/rights/RightsSearch';
import RightsCategory, { RightsCategoryProps  } from '@/components/rights/RightsCategory';
import RightsSidebar from '@/components/rights/RightsSidebar';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

// Mock rights data
const rightsCategories: Omit<RightsCategoryProps, 'icon'>[] = [
  {
    id: "constitutional",
    title: "Constitutional Rights",
    description: "Fundamental rights guaranteed by the U.S. Constitution",
    rights: [
      {
        id: "freedom-speech",
        title: "Freedom of Speech and Expression",
        description: "The First Amendment protects your right to express opinions without government censorship. This includes speech, writing, art, and other forms of expression.",
        sections: [
          {
            title: "Online Speech",
            content: "The First Amendment protection extends to speech online, including social media. However, private platforms can set their own rules as they are not government entities."
          },
          {
            title: "Hate Speech",
            content: "Unlike some countries, the U.S. has no general law against 'hate speech.' Offensive speech is generally protected unless it directly incites imminent lawless action or constitutes a 'true threat.'"
          },
          {
            title: "Government Employment",
            content: "Government employees have some First Amendment protection when speaking as citizens on matters of public concern, but less protection for speech related to their official duties."
          }
        ],
        relevantCases: [
          "Brandenburg v. Ohio (1969) - Established that speech advocating illegal conduct is protected unless it is intended to incite 'imminent lawless action'",
          "Texas v. Johnson (1989) - Burning the American flag as political protest is protected symbolic speech",
          "Snyder v. Phelps (2011) - Even highly offensive speech on matters of public concern is protected"
        ],
        keyExceptions: [
          "True threats of violence",
          "Obscenity (as legally defined)",
          "Defamation (false statements that harm reputation)",
          "Speech that creates a 'clear and present danger'"
        ]
      },
      {
        id: "right-to-privacy",
        title: "Right to Privacy",
        description: "While not explicitly mentioned in the Constitution, the Supreme Court has recognized a right to privacy derived from several constitutional amendments.",
        sections: [
          {
            title: "Personal Decisions",
            content: "The right to privacy protects individuals' ability to make personal decisions about their bodies, relationships, and families without government interference."
          },
          {
            title: "Information Privacy",
            content: "The Fourth Amendment provides some protection against unreasonable government collection of personal information, though this protection is limited in many contexts."
          },
          {
            title: "Medical Privacy",
            content: "While constitutional privacy rights protect some medical decisions, most medical privacy is protected by statutes like HIPAA rather than by constitutional law."
          }
        ],
        relevantCases: [
          "Griswold v. Connecticut (1965) - Recognized right to privacy in marital relationships and contraceptive use",
          "Roe v. Wade (1973) - Found privacy right included abortion decisions (partially overturned by Dobbs v. Jackson Women's Health Organization)",
          "Lawrence v. Texas (2003) - Struck down laws criminalizing consensual same-sex intimate conduct"
        ],
        keyExceptions: [
          "Public records and information shared with third parties often have reduced privacy protection",
          "Government interests in public safety can override privacy in some circumstances",
          "Privacy rights vary significantly across different contexts and continue to evolve"
        ]
      },
      {
        id: "equal-protection",
        title: "Equal Protection Under Law",
        description: "The 14th Amendment guarantees that all citizens receive equal protection under the law, prohibiting discrimination by government entities.",
        sections: [
          {
            title: "Levels of Scrutiny",
            content: "Courts apply different levels of scrutiny to discrimination claims: strict scrutiny for race, national origin, and religion; intermediate scrutiny for gender; and rational basis review for most other categories."
          },
          {
            title: "Affirmative Action",
            content: "Policies designed to increase representation of underrepresented groups face strict scrutiny, though limited forms have been upheld in educational contexts until recent Supreme Court decisions."
          },
          {
            title: "Private Discrimination",
            content: "The Equal Protection Clause only restricts government action, not private discrimination. However, federal and state statutes like the Civil Rights Act prohibit various forms of private discrimination."
          }
        ],
        relevantCases: [
          "Brown v. Board of Education (1954) - Outlawed racial segregation in public schools",
          "United States v. Virginia (1996) - Struck down male-only admissions policy at state-funded military college",
          "Obergefell v. Hodges (2015) - Established right to same-sex marriage nationwide"
        ],
        keyExceptions: [
          "Differential treatment may be allowed if it serves a compelling government interest and is narrowly tailored",
          "Military context: courts give significant deference to military decision-making",
          "De facto discrimination without discriminatory intent can be harder to challenge"
        ]
      },
    ]
  },
  {
    id: "consumer",
    title: "Consumer Rights",
    description: "Protections for consumers in the marketplace",
    rights: [
      {
        id: "right-to-safety",
        title: "Right to Safety",
        description: "You have the right to be protected against products, services, and production processes that may be hazardous to health or life.",
        sections: [
          {
            title: "Product Safety Standards",
            content: "The Consumer Product Safety Commission (CPSC) establishes and enforces safety standards for over 15,000 types of consumer products."
          },
          {
            title: "Food Safety",
            content: "The FDA regulates food safety, while the USDA oversees meat, poultry, and egg products. These agencies enforce standards to prevent contamination and ensure proper labeling."
          },
          {
            title: "Automobile Safety",
            content: "The National Highway Traffic Safety Administration (NHTSA) sets and enforces safety performance standards for motor vehicles and equipment."
          }
        ],
        relevantCases: [
          "Grimshaw v. Ford Motor Co. (1981) - The 'Ford Pinto case' established significant precedent for holding manufacturers liable for dangerous design defects",
          "Escola v. Coca-Cola Bottling Co. (1944) - Established the doctrine of strict liability for defective products"
        ],
        keyExceptions: [
          "Products with obvious dangers or used in unintended ways may not be covered",
          "Products that carry appropriate warnings about potential hazards",
          "Some state laws include 'assumption of risk' defenses"
        ]
      },
      {
        id: "right-to-information",
        title: "Right to Be Informed",
        description: "You have the right to accurate information needed to make informed choices in the marketplace.",
        sections: [
          {
            title: "Truth in Advertising",
            content: "The Federal Trade Commission (FTC) prohibits deceptive or misleading advertising, requiring that claims must be truthful, not misleading, and supported by evidence."
          },
          {
            title: "Financial Disclosure",
            content: "Laws like the Truth in Lending Act require clear disclosure of loan terms, interest rates, and fees before consumers commit to financial agreements."
          },
          {
            title: "Food and Drug Labeling",
            content: "FDA regulations require detailed nutritional information, ingredient lists, and health claims to be accurate and substantiated by scientific evidence."
          }
        ],
        relevantCases: [
          "FTC v. Colgate-Palmolive Co. (1965) - Established that visual demonstrations in advertisements must accurately represent the product's capabilities",
          "Williams v. Gerber Products Co. (2008) - Found that 'reasonable consumers' can be misled by packaging even if technically accurate"
        ],
        keyExceptions: [
          "Puffery (obvious exaggeration) is generally allowed in advertising",
          "Some information may be withheld for legitimate trade secrets",
          "Different disclosure standards apply in different industries and contexts"
        ]
      },
      {
        id: "right-to-choice",
        title: "Right to Choose",
        description: "You have the right to select from a range of products and services at competitive prices in a fair marketplace.",
        sections: [
          {
            title: "Antitrust Protection",
            content: "Federal laws like the Sherman Antitrust Act and Clayton Act prohibit monopolies, price-fixing, and other anti-competitive practices that limit consumer choice."
          },
          {
            title: "Contract Fairness",
            content: "Laws protect against unfair contract terms, providing cooling-off periods for certain purchases and prohibiting unconscionable clauses in contracts."
          },
          {
            title: "Freedom from Coercion",
            content: "Consumers have the right to make purchases free from high-pressure tactics, deception, or undue influence. Many states have specific regulations against such practices."
          }
        ],
        relevantCases: [
          "United States v. Microsoft Corp. (2001) - Major antitrust case addressing monopolistic practices that limited consumer choice in operating systems and web browsers",
          "Leegin Creative Leather Products v. PSKS (2007) - Addressed manufacturers' ability to set minimum retail prices"
        ],
        keyExceptions: [
          "Natural monopolies (utilities) are often regulated rather than prohibited",
          "Limited options may exist in rural or underserved markets",
          "Some industries have exemptions from certain antitrust laws"
        ]
      },
    ]
  },
  {
    id: "employment",
    title: "Employment Rights",
    description: "Rights in the workplace and employment relationships",
    rights: [
      {
        id: "minimum-wage",
        title: "Minimum Wage and Overtime",
        description: "Under the Fair Labor Standards Act (FLSA), most employees are entitled to receive at least the federal minimum wage and overtime pay at 1.5 times their regular rate for hours worked beyond 40 in a workweek. Some states have higher minimum wage requirements."
      },
      {
        id: "workplace-safety",
        title: "Workplace Safety",
        description: "The Occupational Safety and Health Act (OSHA) requires employers to provide a workplace free from recognized hazards. You have the right to request an OSHA inspection, receive information about hazards, and be protected from retaliation for reporting unsafe conditions."
      },
      {
        id: "discrimination",
        title: "Protection from Discrimination",
        description: "Federal laws prohibit employment discrimination based on race, color, religion, sex (including pregnancy, gender identity, and sexual orientation), national origin, age (40 or older), disability, or genetic information. These protections apply to hiring, firing, promotions, training, and other employment aspects."
      },
    ]
  },
  {
    id: "housing",
    title: "Housing Rights",
    description: "Rights related to housing and tenancy",
    rights: [
      {
        id: "fair-housing",
        title: "Fair Housing",
        description: "The Fair Housing Act prohibits discrimination in housing based on race, color, national origin, religion, sex, familial status, or disability. This applies to renting, buying, mortgage terms, and other housing-related transactions."
      },
      {
        id: "tenant-rights",
        title: "Tenant Rights",
        description: "As a tenant, you generally have the right to a habitable dwelling, proper notice before landlord entry, security deposit protections, and protection against retaliatory eviction. Specific rights vary by state and local laws."
      },
      {
        id: "eviction-protection",
        title: "Eviction Protections",
        description: "Landlords must follow legal processes for eviction, typically including proper notice and court proceedings. Many jurisdictions have additional protections such as just-cause eviction requirements or special provisions for subsidized housing."
      },
    ]
  },
  {
    id: "family",
    title: "Family Law Rights",
    description: "Rights relating to family relationships and matters",
    rights: [
      {
        id: "marriage-divorce",
        title: "Marriage and Divorce",
        description: "All adults have the right to marry regardless of gender. In divorce, rights typically include equitable distribution of property (or community property in some states), potential spousal support, and parental rights regarding children from the marriage."
      },
      {
        id: "child-custody",
        title: "Child Custody and Support",
        description: "When parents separate, child custody decisions are based on the best interests of the child. Most parents have rights to visitation or shared custody. Child support is typically required from the non-custodial parent based on income and needs."
      },
      {
        id: "domestic-violence",
        title: "Domestic Violence Protection",
        description: "Victims of domestic violence have the right to seek protective orders prohibiting contact by abusers. Many jurisdictions provide emergency ex parte orders for immediate protection, followed by longer-term orders after a hearing."
      },
    ]
  },
  {
    id: "criminal",
    title: "Criminal Defense Rights",
    description: "Constitutional protections in criminal proceedings",
    rights: [
      {
        id: "miranda-rights",
        title: "Miranda Rights",
        description: "When in police custody and being interrogated, you have the right to remain silent, the right to an attorney (including a public defender if you cannot afford one), and the warning that anything you say may be used against you in court."
      },
      {
        id: "search-seizure",
        title: "Protection from Unreasonable Search and Seizure",
        description: "The Fourth Amendment protects against unreasonable searches and seizures. Generally, police need a warrant, consent, or an exception like probable cause to search your person, home, or possessions."
      },
      {
        id: "due-process",
        title: "Due Process Rights",
        description: "You have the right to fair procedures before being deprived of life, liberty, or property. In criminal cases, this includes the right to a fair trial, to confront witnesses, to present evidence, and to be represented by counsel."
      },
    ]
  }
];

const KnowYourRights: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | undefined>(undefined);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query) {
      toast({
        title: "Search Results",
        description: `Showing results for "${query}"`,
      });
    }
  };

  const renderCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'constitutional':
        return <Gavel className="h-6 w-6 text-legal-primary" />;
      case 'consumer':
        return <Clipboard className="h-6 w-6 text-legal-primary" />;
      case 'employment':
        return <User className="h-6 w-6 text-legal-primary" />;
      case 'housing':
        return <Shield className="h-6 w-6 text-legal-primary" />;
      case 'family':
        return <Users className="h-6 w-6 text-legal-primary" />;
      case 'criminal':
        return <Gavel className="h-6 w-6 text-legal-primary" />;
      default:
        return <Info className="h-6 w-6 text-legal-primary" />;
    }
  };

  // Filter categories based on search query if one exists
  const filteredCategories = searchQuery
    ? rightsCategories.map(category => ({
        ...category,
        rights: category.rights.filter(right =>
          right.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          right.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.rights.length > 0)
    : rightsCategories;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero section */}
        <section className="bg-legal-primary text-white py-12 md:py-20">
          <Container className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Know Your Rights</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 mb-8">
              Understand the legal protections and rights you're entitled to in various situations.
            </p>
            <RightsSearch onSearch={handleSearch} />
          </Container>
        </section>

        {/* Main content section */}
        <Container className="py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className="lg:sticky lg:top-24">
                <RightsSidebar activeCategory={activeCategory} className="mb-6" />
                
                <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 text-center">
                  <BookOpen className="h-8 w-8 text-legal-secondary mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Need In-Depth Legal Information?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Access our comprehensive legal resource library for more detailed information.
                  </p>
                  <Button className="bg-legal-primary hover:bg-legal-secondary">
                    View Legal Library
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="w-full lg:w-3/4">
              {filteredCategories.length > 0 ? (
                <div className="space-y-8">
                  {filteredCategories.map(category => (
                    <RightsCategory
                      key={category.id}
                      {...category}
                      icon={renderCategoryIcon(category.id)}
                      className="scroll-mt-24"
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 px-4">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No results found</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    We couldn't find any rights information matching your search. Please try different keywords or browse categories.
                  </p>
                </div>
              )}
              
              <div className="bg-legal-muted border border-legal-accent rounded-lg p-6 mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Disclaimer</h3>
                <p className="text-gray-700">
                  This information provides general legal information but does not constitute legal advice. For advice tailored to your specific situation, please consult with a qualified attorney.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default KnowYourRights;