***

The development of the **DRGs** was begun by dividing all possible principal diagnoses into mutually exclusive principal diagnosis areas referred to as **Major Diagnostic Categories (MDCs)**. The **MS-DRGs** within each MDC are defined by a particular set of patient attributes which include principal diagnosis, specific secondary diagnoses, procedures, sex, and discharge status. Appendix A in the **ICD-10 MS-DRG Definitions Manual** contains a list of each **MS-DRG** with a specification of the MDC and whether the MS-DRG is medical or surgical.

**The purpose of this document is to explain the patient attributes which define each MS-DRG. For each MDC, the following information is provided:**

1.  A listing of the MS-DRGs in the MDC. The surgical MS-DRGs are listed in hierarchical GROUPER order rather than strict numerical order. See page 4 of this document for more on the surgical hierarchy.
2.  A listing of all the ICD-10-CM diagnosis codes assigned to the MDC.
3.  A logic table that provides a detailed description of patient attributes which define each MS-DRG in the MDC.

Each logic table specifies in its columns the conditions which determine the [[MS-DRG]] assigned. The rows specify individual MS-DRGs. Each cell in the logic table indicates whether a specific condition in the column is necessary for the [[MS-DRG Overview|MS-DRG]] in the row to be assigned. The combination of the cells which are required for a specific MS-DRG represent a complete description of the assignment logic for that MS-DRG.

In the sample logic table below, discharge status and the presence of either a major complication or comorbidity (MCC) or complication or comorbidity (CC) will define the MS-DRG assignment. With a discharge status indicating that the patient was discharged alive, the presence of an MCC would assign the patient to **MS-DRG 280**, a CC would assign the patient to **MS-DRG 281**, while having neither would assign the patient to **MS-DRG 282**. If the discharge status indicates the patient died, an MCC would assign the patient to **MS-DRG 283**, a CC would assign the patient to **MS-DRG 284**, while having neither an MCC or CC would assign the patient to MS-DRG 285.

**Table 1. Sample logic table**

<table>
  <thead>
    <tr>
      <th>Acute Myocardial Infarction</th>
      <th>[blank]</th>
      <th>[blank]</th>
      <th>[blank]</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Discharged Alive</td>
      <td>MCC</td>
      <td>CC</td>
      <td>MS-DRG</td>
    </tr>
    <tr>
      <td>Yes</td>
      <td>Yes</td>
      <td>n/a</td>
      <td>280</td>
    </tr>
    <tr>
      <td>Yes</td>
      <td>No</td>
      <td>Yes</td>
      <td>281</td>
    </tr>
    <tr>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
      <td>282</td>
    </tr>
    <tr>
      <td>No</td>
      <td>Yes</td>
      <td>n/a</td>
      <td>283</td>
    </tr>
    <tr>
      <td>No</td>
      <td>No</td>
      <td>Yes</td>
      <td>284</td>
    </tr>
    <tr>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>285</td>
    </tr>
  </tbody>
</table>

The description of the patient attributes which define each MS-DRG begins with a one-line description of the MS-DRG. This description includes the MS-DRG number and a brief description of the MS-DRG. Following the MS-DRG description is a series of headings which indicate the patient characteristics used to define the MS-DRG. These headings indicate how the patient’s diagnoses and procedures are used in determining MS-DRG assignment. Following each heading is a complete list of all the ICD-10-CM diagnosis or ICD-10-PCS procedure codes included in the MS-DRG. In the logic tables, the surgical MS-DRGs are listed in hierarchical GROUPER order. The following headings appear in the MS-DRG definitions:

