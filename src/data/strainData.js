export const strainData = {
  "Technology Updates": {
    color: "from-blue-500 to-cyan-400",
    icon: "Cpu",
    description: "Latest advances in strain imaging technology and standardization",
    topics: {
      "Strain Standardization Task Force": {
        tips: [
          "Use midwall/full-wall preferred method for consistency across vendors",
          "Reduce intervendor variability by following ASE/EACVI guidelines",
          "Maintain software version consistency within your institution",
          "Document software version in all reports for longitudinal comparison"
        ],
        videos: [
          {
            title: "ASE Strain Standardization Guidelines",
            source: "ASE360 Official",
            url: "https://www.youtube.com/watch?v=qbmhyucnY5I",
            duration: "45 min",
            type: "Lecture",
            free: true
          },
          {
            title: "Strain Imaging - Common Errors and Artifacts",
            source: "Cleveland Clinic / ASE",
            url: "https://www.dicardiology.com/videos/video-strain-imaging-common-errors-and-artifacts",
            duration: "30 min",
            type: "Case-Based",
            free: true
          }
        ]
      },
      "STE vs TDI": {
        tips: [
          "STE (Speckle Tracking): Best for rapid chamber evaluation and GLS",
          "TDI (Tissue Doppler): Use when superior temporal resolution is needed",
          "STE is preferred for Global Longitudinal Strain (GLS) measurements",
          "Understand the technical differences: STE tracks speckles, TDI measures velocity"
        ],
        videos: [
          {
            title: "Tissue Doppler and Strain Imaging Fundamentals",
            source: "ASE360",
            url: "https://www.youtube.com/watch?v=qbmhyucnY5I",
            duration: "60 min",
            type: "Comprehensive Lecture",
            free: true
          },
          {
            title: "Strain Fundamentals Made Easy",
            source: "ASE / Ramathibodi Hospital",
            url: "https://www.dicardiology.com/videos/video-echocardiography-strain-fundamentals-made-easy",
            duration: "25 min",
            type: "Tutorial",
            free: true
          }
        ]
      },
      "Technical Pitfalls": {
        tips: [
          "Avoid apical foreshortening - ensure true apical views",
          "Ensure adequate endocardial tracking - adjust ROI if needed",
          "Watch for ROI size errors - too large or small affects accuracy",
          "Pay attention to timing of AVC (Aortic Valve Closure) and MVC (Mitral Valve Closure)",
          "Frame rate optimization: 40-80 fps ideal for STE"
        ],
        videos: [
          {
            title: "Strain Imaging - Common Errors and Artifacts",
            source: "Cleveland Clinic / ASE 2016",
            url: "https://www.dicardiology.com/videos/video-strain-imaging-common-errors-and-artifacts",
            duration: "35 min",
            type: "Expert Lecture",
            free: true
          },
          {
            title: "Technical Quality Control in Strain Imaging",
            source: "ASE Learning Hub",
            url: "https://www.asecho.org/practice-clinical-resources/resource-library/strain-imaging/",
            duration: "Module-based",
            type: "CME Course",
            free: false
          }
        ]
      }
    }
  },
  "Normal Ranges (LLN)": {
    color: "from-emerald-500 to-teal-400",
    icon: "Activity",
    description: "Reference values and factors affecting strain measurements",
    topics: {
      "LV Myocardial GLS": {
        tips: [
          "Normal GLS: > -18% (more negative is better)",
          "Values between -18% and -15% suggest mild impairment",
          "Values > -15% (less negative) indicate significant dysfunction",
          "Remember: GLS is a negative number - don't forget the minus sign!"
        ],
        videos: [
          {
            title: "Normal Strain Values and Clinical Application",
            source: "Mayo Clinic 2024",
            url: "https://www.youtube.com/watch?v=VHM4_QGlBEE",
            duration: "40 min",
            type: "Clinical Application",
            free: true
          }
        ]
      },
      "RV Free Wall LS": {
        tips: [
          "Men: -20% (normal lower limit)",
          "Women: -21% (normal lower limit)",
          "Free wall only (segments: basal, mid, apical)",
          "RV strain is more variable than LV - ensure good image quality"
        ],
        videos: [
          {
            title: "Right Ventricular Strain Assessment",
            source: "ASE Guidelines",
            url: "https://www.asecho.org/practice-clinical-resources/resource-library/strain-imaging/",
            duration: "20 min",
            type: "Guideline Review",
            free: true
          }
        ]
      },
      "LA Reservoir Strain": {
        tips: [
          "Normal range: 23% to 60%",
          "Lower values indicate reduced atrial compliance",
          "Useful in HFpEF and atrial fibrillation assessment",
          "Measure at end-ventricular systole (maximal LA volume)"
        ],
        videos: [
          {
            title: "Left Atrial Strain: Technique and Application",
            source: "ASE Learning Hub",
            url: "https://www.asecho.org/practice-clinical-resources/resource-library/strain-imaging/",
            duration: "25 min",
            type: "How-To",
            free: false
          }
        ]
      },
      "Factors Affecting Strain": {
        tips: [
          "Age: Strain decreases with age (normal aging)",
          "Gender: Women typically have higher (more negative) GLS than men",
          "Loading conditions: Preload and afterload affect strain values",
          "Blood pressure: Acute changes can alter strain readings",
          "Heart rate: Very high rates may reduce accuracy"
        ],
        videos: [
          {
            title: "Physiological Variation in Strain Imaging",
            source: "ASE Textbook Chapter",
            url: "https://www.asecho.org/practice-clinical-resources/resource-library/strain-imaging/",
            duration: "Text-based",
            type: "Reference",
            free: false
          }
        ]
      }
    }
  },
  "Clinical Applications": {
    color: "from-purple-500 to-pink-400",
    icon: "HeartPulse",
    description: "Practical application of strain imaging in various cardiac conditions",
    topics: {
      "Heart Failure": {
        tips: [
          "Stage B (Pre-heart failure): Use strain for early detection, especially in amyloidosis",
          "HFrEF: Monitor prognosis and LVEF trajectory - strain predicts recovery",
          "HFpEF: Diagnostic aid and risk stratification - GLS often reduced despite normal EF",
          "Strain is more sensitive than EF for detecting early dysfunction"
        ],
        videos: [
          {
            title: "Strain in Heart Failure: From HFrEF to HFpEF",
            source: "ASE360 Conference",
            url: "https://www.youtube.com/playlist?list=PLp9M4x8WmO70PAoMoKADjNp0vMxcM7gE7",
            duration: "50 min",
            type: "Joint Echo Conference",
            free: true
          },
          {
            title: "Applying Strain in Practice – Chemotherapy and Beyond",
            source: "Mayo Clinic 2024",
            url: "https://www.youtube.com/watch?v=VHM4_QGlBEE",
            duration: "45 min",
            type: "Clinical Cases",
            free: true
          }
        ]
      },
      "Cardio-Oncology": {
        tips: [
          "Baseline assessment is MANDATORY before starting cardiotoxic therapy",
          "Subclinical toxicity: Look for >12-15% relative drop from baseline",
          "Absolute drop >3% may also indicate early toxicity",
          "Use strain to guide cardioprotective therapy initiation (ACEi/ARB, beta-blockers)",
          "Monitor serially during treatment and follow-up"
        ],
        videos: [
          {
            title: "Strain in Cardio-Oncology: 2024 Update",
            source: "Mayo Clinic",
            url: "https://www.youtube.com/watch?v=VHM4_QGlBEE",
            duration: "40 min",
            type: "Clinical Practice",
            free: true
          },
          {
            title: "ASE Comprehensive Strain Imaging - Cardiotoxicity Chapter",
            source: "ASE Learning Hub",
            url: "https://www.asecho.org/practice-clinical-resources/resource-library/strain-imaging/",
            duration: "Chapter review",
            type: "Textbook",
            free: false
          }
        ]
      },
      "Ischemic Heart Disease": {
        tips: [
          "Non-STEMI: Strain helps with diagnosis and localization of ischemia",
          "Post-MI: Use for remodeling prediction - abnormal strain predicts adverse remodeling",
          "Viability assessment: Look for dobutamine response in akinetic segments",
          "Peak systolic strain correlates with transmurality of scar",
          "Postsystolic shortening may indicate ischemia"
        ],
        videos: [
          {
            title: "Strain in Ischemic Heart Disease",
            source: "ASE Learning Hub",
            url: "https://www.asecho.org/practice-clinical-resources/resource-library/strain-imaging/",
            duration: "Module 8",
            type: "Case Series",
            free: false
          }
        ]
      },
      "Valvular Heart Disease": {
        tips: [
          "Aortic Stenosis (AS): Prognosis in asymptomatic patients - reduced strain predicts earlier symptoms",
          "Aortic Regurgitation (AR): Timing of intervention - strain helps identify early LV dysfunction",
          "Mitral Regurgitation (MR): Supranormal strain may mask early dysfunction; look for normalization after correction",
          "Serial strain assessment guides timing of valve intervention"
        ],
        videos: [
          {
            title: "Strain in Valvular Heart Disease",
            source: "Cleveland Clinic Valve Summit",
            url: "https://www.clevelandclinicmeded.com/self-study-cme/",
            duration: "60 min",
            type: "CME Course",
            free: false
          }
        ]
      },
      "Special Populations": {
        tips: [
          "Athlete's Heart: Distinguish from HCM - strain patterns differ (apical sparing in HCM)",
          "Congenital Heart Disease: Essential for RV monitoring in repaired TOF, systemic RV",
          "Atrial Fibrillation: LA strain predicts recurrence after ablation and thromboembolic risk",
          "Hypertrophic Cardiomyopathy: Apical sparing pattern is characteristic"
        ],
        videos: [
          {
            title: "How to Perform Strain in Patients with HCM",
            source: "ASE360 Microlesson",
            url: "https://www.youtube.com/watch?v=M_AAD9RD3rc",
            duration: "10 min",
            type: "Microlesson",
            free: true
          },
          {
            title: "Joint Echo Conference: Hypertrophic Cardiomyopathy",
            source: "ASE360",
            url: "https://www.youtube.com/playlist?list=PLp9M4x8WmO70PAoMoKADjNp0vMxcM7gE7",
            duration: "62 min",
            type: "Conference",
            free: true
          }
        ]
      }
    }
  },
  "Future Directions": {
    color: "from-amber-500 to-orange-400",
    icon: "TrendingUp",
    description: "Emerging technologies and future applications in strain imaging",
    topics: {
      "3D Strain": {
        tips: [
          "Technical resolution needs improvement for routine clinical use",
          "More comprehensive assessment of all myocardial segments",
          "Better assessment of dyssynchrony in 3 dimensions",
          "Currently used mainly in research and select clinical cases"
        ],
        videos: [
          {
            title: "3D Strain: Technical Advances and Clinical Applications",
            source: "ASE Scientific Sessions",
            url: "https://www.youtube.com/c/ASE360/playlists",
            duration: "30 min",
            type: "Technology Review",
            free: true
          }
        ]
      },
      "Myocardial Work": {
        tips: [
          "Pressure-strain loops integrate afterload assessment",
          "More load-independent than strain alone",
          "Useful in conditions with altered afterload (AS, hypertension)",
          "Global work index and global constructive work are key parameters"
        ],
        videos: [
          {
            title: "Myocardial Work: From Theory to Practice",
            source: "ASE Learning Hub",
            url: "https://www.asecho.org/practice-clinical-resources/resource-library/strain-imaging/",
            duration: "45 min",
            type: "Advanced Concepts",
            free: false
          }
        ]
      },
      "Mechanical Dispersion": {
        tips: [
          "Standard deviation of time to peak strain",
          "Predicts arrhythmic risk in cardiomyopathies",
          "Useful in HCM, dilated cardiomyopathy, and post-MI risk stratification",
          "Values > 70-80 ms suggest increased arrhythmic risk"
        ],
        videos: [
          {
            title: "Mechanical Dispersion and Arrhythmic Risk",
            source: "ASE Textbook Chapter 5",
            url: "https://www.asecho.org/practice-clinical-resources/resource-library/strain-imaging/",
            duration: "Chapter content",
            type: "Educational",
            free: false
          }
        ]
      },
      "Artificial Intelligence": {
        tips: [
          "Automated workflows reduce interobserver variability",
          "AI-assisted view recognition and quality control",
          "PanEcho: Stanford's AI-enabled complete echo interpretation",
          "Future: Real-time strain analysis during image acquisition"
        ],
        videos: [
          {
            title: "PanEcho: AI-Enabled Echocardiography Interpretation",
            source: "Stanford MedAI",
            url: "https://www.classcentral.com/course/youtube-medai-148-panecho-toward-complete-ai-enabled-echocardiography-interpretation-gregory-holste-476236",
            duration: "40 min",
            type: "AI Research",
            free: true
          },
          {
            title: "Machine Learning for Cardiac Imaging",
            source: "MIT OpenCourseWare",
            url: "https://ocw.mit.edu/courses/6-s897-machine-learning-for-healthcare-spring-2019/resources/lecture-10-application-of-machine-learning-to-cardiac-imaging/",
            duration: "81 min",
            type: "Academic Lecture",
            free: true
          }
        ]
      }
    }
  }
};
