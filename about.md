---
layout: page
title: About
---

## What is the ESMValTool?

![ESMValTool-logo](/assets/img/EVA-logo.png){:style="float: left;margin-right: 16px;margin-top: 16px;"}
The Earth System Model Evaluation Tool (ESMValTool) is a community
diagnostics and performance metrics tool for the evaluation of Earth
System Models (ESMs) that allows for routine comparison of single or
multiple models, either against predecessor versions or against
observations. The priority of the effort so far has been to target
specific scientific themes focusing on selected Essential Climate
Variables, a range of known systematic biases common to ESMs, such as
coupled tropical climate variability, monsoons, Southern Ocean
processes, continental dry biases and soil hydrology-climate
interactions, as well as atmospheric CO2 budgets, tropospheric and
stratospheric ozone, and tropospheric aerosols. The tool is being
developed in such a way that additional analyses can easily be added.
A set of standard recipes for each scientific topic reproduces specific
sets of diagnostics or performance metrics that have demonstrated their
importance in ESM evaluation in the peer-reviewed literature. The
ESMValTool is a community effort open to both users and developers
encouraging open exchange of diagnostic source code and evaluation
results from the CMIP ensemble. This will facilitate and improve ESM
evaluation beyond the state-of-the-art and aims at supporting such
activities within the Coupled Model Intercomparison Project (CMIP) and
at individual modeling centers. Ultimately, we envisage running the
ESMValTool alongside the Earth System Grid Federation (ESGF) as part of
a more routine evaluation of CMIP model simulations while utilizing
observations available in standard formats (obs4MIPs) or provided by
the user.

## Main Features
     
* Facilitates the complex evaluation of ESMs and their simulations
  submitted to international Model Intercomparison Projects (e.g.,
  CMIP).
* Standardized model evaluation can be performed against observations,
  against other models or to compare different versions of the same
  model.
* Wide scope: includes many diagnostics and performance metrics covering
  different aspects of the Earth System (dynamics, radiation, clouds,
  carbon cycle, chemistry, aerosol, sea-ice, etc.) and their
  interactions.
* Well-established analysis: standard namelists reproduce specific sets
  of diagnostics or performance metrics that have demonstrated their
  importance in ESM evaluation in the peer-reviewed literature.
* Broad documentation: user guide (Eyring et al., 2015); SPHINX; a
  log-file is written containing all the information of a specific call
  of the main script: creation date of running the script, version
  number, analyzed data (models and observations), applied diagnostics
  and variables, and corresponding references. This helps to increase
  the traceability and reproducibility of the results.
* High flexibility: new diagnostics and more observational data can be
  easily added.
* Multi-language support: Python, NCL, R... other open-source languages
  are possible.
* CF/CMOR compliant: data from many different projects can be handled
  (CMIP, obs4mips, ana4mips, CCMI, CCMVal, AEROCOM, etc.). Routines are
  provided to CMOR-ize non-compliant data.
* Integration in modeling workflows: for EMAC, NOAA-GFDL and NEMO, can
  be easily extended.