*   **Principal diagnoses.** Indicates that a specific set of principal diagnoses are used in the definition of the MS-DRG.
*   **Operating room procedures.** Indicates that a specific set of procedures are used in the definition of the MS-DRG. A complete list of all the ICD-10-PCS codes designated as operating room procedures is contained in Appendix E in the ICD-10 MS-DRG Definitions Manual.
*   **Non-operating room procedures.** Indicates that a specific set of procedure codes designated as non-operating room procedures are used in the definition of the MS-DRG. The set of procedure codes contain only procedures which are not designated as operating room procedures however affect MS-DRG assignment to certain MS-DRGs (i.e., ICD-10-PCS codes listed in Appendix E with an asterisk). For example, cardiac catheterization is used to define MS-DRGs 233-234.
*   **Any operating room procedure.** Indicates that the presence of any ICD-10-PCS code which is designated as an operating room procedure (see Appendix E) is used in the definition of the MS-DRG. For example, patients with systemic infectious diseases are assigned to MS-DRG 853 if any operating room procedure is performed.
*   **Any combination of two or more operating room procedures.** Indicates that in order to be assigned to the specified MS-DRG, two or more procedures from the list must be documented in the patient’s record. For example, in order to be assigned to MS-DRGs 461-462, a patient must have had two or more major joint procedures.
*   **Any of the following combinations.** Indicates that both procedures in the specified combinations of procedures must be documented in the patient’s record to be assigned to the specified MS-DRG. For example, in order to be assigned to MS-DRGs 242-244, a patient must have had both procedures in the combination (e.g., 0JH605Z and 02H40MZ).

*   **Principal or secondary diagnoses.** Indicates that a specific set of diagnoses are used in the definition of the MS-DRG. The diagnoses may be listed as principal or as any one of the secondary diagnoses. A special case of this condition is PRE-MDC MS-DRG 008 in which two diagnoses (e.g., renal and diabetic) must both be documented in the patient’s record in order to be assigned to PRE-MDC MS-DRG 008. Appendix B in the ICD-10 MS-DRG Definitions Manual contains a list of each diagnosis code, as well as the MDC and the MS-DRGs to which the diagnosis is used to define the logic of the DRG either as a principal or secondary diagnosis.
*   **Secondary diagnoses.** Indicates that a specific set of secondary diagnoses are used in the definition of the MS-DRG. For example, a secondary diagnosis of acute leukemia with chemotherapy is used to define MS-DRG 839.
*   **Only secondary diagnoses.** Indicates that in order to be assigned to the specified MS-DRG no secondary diagnoses other than those in the specified list must be documented in the patient’s record. For example, in order to be assigned to MS-DRG 795, only secondary diagnoses from the specified list must be documented on the patient’s record.

## Secondary Diagnoses

Each ICD-10-CM diagnosis code is categorized as a major complication or comorbidity (MCC), complication or comorbidity (CC), or non-complication or comorbidity (NonCC) after evaluation to determine the extent to which its presence as a secondary diagnosis results in increased hospital resource use.

Depending on the principal diagnosis of the patient, some diagnoses on the list of complications and comorbidities, when reported as a secondary diagnosis, may be excluded if they are closely related to the principal diagnosis.

The **CC Exclusion List** is included as Appendix C in the **ICD-10 MS-DRG** **Definitions Manual** and includes three lists identified as **Part 1, Part 2, and Part 3. Part 1** is the list of all diagnosis codes that are defined as a CC or MCC when reported as a secondary diagnosis. For all diagnosis codes on the list, a link is provided to a collection of diagnosis codes which, when reported as the principal diagnosis, would cause the CC or MCC diagnosis to be considered as a NonCC. Part 2 is the list of diagnosis codes designated as an MCC only for patients discharged alive; otherwise, they are assigned as a NonCC. Part 3 includes the list of MS-DRGs subject to what is referred to as suppression logic. When secondary diagnosis codes that are included in the definition of the logic for the listed **MS-DRGs** are reported, suppression logic is activated for appropriate grouping and **MS-DRG assignment**. Therefore, secondary diagnosis codes designated as CC or MCC conditions, included in the definition of the logic for the listed MS-DRGs in Part 3, are excluded from acting as CCs or MCCs for severity in assignment to these MS-DRGs.

Appendix G in the **ICD-10 MS-DRG Definitions Manual lists** the diagnoses defined as complications or comorbidities except when reported in conjunction with the principal diagnosis in the corresponding **CC Exclusion List** in Appendix C. Appendix H in the **ICD-10 MS-DRG Definitions Manual lists** the diagnoses defined as major complications or comorbidities except when reported in conjunction with the principal diagnosis in the corresponding CC Exclusion List in Appendix C.

## Surgical Hierarchy

