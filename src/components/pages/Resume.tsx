import React, { useState } from "react";

export default function Resume() {
  return (
    <div className="p-5 flex justify-center items-center lg:px-20">
      <div className="pages_container">
        <div className="resume">
          <div className="resume_container">
            <div className="top_row font-bold ">
              <div>
                <h2>JEBUTU BLESSING OREOFE </h2>
                <p className="subheading text-gray-400">
                  Accountant, Finance Officer, Internal Auditor
                </p>
              </div>
            </div>

            <div className="skills">
              <p className=" tracking-[3px] text-gray-400">
                Email:
                <span className="ml-2 font-normal">
                  jebutublessing@gmailcom
                </span>
              </p>
              <p className=" tracking-[3px] text-gray-400">
                Phone No:
                <span className="ml-2 font-normal phone">
                  +2348165655677
                </span>
              </p>
              <p className=" tracking-[3px] text-gray-400">
                Location:
                <span className="ml-2 font-normal">Lekki Lagos</span>
              </p>
            </div>
            <div className="summary">
              <p className="text-[18px] text-gray-500  w-[75em] leading-12  mt-5 tracking-widest">
                A Driven accountant with over five years of experience
                specializing in accounting, auditing, budgeting, and payroll for
                diverse organizations. Advanced knowledge of generally accepted
                accounting principles and practices. Fosters transparency,
                understanding, and ownership of financial reports and financial
                and operational metrics across the organization—a thorough
                knowledge of applicable laws, regulations, public finance, and
                external reporting.
              </p>
            </div>
            <div className="divider">
              <p className="subheading text-gray-400">Core Skills</p>
              <span></span>
            </div>
            <div className="skills">
              <p className="text-[18px] text-gray-500   leading-12  mt-5 tracking-[2px]">
                Bookkeeping, Tax accounting, Problem SOlving SKills, MS Office,
                Verbal and written communication, Cash Flow analysis,
                Leadership, Analytical Skill, Econometrics
              </p>
            </div>
            <div className="divider">
              <p className="subheading text-gray-400">Familiar With</p>
              <span></span>
            </div>
            <div className="skills">
              <p className="text-[18px] text-gray-500 leading-12  mt-5 tracking-widest">
                Accounting Sage 50, Quickbooks, Advance Microsoft Excel, ERP
              </p>
            </div>
            <div className="divider">
              <p className="subheading text-gray-400">On The Job</p>
              <span></span>
            </div>
            <div className="skills">
              <p className="text-[18px] text-gray-500 leading-12  mt-5 tracking-widest">
                Accounting Sage 50, Quickbooks, Advance Microsoft Excel, ePOS
              </p>
            </div>
            <div className="divider">
              <p className="subheading text-gray-400">
                professional Certifications
              </p>
              <span></span>
            </div>
            <div className="skills">
              <p className="text-[18px] text-gray-500 leading-12  mt-5 tracking-widest">
                AAT, AENTD, ACA
              </p>
            </div>

            <div className="divider">
              <p className="subheading text-gray-400">Work Experience</p>
              <span></span>
            </div>
            <div className="exp_container">
              <section className="experience pt-5">
                <p className="title  flex flex-col">
                  355 groups
                  <span className="text-[14px]">
                    7 Empire homes, Chevron Drive, Lekki, Lagos State.
                  </span>
                  <i>Internal Auditor </i>
                  <span>
                    <br />
                    MARCH 2021 - TILL DATE
                  </span>
                </p>
                <article className="description tracking-[2px]">
                  <p>
                    <span>■</span>
                    Assessing company financial risk.
                  </p>
                  <p>
                    <span>■</span>
                    Ensuring the business adheres to policies, procedures, and
                    regulations.
                  </p>

                  <p>
                    <span>■</span>
                    Data Analysis
                  </p>
                  <p>
                    <span>■</span>
                    Ensuring adequate counting of inventory stock.
                  </p>
                  <p>
                    <span>■</span>
                    Auditing the efficiency of business processes.
                  </p>
                  <p>
                    <span>■</span>
                    Safeguarding assets.
                  </p>
                  <p>
                    <span>■</span>
                    Auditing the accuracy of financial reports.
                  </p>
                </article>
              </section>
              <section className="experience pt-5">
                <p className="title flex flex-col">
                  CLose Watch Technologies.
                  <span className="text-[14px]">
                    37 Abayomi Owulade Street, Off Irawo Street, Ikorodu, Lagos
                    State.
                  </span>
                  <i>Accountant </i>
                  <span>
                    <br />
                    FEBUARY 2019 - MARCH 2021
                  </span>
                </p>
                <article className="description tracking-[2px]">
                  <p>
                    <span>■</span>
                    Analyzed current and past financial data and performance.
                  </p>
                  <p>
                    <span>■</span>Prepared reports and projections based on the
                    analysis provided and communicated of the reports to the
                    wider business
                  </p>

                  <p>
                    <span>■</span>Developed financial models and providing
                    financial forecasts
                  </p>
                  <p>
                    <span>■</span>
                    Reconciled bank and cash balances and with the general
                    ledger.
                  </p>
                  <p>
                    <span>■</span>
                    Identified trends in financial performance and providing
                    recommendations for improvement.
                  </p>
                  <p>
                    <span>■</span>
                    Manage all accounting transactions.
                  </p>
                  <p>
                    <span>■</span>
                    Prepared Monthly Reporting of all statutory payments.
                  </p>
                </article>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