Within each MDC, the **surgical MS-DRGs** are defined based on the precise surgical procedure performed. In general, specific groups of surgical procedures are defined to distinguish surgical patients according to the extent of the surgical procedure performed. Since some inpatient stays entail multiple surgical procedures, each one of which, occurring by itself, could result in assignment of the case to a different **MS-DRG** within the MDC to which the principal diagnosis is assigned, it is necessary to have a decision rule by which these cases are assigned to a single MS-DRG. The surgical hierarchy, an ordering of surgical classes from most resource-intensive to least resource-intensive, performs that function.

Application of the surgical hierarchy ensures that cases involving multiple surgical procedures are assigned to the **MS-DRG** associated with the most resource-intensive surgical class. It should be noted that because of the surgical hierarchy, the ordering of the surgical procedures on the patient abstract has no influence on the assignment of the surgical class and **MS-DRG**. Appendix D in the **ICD-10 MS-DRG Definitions Manual lists** the surgical hierarchy for each MDC.

## Unrelated Operating Room Procedures

Each **ICD-10-PCS procedure code** has designations that determine whether and in what way the presence of that procedure on a claim impacts the **MS-DRG assignment.** **ICD-10-PCS procedure codes** designated as operating procedures for purposes of **MS-DRG assignment** are further classified as either extensive or non-extensive.

There are **MS-DRGs** for patients for whom all their operating room procedures performed are unrelated to the **MDC** of the patient’s principal diagnosis. Typically, these are patients admitted for a particular diagnosis requiring no surgery who develop a complication unrelated to the principal diagnosis and have an operating room procedure performed for treatment of the complication or have a diagnostic procedure performed for another concurrent diagnosis.

Accordingly, the **MS-DRGs** for operating room procedures unrelated to the principal diagnosis have been divided into two groups based on hospital resource use associated with the procedure: extensive and non-extensive. For example, a patient with a principal diagnosis of congestive heart failure who develops acute [[cholecystitis]] and whose only inpatient procedure is an open [[resection]] of gallbladder will be assigned to the extensive unrelated procedure **MS-DRG** since an open [[cholecystectomy]] is considered an extensive procedure. However, if a patient has a principal diagnosis of [[arrhythmia]] and has a [[percutaneous]] diagnostic [[excision]] of breast for a mass discovered while in the hospital, the patient will be assigned to the non-extensive unrelated **MS-DRG** since the [[percutaneous]] biopsy is considered a non-extensive procedure. The complete definition of the **MS-DRGs** for operating room procedures unrelated to the principal diagnosis is contained in Appendix F in the **ICD-10 MS-DRG Definitions Manual.**

## Hospital Acquired Conditions

The **Deficit Reduction Act of 2005 (P.L.109-171)** requires **CMS** to eliminate any increase in payment due to the occurrence of selected post admission complications, known as **Hospital Acquired Conditions (HACs). HACs** are harmful events (**e.g. accidental laceration during a procedure**) or negative outcomes (**e.g. decubitus ulcer**) that result from the processes of care and treatment rather than from a natural progression of underlying illness. Under the **Medicare inpatient prospective payment system (IPPS)**, the occurrence of a **HAC** can result in a higher payment because the presence of the **HAC** diagnosis may cause the patient to be assigned to a higher-paying **MS-DRG.**

When the **IPPS** was implemented, the standard claim form did not contain an indicator of whether a secondary diagnosis was **present on admission (POA)**. The **Deficit Reduction Act** requires hospitals to report a POA indicator for all diagnoses beginning in **fiscal year (FY) 2008**. The reporting of the **POA indicator** allows designated conditions that occur post admission to be identified. The **Deficit Reduction Act** requires that the post admission conditions selected as **HAC** diagnoses be (1) high cost, high volume, or both; (2) be a **CC** or **MCC** when reported as secondary diagnosis and (3) be reasonably preventable through the application of **evidence-based guidelines**.

<br>

**For FY 2009, CMS designated 12 HAC categories:**

**1** - Foreign Object Retained After Surgery
**2** - Air Embolism
**3** - Blood Incompatibility
**4** - Stage III and IV Pressure Ulcers
**5** - Falls and Trauma
**6** - Catheter-Associated Urinary Tract Infection (UTI)
**7** - Vascular Catheter-Associated Infection
**8** - Surgical Site Infection – Mediastinitis After Coronary Bypass Graft (CABG)
**9** - Manifestations of Poor Glycemic Control
**10** - Deep Vein Thrombosis (DVT) / Pulmonary Embolism (PE) with Total Knee or Hip Replacement
**11** - Surgical Site Infection - Bariatric Surgery
**12** - Surgical Site Infection - Certain Orthopedic Procedures of Spine, Shoulder and Elbow

**For FY 2013, two additional HAC categories were added:**
**13** - Surgical Site Infection (SSI) Following Cardiac Implantable Electronic Device (CIED) Procedures
**14** - Iatrogenic Pneumothorax with Venous Catheterization.

<br>

**The Hospital Acquired Condition (HAC) list is contained in Appendix I in the ICD-10 MS-DRG Definitions Manual.**

Beginning in FY 2009, **HAC** diagnoses are excluded from **MS-DRG assignment** when reported with certain **POA indicators**. To review the implications of each **POA Indicator**, *see Table 2*. For example, if a **HAC** diagnosis is present at admission (**"Y" is reported for the POA Indicator**), the diagnosis will continue to be classified as a CC or MCC and may affect the **MS-DRG assignment**. However, if the **HAC** diagnosis is not present at admission (**"N" is reported for the POA Indicator**), it will be disregarded from acting as a CC or MCC and will not affect **MS-DRG assignment**. The exclusion of a **HAC** diagnosis from **MS-DRG assignment** does not necessarily mean the **MS-DRG** will change. Some **MS-DRGs** are not differentiated by the presence of a CC or MCC. For such **MS-DRGs** the exclusion of a **HAC** diagnosis will have no impact on **MS-DRG assignment**. Further, if in addition to a **HAC** diagnosis there are non-**HAC** secondary diagnoses present that are designated as a CC or MCC, the exclusion of the **HAC** diagnosis may not change the **MS-DRG**.

<br>

**Table 2. List of POA indicators**

<table>
  <thead>
    <tr>
      <th>POA Indicator</th>
      <th>Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Y</b></td>
      <td>Diagnosis was present at time of inpatient admission.</td>
    </tr>
    <tr>
      <td><b>N</b></td>
      <td>Diagnosis was not present at time of inpatient admission.</td>
    </tr>
    <tr>
      <td><b>U</b></td>
      <td>Documentation insufficient to determine if the condition was present at the time of inpatient admission.</td>
    </tr>
    <tr>
      <td><b>W</b></td>
      <td>Clinically undetermined. Provider unable to clinically determine whether the condition was present at the time of inpatient admission.</td>
    </tr>
    <tr>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>1</b></td>
      <td>Unreported/Not used. Exempt from POA reporting. This code is equivalent to a blank on the claim form. The “1” POA Indicator should not be applied to any codes on the HAC list.</td>
    </tr>
  </tbody>
</table>

---

## Ungroupable MS-DRG

Patients are assigned to an ungroupable **[[MS-DRG]]** if certain types of errors which may affect **MS-DRG assignment** are present. Patients with an invalid or non-existent **ICD-10-CM code** as principal diagnosis will be assigned to the ungroupable **[[MS-DRG Overview|MS-DRG]]**. Patients will also be assigned to the ungroupable **MS-DRG** if either the sex or the discharge status is invalid and necessary for **MS-DRG assignment**. For example, if a patient has a non-specific discharge status and has a principal diagnosis of an **acute myocardial infarction**, the patient will be assigned to the ungroupable **MS-DRG** since patients with acute myocardial infarction will be assigned to different **MS-DRGs** depending on whether their discharge status is alive or died. On the other hand, if the same patient had a principal diagnosis of **[[hypertension]]**, the assignment would not be to the ungroupable **MS-DRG** since discharge status is not used in the definition of the **MS-DRG** for hypertensive patients.

---

# MS-DRG GROUPER

The **MS-DRG GROUPER** is a computer software program, provided in both mainframe and PC versions, that classifies a patient's hospital stay into an established **MS-DRG** from data elements reported by the hospital including admit date, discharge date, principal diagnosis, specific secondary diagnoses, procedures, sex, and discharge status on a case-by-case basis. The general process for assignment of a**n MS-DRG** by the **GROUPER** software is shown by the following tree diagram (**Figure 1**).

![[Pasted image 20260826180538.jpg]]
